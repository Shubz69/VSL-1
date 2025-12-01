'use client'

export default function InfoSection() {
  const benefits = [
    {
      icon: '🧠',
      title: 'Expert-Led Courses',
      description: 'Learn from experienced psychologists who have transformed thousands of lives through proven methodologies.',
    },
    {
      icon: '👥',
      title: 'Personalized 1-to-1 Sessions',
      description: 'Get individualized attention and customized strategies tailored specifically to your unique needs and goals.',
    },
    {
      icon: '🎯',
      title: 'Science-Backed Methods',
      description: 'All our programs are based on the latest research in psychology, neuroscience, and behavioral science.',
    },
    {
      icon: '🚀',
      title: 'Transform Your Life',
      description: 'Experience real, lasting change as you develop new patterns of thinking and behavior that serve you.',
    },
    {
      icon: '💡',
      title: 'Practical Tools',
      description: 'Receive actionable techniques and strategies you can implement immediately to improve your daily life.',
    },
    {
      icon: '🌟',
      title: 'Supportive Community',
      description: 'Join a community of like-minded individuals on their journey of personal growth and transformation.',
    },
  ]

  const psychologyInfo = [
    {
      title: 'Understanding the Mind',
      content: 'Psychology is the scientific study of the human mind and behavior. It helps us understand why we think, feel, and act the way we do, providing powerful insights that can transform our lives.',
    },
    {
      title: 'Cognitive Behavioral Techniques',
      content: 'Learn evidence-based techniques that help you identify and change negative thought patterns, leading to improved emotional well-being and better life outcomes.',
    },
    {
      title: 'Personal Development',
      content: 'Unlock your potential by understanding your unique psychological makeup. Develop greater self-awareness, emotional intelligence, and resilience.',
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-dark-800 to-dark-900">
      <div className="max-w-7xl mx-auto">
        {/* Psychology Information */}
        <div className="mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            Why <span className="text-primary-400">Psychology</span> Matters
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {psychologyInfo.map((info, index) => (
              <div
                key={index}
                className="bg-dark-700/50 backdrop-blur-sm p-8 rounded-2xl border border-primary-500/20 hover:border-primary-500/40 transition-all duration-300"
              >
                <h3 className="text-2xl font-bold text-primary-400 mb-4">
                  {info.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {info.content}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits Grid */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            What You'll <span className="text-primary-400">Gain</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-dark-700/50 to-dark-800/50 backdrop-blur-sm p-8 rounded-xl border border-primary-500/10 hover:border-primary-500/30 hover:shadow-lg hover:shadow-primary-500/10 transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="text-5xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center bg-gradient-to-r from-primary-900/30 to-primary-800/30 p-12 rounded-2xl border border-primary-500/30">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Begin Your Transformation?
          </h3>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join hundreds of others who have already started their journey toward a better, more fulfilling life.
          </p>
        </div>
      </div>
    </section>
  )
}

