"use client";
export default function SuccessStoriesSection() {
  "use client";
  const successStories = [
    {
      id: 1,
      clientName: "Rajesh P.",
      country: "Canada",
      visaType: "Work Visa",
      description: "Successfully obtained work visa for software engineer position in Toronto",
      image: "/assets/placeholder-passport.jpg" // Placeholder until you provide actual stamps
    },
    {
      id: 2,
      clientName: "Priya S.",
      country: "Australia",
      visaType: "Permanent Residency",
      description: "Achieved PR status and settled in Melbourne with family",
      image: "/assets/placeholder-passport.jpg"
    },
    {
      id: 3,
      clientName: "Amit K.",
      country: "USA",
      visaType: "H1-B Visa",
      description: "Secured H1-B visa for tech company in Silicon Valley",
      image: "/assets/placeholder-passport.jpg"
    },
    {
      id: 4,
      clientName: "Sneha M.",
      country: "Germany",
      visaType: "Study Visa",
      description: "Pursuing Masters in Engineering at Technical University of Munich",
      image: "/assets/placeholder-passport.jpg"
    },
    {
      id: 5,
      clientName: "Karan T.",
      country: "UK",
      visaType: "Skilled Worker Visa",
      description: "Working as financial analyst in London",
      image: "/assets/placeholder-passport.jpg"
    },
    {
      id: 6,
      clientName: "Neha D.",
      country: "Singapore",
      visaType: "Employment Pass",
      description: "Leading marketing team at multinational company",
      image: "/assets/placeholder-passport.jpg"
    }
  ]

  return (
    <section className="relative py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-6">
            Success <span className="text-green-400">Stories</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-teal-500 mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Real stories from our clients who achieved their dreams of working and living abroad
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {successStories.map((story) => (
            <div
              key={story.id}
              className="bg-slate-800/30 backdrop-blur-sm rounded-lg border border-teal-800/30 p-6 hover:border-green-400/50 transition-all duration-300"
            >
              <div className="aspect-video bg-slate-700/50 rounded-lg mb-4 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-600/20 rounded-full flex items-center justify-center mx-auto mb-2">
                    <span className="text-2xl">📘</span>
                  </div>
                  <p className="text-sm text-gray-400">Passport Stamp</p>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-white">{story.clientName}</h3>
                  <span className="text-sm bg-green-600/20 text-green-400 px-2 py-1 rounded">
                    {story.country}
                  </span>
                </div>

                <p className="text-sm text-teal-400 font-medium">{story.visaType}</p>
                <p className="text-gray-300 text-sm">{story.description}</p>

                <div className="flex items-center gap-2 text-xs text-gray-400">
                  <span>✅ Visa Approved</span>
                  <span>•</span>
                  <span>🎉 Living Dream</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-300 mb-4">Ready to write your own success story?</p>
          <button
            onClick={() => window.open('https://wa.me/8160050554?text=Hi! I want to start my visa journey and create my own success story', '_blank')}
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-medium transition-colors"
          >
            Start Your Journey Today
          </button>
        </div>
      </div>
    </section>
  )
}
