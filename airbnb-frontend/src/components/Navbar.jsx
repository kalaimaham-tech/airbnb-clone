import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="border-b shadow-sm sticky top-0 bg-white z-50 pointer-events-auto">
      <div className="max-w-6xl mx-auto flex items-center justify-between p-4">

        {/* Left: Airbnb Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_Bélo.svg"
            className="h-8"
            alt="Airbnb Logo"
          />
          
        </Link>

        {/* Middle: Where · When · Who */}
        <div className="border rounded-full shadow-sm px-6 py-2 flex items-center gap-4 cursor-pointer hover:shadow-md transition">
          <span className="text-sm font-semibold">Anywhere</span>
          <span className="text-sm border-l pl-4">Any week</span>
          <span className="text-sm text-gray-500 border-l pl-4">Add guests</span>
        </div>

        {/* Right: Menu dropdown */}
        <div className="relative group">
          <button className="border rounded-full px-4 py-2 flex items-center gap-2 hover:shadow-md transition">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3917/3917033.png"
              className="w-6 h-6"
              alt="Menu"
            />
          </button>

          {/* Dropdown */}
          <div className="absolute hidden group-hover:block right-0 mt-2 bg-white shadow-lg rounded-xl w-48">

            <Link to="/" className="block px-4 py-2 hover:bg-gray-100">
              Home
            </Link>

            <a
              href="https://www.airbnb.co.in/help"
              target="_blank"
              rel="noopener noreferrer"
              className="block px-4 py-2 hover:bg-gray-100"
            >
              Help Center
            </a>

            <Link to="/host" className="block px-4 py-2 hover:bg-gray-100">
              Become a Host
            </Link>

            <hr />

            <Link to="/login" className="block px-4 py-2 hover:bg-gray-100">
              Login
            </Link>

            <Link to="/register" className="block px-4 py-2 hover:bg-gray-100">
              Register
            </Link>

            <Link to="/logout" className="block px-4 py-2 hover:bg-gray-100">
              Sign Out
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
