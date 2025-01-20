import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Gala</h3>
            <p className="text-sm text-gray-400">
              Your ultimate booking app for hotels and resorts in the Philippines.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm text-gray-400 hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/hotels" className="text-sm text-gray-400 hover:text-white">
                  Hotels
                </Link>
              </li>
              <li>
                <Link href="/resorts" className="text-sm text-gray-400 hover:text-white">
                  Resorts
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-gray-400 hover:text-white">
                  About Us
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Top Destinations</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/destination/boracay" className="text-sm text-gray-400 hover:text-white">
                  Boracay
                </Link>
              </li>
              <li>
                <Link href="/destination/palawan" className="text-sm text-gray-400 hover:text-white">
                  Palawan
                </Link>
              </li>
              <li>
                <Link href="/destination/cebu" className="text-sm text-gray-400 hover:text-white">
                  Cebu
                </Link>
              </li>
              <li>
                <Link href="/destination/bohol" className="text-sm text-gray-400 hover:text-white">
                  Bohol
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <p className="text-sm text-gray-400 mb-2">Email: info@galabooking.site</p>
            <p className="text-sm text-gray-400 mb-2">Phone: +63 2 8888 8888</p>
            <p className="text-sm text-gray-400">Address: Makati City, Philippines</p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p className="text-sm text-gray-400">&copy; 2025 Gala. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

