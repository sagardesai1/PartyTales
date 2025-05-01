export default function Features() {
  return (
    <div className="mt-32 max-w-[1400px] mx-auto">
      <h2 className="text-center font-display text-4xl md:text-5xl font-bold text-gray-800 mb-16">
        Make their special day truly magical
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Feature 1 */}
        <div className="relative group">
          <div className="aspect-square bg-gradient-to-br from-pastel-pink to-pastel-lavender rounded-3xl p-6">
            <div className="bg-white/10 rounded-2xl h-96 mb-6 overflow-hidden">
              <img
                src="/Casey.png"
                alt="Personalized 3D Character"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="h-16 w-16 bg-white/30 rounded-2xl mb-6 flex items-center justify-center">
              <span className="text-4xl">✨</span>
            </div>
            <h3 className="font-display text-2xl font-bold text-gray-800 mb-4">
              Personalized 3D Character
            </h3>
            <p className="text-gray-700">
              Delight your child with an invite that looks just like them — a
              keepsake they'll treasure
            </p>
          </div>
        </div>

        {/* Feature 2 */}
        <div className="relative group">
          <div className="aspect-square bg-gradient-to-br from-pastel-blue to-pastel-mint rounded-3xl p-6">
            <div className="bg-white/10 rounded-2xl h-96 mb-6 overflow-hidden">
              <img
                src="/Kofi.jpg"
                alt="Magical Themes"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="h-16 w-16 bg-white/30 rounded-2xl mb-6 flex items-center justify-center">
              <span className="text-4xl">🎨</span>
            </div>
            <h3 className="font-display text-2xl font-bold text-gray-800 mb-4">
              Magical Customization
            </h3>
            <p className="text-gray-700">
              Easily create a magical, one-of-a-kind invitation in minutes — no
              design skills needed
            </p>
          </div>
        </div>

        {/* Feature 3 */}
        <div className="relative group">
          <div className="aspect-square bg-gradient-to-br from-pastel-yellow to-pastel-orange rounded-3xl p-6">
            <div className="bg-white rounded-2xl h-96 mb-6 overflow-hidden p-4">
              <div className="bg-white/20 rounded-xl p-4 mb-3">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-800 font-medium">
                    Sophie & Family
                  </span>
                  <span className="bg-green-500/20 text-green-700 px-3 py-1 rounded-full text-sm">
                    Attending
                  </span>
                </div>
                <div className="text-sm text-gray-600">
                  4 guests • Dietary: None
                </div>
              </div>
              <div className="bg-white/20 rounded-xl p-4 mb-3">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-800 font-medium">
                    Lucas & Family
                  </span>
                  <span className="bg-yellow-500/20 text-yellow-700 px-3 py-1 rounded-full text-sm">
                    Pending
                  </span>
                </div>
                <div className="text-sm text-gray-600">3 guests</div>
              </div>
              <div className="bg-white/20 rounded-xl p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-800 font-medium">
                    Emma & Family
                  </span>
                  <span className="bg-green-500/20 text-green-700 px-3 py-1 rounded-full text-sm">
                    Attending
                  </span>
                </div>
                <div className="text-sm text-gray-600">
                  2 guests • Dietary: Nut-free
                </div>
              </div>
            </div>
            <div className="h-16 w-16 bg-white/30 rounded-2xl mb-6 flex items-center justify-center">
              <span className="text-4xl">🎉</span>
            </div>
            <h3 className="font-display text-2xl font-bold text-gray-800 mb-4">
              RSVP Management
            </h3>
            <p className="text-gray-700">
              Stay organized without the stress — track who's coming with a
              simple tap
            </p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center mt-16">
        <p className="text-gray-600 text-lg mb-8">
          Ready to create something special?
        </p>
        <button className="px-8 py-4 bg-black text-white rounded-xl text-lg font-medium transition-all hover:bg-gray-800">
          Start designing your child's perfect invitation today!
        </button>
      </div>
    </div>
  );
}
