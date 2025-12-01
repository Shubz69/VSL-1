'use client'

interface SolutionSectionProps {
  onSignUpClick: () => void
}

export default function SolutionSection({ onSignUpClick }: SolutionSectionProps) {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-dark-900">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
          The Psychology-Based Solution That Actually Works
        </h2>
        
        <div className="space-y-6 text-lg md:text-xl text-gray-300 leading-relaxed">
          <p>
            Imagine if you could peek behind the curtain of your own mind. What if you understood not just what you think, but why you think it? Not just how you feel, but what's driving those feelings? Not just what you do, but the unconscious patterns that determine your actions?
          </p>
          
          <p>
            That's exactly what happens when you learn psychology from someone who truly understands how to apply it. Suddenly, your entire life becomes clearer. The things that confused you start making sense. The behaviors that frustrated you become understandable. And most importantly, the changes you've been struggling to make become achievable.
          </p>
          
          <p>
            Our comprehensive psychology program isn't just about learning concepts. It's about transformation. We take the science of psychology—the real, evidence-based research from neuroscience, cognitive psychology, behavioral science, and clinical practice—and we make it practical, applicable, and immediately usable in your daily life.
          </p>
          
          <p>
            <span className="text-primary-400 font-semibold">This isn't theory. This is applied psychology.</span> Every technique, every strategy, every insight is grounded in scientific research and proven in real-world application. We don't teach you what we think might work. We teach you what psychology has proven actually works.
          </p>
          
          <p>
            Whether you choose our comprehensive courses that give you a deep understanding of psychological principles, or our personalized 1-to-1 sessions that apply these principles directly to your unique situation, you're getting access to knowledge that has taken years of study and practice to master.
          </p>
          
          <p>
            This is the difference between managing symptoms and creating transformation. Between temporary fixes and lasting change. Between hoping things will get better and knowing exactly how to make them better.
          </p>
        </div>

        <div className="mt-12 text-center">
          <button
            onClick={onSignUpClick}
            className="px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-500 hover:to-primary-600 text-white font-bold text-lg rounded-lg shadow-lg shadow-primary-500/50 transform hover:scale-105 transition-all duration-300"
          >
            Start Your Psychology Transformation Today
          </button>
        </div>
      </div>
    </section>
  )
}

