export default function Header() {
  return (
    <header className="w-full py-6 px-8 bg-white">
      <div className="max-w-[1400px] mx-auto flex justify-between items-center">
        <div className="flex items-center gap-3">
          {/* SVG Logo */}
          <div className="w-12 h-12 relative">
            <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-lg">
              {/* Background */}
              <circle cx="50" cy="50" r="45" fill="#FFB5E8" />

              {/* Birthday Cake Base */}
              <path
                d="M25,65 L75,65 C75,65 77,55 75,55 L25,55 C23,55 25,65 25,65 Z"
                fill="#E7C6FF"
                stroke="#FFE3B8"
                strokeWidth="2"
              />

              {/* Cake Top */}
              <path
                d="M30,55 L70,55 C70,55 72,45 70,45 L30,45 C28,45 30,55 30,55 Z"
                fill="#B8E1FF"
                stroke="#FFE3B8"
                strokeWidth="2"
              />

              {/* Story Book Pages */}
              <path
                d="M35,45 C35,45 50,40 65,45"
                fill="none"
                stroke="#FFFFFF"
                strokeWidth="4"
                strokeLinecap="round"
              />
              <path
                d="M35,42 C35,42 50,37 65,42"
                fill="none"
                stroke="#FFFFFF"
                strokeWidth="4"
                strokeLinecap="round"
              />

              {/* Candles */}
              <rect x="40" y="35" width="4" height="10" fill="#FFE3B8" />
              <rect x="48" y="32" width="4" height="13" fill="#FFE3B8" />
              <rect x="56" y="35" width="4" height="10" fill="#FFE3B8" />

              {/* Flames */}
              <circle cx="42" cy="33" r="2" fill="#FFFFD1" />
              <circle cx="50" cy="30" r="2" fill="#FFFFD1" />
              <circle cx="58" cy="33" r="2" fill="#FFFFD1" />

              {/* Stars */}
              <path d="M25,25 L28,28 L25,31 L22,28 Z" fill="#FFFFD1" />
              <path d="M70,20 L73,23 L70,26 L67,23 Z" fill="#FFFFD1" />
              <path d="M75,70 L78,73 L75,76 L72,73 Z" fill="#FFFFD1" />
            </svg>
          </div>

          {/* Logo Text */}
          <h1 className="whimsical-title text-2xl font-bold flex items-center gap-1">
            <span className="bg-gradient-to-r from-pastel-pink via-pastel-lavender to-pastel-blue bg-clip-text text-transparent">
              Party
            </span>
            <span className="text-gray-800">Tales</span>
          </h1>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <a
            href="#"
            className="text-gray-600 hover:text-pastel-pink transition-colors"
          >
            Graduations
          </a>
          <a
            href="#"
            className="text-gray-600 hover:text-pastel-pink transition-colors"
          >
            Birthdays
          </a>
          <a
            href="#"
            className="text-gray-600 hover:text-pastel-pink transition-colors"
          >
            Playdates
          </a>
          <a
            href="#"
            className="text-gray-600 hover:text-pastel-pink transition-colors"
          >
            Parties
          </a>
          <a
            href="#"
            className="text-gray-600 hover:text-pastel-pink transition-colors"
          >
            Blog
          </a>
          <button className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-md transition-colors">
            Login
          </button>
          <button className="px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition-colors">
            Create
          </button>
        </nav>

        <button className="md:hidden text-gray-800">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </header>
  );
}
