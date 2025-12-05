'use client'

interface IntroSectionProps {
  onSignUpClick: () => void
}

export default function IntroSection({ onSignUpClick }: IntroSectionProps) {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-dark-900">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
          Have You Ever Wondered Why Some People Seem to Have It All Figured Out?
        </h2>
        
        <div className="space-y-6 text-lg md:text-xl text-gray-300 leading-relaxed">
          <p>
            You know the type. They walk into a room with confidence. They handle stress with ease. Their relationships are fulfilling. Their careers are thriving. They seem to have this inner peace and clarity that you can't quite put your finger on.
          </p>
          
          <p>
            Meanwhile, you're here feeling stuck. Maybe you're dealing with anxiety that won't let up. Perhaps your relationships keep hitting the same walls. You might be struggling with self-doubt, imposter syndrome, or that nagging feeling that you're not living up to your potential.
          </p>
          
          <p>
            Here's what most people don't realize: <span className="text-primary-400 font-semibold">The difference between those who thrive and those who struggle isn't luck, talent, or circumstances. It's psychology.</span>
          </p>
          
          <p>
            The people who have their lives together understand something fundamental about how the human mind works. They've learned to work with their psychology, not against it. And the best part? This isn't something you're born with. It's something you can learn.
          </p>
        </div>

        <div className="mt-12 text-center">
          <button
            onClick={onSignUpClick}
            className="px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-500 hover:to-primary-600 text-white font-bold text-lg rounded-lg shadow-lg shadow-primary-500/50 transform hover:scale-105 transition-all duration-300"
          >
            Reserve Your Seat Now
          </button>
        </div>
      </div>
    </section>
  )
}


