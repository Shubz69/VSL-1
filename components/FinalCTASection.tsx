'use client'

interface FinalCTASectionProps {
  onSignUpClick: () => void
}

export default function FinalCTASection({ onSignUpClick }: FinalCTASectionProps) {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-dark-800">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight text-center">
          The Question Isn't Whether Psychology Can Transform Your Life
        </h2>
        
        <div className="space-y-6 text-lg md:text-xl text-gray-300 leading-relaxed mb-12">
          <p className="text-center text-2xl text-primary-400 font-semibold">
            The question is: Are you ready?
          </p>
          
          <p>
            You've read this far. You understand that psychology offers something different—something deeper, more effective, more transformative than surface-level self-help. You know that understanding how your mind actually works is the key to creating the life you want.
          </p>
          
          <p>
            The only question left is whether you're ready to take that step. Ready to move from wondering about your potential to actually unlocking it. Ready to move from managing symptoms to creating transformation. Ready to stop hoping things will get better and start knowing exactly how to make them better.
          </p>
          
          <p>
            <span className="text-primary-400 font-semibold">Your future self is waiting.</span> The version of you that has clarity instead of confusion, confidence instead of doubt, capability instead of limitation. That version of you exists. The only thing standing between you and that person is understanding the psychology that makes the difference.
          </p>
          
          <p>
            You can keep doing what you've been doing. You can keep trying the same approaches, hoping for different results. Or you can try something different. Something based on science, not just optimism. Something proven, not just promised.
          </p>
          
          <p>
            The choice is yours. But if you're ready—if you're ready to understand yourself in a way you never have before, to access capabilities you didn't know you had, to create the kind of transformation that actually lasts—then the next step is clear.
          </p>
        </div>

        <div className="text-center space-y-6">
          <button
            onClick={onSignUpClick}
            className="px-12 py-6 bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-500 hover:to-primary-600 text-white font-bold text-2xl rounded-xl shadow-2xl shadow-primary-500/50 transform hover:scale-105 transition-all duration-300"
          >
            Reserve Your Seat Now
          </button>
          <p className="text-gray-400 text-lg">
            Limited availability • Don't wait until you're ready to be ready
          </p>
        </div>
      </div>
    </section>
  )
}


