'use client'

import { useRef } from 'react'
import VideoSection from '@/components/VideoSection'
import HeroSection from '@/components/HeroSection'
import IntroSection from '@/components/IntroSection'
import ProblemSection from '@/components/ProblemSection'
import SolutionSection from '@/components/SolutionSection'
import InfoSection from '@/components/InfoSection'
import DeepDiveSection from '@/components/DeepDiveSection'
import TransformationSection from '@/components/TransformationSection'
import EvidenceSection from '@/components/EvidenceSection'
import ProgramDetailsSection from '@/components/ProgramDetailsSection'
import FinalCTASection from '@/components/FinalCTASection'
import SignUpForm from '@/components/SignUpForm'

export default function Home() {
  const formRef = useRef<HTMLDivElement>(null)

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-dark-900 via-dark-800 to-dark-900">
      <HeroSection onSignUpClick={scrollToForm} />
      <IntroSection onSignUpClick={scrollToForm} />
      <ProblemSection />
      <VideoSection onSignUpClick={scrollToForm} />
      <SolutionSection onSignUpClick={scrollToForm} />
      <InfoSection />
      <DeepDiveSection />
      <TransformationSection />
      <EvidenceSection />
      <ProgramDetailsSection onSignUpClick={scrollToForm} />
      <FinalCTASection onSignUpClick={scrollToForm} />
      <div ref={formRef}>
        <SignUpForm />
      </div>
    </main>
  )
}

