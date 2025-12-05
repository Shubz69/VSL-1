'use client'

interface HeroSectionProps {
  onSignUpClick: () => void
}

export default function HeroSection({ onSignUpClick }: HeroSectionProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-900/20 via-dark-900 to-dark-900"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-700/10 rounded-full blur-3xl animate-pulse delay-700"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-primary-400 via-primary-300 to-primary-500 bg-clip-text text-transparent animate-fade-in">
          Transform Your Life Through
          <span className="block mt-2">Psychology</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto animate-slide-up">
          Discover the power of psychology with expert-led courses and personalized 1-to-1 sessions. 
          Unlock your potential and create lasting change.
        </p>

        <button
          onClick={onSignUpClick}
          className="px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-500 hover:to-primary-600 text-white font-semibold text-lg rounded-lg shadow-lg shadow-primary-500/50 transform hover:scale-105 transition-all duration-300 animate-slide-up"
        >
          Reserve Your Seat Now
        </button>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary-400 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  )
}


