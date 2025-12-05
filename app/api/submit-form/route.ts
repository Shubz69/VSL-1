import { NextRequest, NextResponse } from 'next/server'

// Dynamic import to avoid build-time issues
let prisma: any = null
async function getPrisma() {
  if (!prisma) {
    const { prisma: prismaClient } = await import('@/lib/prisma')
    prisma = prismaClient
  }
  return prisma
}

export const dynamic = 'force-dynamic'
export const runtime = 'nodejs'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { fullName, email, phoneNumber, reason } = body

    // Validate required fields
    if (!fullName || !email || !phoneNumber || !reason) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    // Get Prisma client
    const prismaClient = await getPrisma()
    
    // Save to database
    const submission = await prismaClient.application.create({
      data: {
        fullName,
        email,
        phoneNumber,
        reason,
      },
    })

    // Send notification email (don't block response if email fails)
    try {
      const { sendNotificationEmail } = await import('@/lib/email')
      await sendNotificationEmail({
        fullName,
        email,
        phoneNumber,
        reason,
      })
    } catch (emailError) {
      console.error('Email notification failed (non-critical):', emailError)
      // Continue even if email fails - data is already saved
    }

    return NextResponse.json(
      { 
        success: true, 
        message: 'Application submitted successfully',
        id: submission.id 
      },
      { status: 200 }
    )
  } catch (error: any) {
    console.error('Error saving application:', error)
    
    // Handle database connection errors gracefully
    if (error.code === 'P1001' || error.code === 'P1002') {
      return NextResponse.json(
        { error: 'Database connection error. Please try again later.' },
        { status: 503 }
      )
    }

    // Handle duplicate email errors
    if (error.code === 'P2002') {
      return NextResponse.json(
        { error: 'An application with this email already exists.' },
        { status: 409 }
      )
    }

    return NextResponse.json(
      { error: 'Failed to submit application. Please try again.' },
      { status: 500 }
    )
  }
}

