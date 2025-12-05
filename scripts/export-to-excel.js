/**
 * Script to export form submissions to Excel/CSV format
 * Run with: node scripts/export-to-excel.js
 * 
 * Make sure you have .env file with DATABASE_URL set
 */

// Load environment variables first, before importing Prisma
const path = require('path')
require('dotenv').config({ path: path.join(__dirname, '..', '.env') })

const { PrismaClient } = require('@prisma/client')
const fs = require('fs')

const prisma = new PrismaClient()

async function exportToCSV() {
  try {
    console.log('Fetching submissions from database...')
    console.log('DATABASE_URL:', process.env.DATABASE_URL ? 'Found' : 'NOT FOUND')
    
    const submissions = await prisma.application.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    })

    if (submissions.length === 0) {
      console.log('No submissions found.')
      return
    }

    // Create CSV content
    const headers = ['ID', 'Full Name', 'Email', 'Phone Number', 'Reason', 'Created At']
    const csvRows = [headers.join(',')]

    submissions.forEach((sub) => {
      const row = [
        sub.id,
        `"${sub.fullName.replace(/"/g, '""')}"`,
        `"${sub.email}"`,
        `"${sub.phoneNumber}"`,
        `"${sub.reason.replace(/"/g, '""').replace(/\n/g, ' ')}"`,
        sub.createdAt.toISOString(),
      ]
      csvRows.push(row.join(','))
    })

    const csvContent = csvRows.join('\n')
    
    // Save to file
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-').split('T')[0]
    const filename = `form-submissions-${timestamp}.csv`
    const filepath = path.join(process.cwd(), 'exports', filename)
    
    // Create exports directory if it doesn't exist
    const exportsDir = path.join(process.cwd(), 'exports')
    if (!fs.existsSync(exportsDir)) {
      fs.mkdirSync(exportsDir, { recursive: true })
    }
    
    fs.writeFileSync(filepath, csvContent, 'utf8')
    
    console.log(`✅ Exported ${submissions.length} submission(s) to ${filepath}`)
    console.log('\nYou can open this CSV file in Excel or Google Sheets.')
    
  } catch (error) {
    console.error('Error exporting data:', error)
    console.error('\nMake sure your .env file exists and has DATABASE_URL set.')
  } finally {
    await prisma.$disconnect()
  }
}

exportToCSV()
