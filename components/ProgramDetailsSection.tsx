'use client'

interface ProgramDetailsSectionProps {
  onSignUpClick: () => void
}

export default function ProgramDetailsSection({ onSignUpClick }: ProgramDetailsSectionProps) {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-dark-900">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
          Two Powerful Ways to Transform Your Life Through Psychology
        </h2>
        
        <div className="space-y-12 text-lg md:text-xl text-gray-300 leading-relaxed">
          <div>
            <h3 className="text-3xl md:text-4xl font-bold text-primary-400 mb-6">
              Comprehensive Psychology Courses
            </h3>
            <p>
              Our structured courses give you a complete education in applied psychology. You'll learn not just concepts, but how to apply them. Not just theories, but practical techniques. Not just information, but transformation.
            </p>
            <p className="mt-4">
              Each course is designed by experienced psychologists who have spent years both studying and applying these principles. You get access to the same knowledge that has transformed thousands of lives, presented in a way that's engaging, practical, and immediately applicable.
            </p>
            <p className="mt-4">
              You'll learn the psychology of motivation, the science of habit formation, the principles of emotional regulation, the mechanics of relationship dynamics, the foundations of self-awareness, and so much more. This is a complete psychological education, not just a collection of tips.
            </p>
            <p className="mt-4">
              The courses are structured so you can learn at your own pace, but with enough guidance to ensure you're not just consuming information, but actually integrating it. You'll have exercises, practical applications, and opportunities to reflect on how these principles apply specifically to your life.
            </p>
          </div>

          <div>
            <h3 className="text-3xl md:text-4xl font-bold text-primary-400 mb-6">
              Personalized 1-to-1 Sessions
            </h3>
            <p>
              Sometimes you need more than a course. Sometimes you need someone who can take these psychological principles and apply them directly to your unique situation, your specific challenges, your particular goals. That's what our 1-to-1 sessions provide.
            </p>
            <p className="mt-4">
              In these personalized sessions, you work directly with an experienced psychologist who understands not just the science, but how to tailor it to your needs. They'll help you identify the specific psychological patterns that are holding you back, develop customized strategies for your situation, and guide you through applying these strategies in real-time.
            </p>
            <p className="mt-4">
              This is psychology made personal. Your unique personality, your specific background, your particular challenges—all of this is taken into account. The principles are universal, but the application is entirely individualized. You get strategies that are designed specifically for you, not generic advice that might or might not work.
            </p>
            <p className="mt-4">
              Whether you're dealing with anxiety, relationship issues, career challenges, self-confidence problems, or just want to understand yourself better, these sessions give you the focused attention and customized approach that creates breakthrough moments.
            </p>
          </div>

          <p className="text-xl">
            Many people choose to combine both—taking the courses to build a solid foundation of understanding, and supplementing with 1-to-1 sessions to apply those principles to their specific situation. Others prefer to dive deep into one approach. Both paths lead to transformation. The choice depends on your learning style, your goals, and your preferences.
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


