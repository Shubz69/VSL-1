'use client'

interface VideoSectionProps {
  onSignUpClick: () => void
}

export default function VideoSection({ onSignUpClick }: VideoSectionProps) {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-dark-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Watch This Video to <span className="text-primary-400">Discover More</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Learn how our psychology programs can transform your life and unlock your true potential
          </p>
        </div>

        {/* Video Placeholder */}
        <div className="relative max-w-5xl mx-auto mb-12">
          <div className="aspect-video bg-gradient-to-br from-dark-800 to-dark-700 rounded-2xl shadow-2xl overflow-hidden border-2 border-primary-500/30">
            {/* Placeholder content */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="w-24 h-24 mx-auto mb-4 bg-primary-500/20 rounded-full flex items-center justify-center border-4 border-primary-500">
                  <svg
                    className="w-12 h-12 text-primary-400 ml-2"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <p className="text-gray-400 text-lg font-semibold">
                  Video Coming Soon
                </p>
                <p className="text-gray-500 text-sm mt-2">
                  Your video will be displayed here
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Sign Up Button */}
        <div className="text-center">
          <button
            onClick={onSignUpClick}
            className="px-10 py-5 bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-500 hover:to-primary-600 text-white font-bold text-xl rounded-xl shadow-2xl shadow-primary-500/50 transform hover:scale-105 transition-all duration-300"
          >
            Reserve Your Seat Now
          </button>
          <p className="text-gray-400 mt-4 text-sm">
            Limited spots available • Don't miss out on this opportunity
          </p>
        </div>
      </div>
    </section>
  )
}


