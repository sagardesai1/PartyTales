import React from "react";
import Image from "next/image";

const GetStartedSteps = () => {
  return (
    <section className="py-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4 text-primary">
          Create Your Magic in 3 Fun Steps!
        </h2>
        <p className="text-gray-600 text-lg">
          Let's make your special day extra spectacular! ✨
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="text-center p-6">
          <div className="bg-primary/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 border-4 border-primary/30 shadow-lg">
            <span className="text-primary font-bold text-2xl">1</span>
          </div>
          <h3 className="font-bold text-2xl mb-3 text-primary">
            Upload Photos
          </h3>
          <p className="text-gray-600 text-lg mb-6">
            Share your favorite pictures to make your invite super special! 📸
          </p>
          <div className="relative w-full h-109 rounded-xl border-2 border-dashed border-primary/30 bg-primary/5 group">
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <svg
                className="w-16 h-16 text-primary/60 mb-4"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
                />
              </svg>
              <p className="text-primary/60 font-medium">
                Click to upload or drag and drop
              </p>
              <p className="text-primary/40 text-sm mt-1">
                PNG, JPG up to 10MB
              </p>
            </div>
          </div>
        </div>

        <div className="text-center p-6">
          <div className="bg-primary/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 border-4 border-primary/30 shadow-lg">
            <span className="text-primary font-bold text-2xl">2</span>
          </div>
          <h3 className="font-bold text-2xl mb-3 text-primary">
            Pick Your Theme
          </h3>
          <p className="text-gray-600 text-lg mb-6">
            Choose from awesome party themes for your celebration! 🎨
          </p>
          <div className="bg-white p-4 rounded-xl shadow-lg">
            <div className="relative">
              <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="bg-primary/10 p-3 rounded-lg cursor-pointer hover:bg-primary/20 transition-colors">
                  <div className="text-primary font-semibold mb-2">
                    Princess Party
                  </div>
                  <div className="bg-primary/5 h-12 rounded-md flex items-center justify-center">
                    <span className="text-2xl">👸</span>
                  </div>
                </div>
                <div className="bg-primary/10 p-3 rounded-lg cursor-pointer hover:bg-primary/20 transition-colors">
                  <div className="text-primary font-semibold mb-2">
                    Superhero
                  </div>
                  <div className="bg-primary/5 h-12 rounded-md flex items-center justify-center">
                    <span className="text-2xl">🦸‍♂️</span>
                  </div>
                </div>
              </div>
              <button className="absolute -right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-gray-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
            <div className="space-y-3">
              <div className="bg-gray-50 p-3 rounded-lg">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Color Scheme</span>
                  <div className="flex gap-2 items-center">
                    <div className="w-6 h-6 rounded-full bg-pink-400"></div>
                    <div className="w-6 h-6 rounded-full bg-purple-400"></div>
                    <div className="w-6 h-6 rounded-full bg-blue-400"></div>
                    <svg
                      className="w-4 h-4 text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 p-3 rounded-lg">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Decorations</span>
                  <div className="flex items-center gap-2">
                    <span className="text-xl">🎈 🎊 ⭐</span>
                    <svg
                      className="w-4 h-4 text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 p-3 rounded-lg">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Decorations</span>
                  <div className="flex items-center gap-2">
                    <span className="text-xl">🎈 🎊 ⭐</span>
                    <svg
                      className="w-4 h-4 text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 p-3 rounded-lg">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Decorations</span>
                  <div className="flex items-center gap-2">
                    <span className="text-xl">🎈 🎊 ⭐</span>
                    <svg
                      className="w-4 h-4 text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 p-3 rounded-lg">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Decorations</span>
                  <div className="flex items-center gap-2">
                    <span className="text-xl">🎈 🎊 ⭐</span>
                    <svg
                      className="w-4 h-4 text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center p-6">
          <div className="bg-primary/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 border-4 border-primary/30 shadow-lg">
            <span className="text-primary font-bold text-2xl">3</span>
          </div>
          <h3 className="font-bold text-2xl mb-3 text-primary">
            Share the Joy!
          </h3>
          <p className="text-gray-600 text-lg mb-6">
            Send your magical e-invite to all your friends and family! 🎉
          </p>
          <div className="relative w-full rounded-xl overflow-hidden bg-white shadow-xl">
            <div className="p-4">
              {/* Preview Card */}
              <div className="relative w-full h-45 rounded-lg overflow-hidden mb-4">
                <Image
                  src="/birthday-preview.jpg"
                  alt="Share invitation demonstration"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Share Text */}
              <div className="text-gray-700 mb-4 text-left">
                <h4 className="font-semibold">Birthday Invitation</h4>
                <p className="text-sm">
                  Share this invitation with friends and family!
                </p>
              </div>

              {/* Share Options */}
              <div className="space-y-3">
                <div className="text-sm text-gray-500 font-medium">
                  Share via:
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-gray-50 p-4 rounded-lg flex items-center justify-center gap-3">
                    <svg
                      className="w-5 h-5 text-blue-600"
                      viewBox="0 0 320 512"
                      fill="currentColor"
                    >
                      {/* Font Awesome Pro 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) */}
                      <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
                    </svg>
                    <span className="text-sm">Facebook</span>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg flex items-center justify-center gap-3">
                    <svg
                      className="w-6 h-6 text-pink-500"
                      viewBox="0 0 448 512"
                      fill="currentColor"
                    >
                      {/* Font Awesome Pro 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) */}
                      <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                    </svg>
                    <span className="text-sm">Instagram</span>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-gray-50 p-4 rounded-lg flex items-center justify-center gap-3">
                    <svg
                      className="w-5 h-5 text-green-500"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                    </svg>
                    <span className="text-sm">WhatsApp</span>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg flex items-center justify-center gap-3">
                    <svg
                      className="w-5 h-5 text-blue-500"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2.546 20.2A1 1 0 003.3 21.4l3.363-.933C8.257 21.447 10.072 22 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2z" />
                    </svg>
                    <span className="text-sm">Message</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Added CTA Button */}
      <div className="text-center mt-16">
        <button className="bg-black hover:bg-black/90 font-bold py-4 px-8 rounded-full text-lg transition-all transform hover:scale-105 shadow-lg text-white">
          Create Your Magical Invitation
        </button>
      </div>
    </section>
  );
};

export default GetStartedSteps;
