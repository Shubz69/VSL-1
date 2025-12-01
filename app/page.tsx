'use client'

import { useState, useRef } from 'react'
import VideoSection from '@/components/VideoSection'
import HeroSection from '@/components/HeroSection'
import InfoSection from '@/components/InfoSection'
import SignUpForm from '@/components/SignUpForm'

export default function Home() {
  const formRef = useRef<HTMLDivElement>(null)

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-dark-900 via-dark-800 to-dark-900">
      <HeroSection onSignUpClick={scrollToForm} />
      <VideoSection onSignUpClick={scrollToForm} />
      <InfoSection />
      <div ref={formRef}>
        <SignUpForm />
      </div>
    </main>
  )
}

