import { HotelCard } from "../components/hotel-card"
import { HotelFilters } from "../components/hotel-filters"
import Image from "next/image"

const hotels = [
  {
    name: "Hyatt Regency Manila",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/10001%20(56)-7ungLtqtDz0ouSACETqg11UKHheL75.jpeg",
    location: "Manila Bay Area",
    rating: 5,
    price: 12500,
    description: "Luxury hotel featuring modern amenities, stunning bay views, and world-class dining options.",
  },
  {
    name: "Seda BGC",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/10001%20(51)-QDMfBbAXHn7wf555uzXOFEfuNlhv9J.jpeg",
    location: "Bonifacio Global City",
    rating: 4,
    price: 8500,
    description: "Contemporary hotel in the heart of BGC with premium amenities and business facilities.",
  },
  {
    name: "The Modern Suite",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/10001%20(57)-eN8RxsuZAhOUMGshBPmgVhRkxgBTCv.jpeg",
    location: "Makati",
    rating: 4,
    price: 7200,
    description: "Sleek and modern accommodations perfect for both business and leisure travelers.",
  },
  {
    name: "City Garden Hotel",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/10001%20(52)-u2Qz1y9yBXiNZ0krciM8Ap8oXmRGUu.jpeg",
    location: "Makati CBD",
    rating: 4,
    price: 6800,
    description: "Comfortable rooms with city views and convenient access to business districts.",
  },
  {
    name: "Urban Boutique Hotel",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/10001%20(53)-0g75fgz0mfkzYNj6fvPIoeAVz5aS4H.jpeg",
    location: "Quezon City",
    rating: 3,
    price: 4500,
    description: "Cozy boutique hotel offering personalized service and unique room designs.",
  },
]

export default function HotelsPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <div className="relative h-[400px] mb-8">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hero.jpg-dPVrlP9nQFa6506AAdXwiYG770uzjp.jpeg"
            alt="Luxury hotel pool at night"
            fill
            className="object-cover brightness-50"
            priority
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white text-center px-4">
              Find Your Perfect Stay in Manila
            </h1>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-6">
          <aside className="md:sticky md:top-24 md:h-[calc(100vh-6rem)]">
            <HotelFilters />
          </aside>
          <main className="flex-1">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-2xl font-bold">Hotels in Manila (5)</h1>
              <select className="border rounded-md p-2">
                <option>Recommended</option>
                <option>Price (Low to High)</option>
                <option>Price (High to Low)</option>
                <option>Rating</option>
              </select>
            </div>
            <div className="space-y-4">
              {hotels.map((hotel) => (
                <HotelCard key={hotel.name} {...hotel} />
              ))}
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}

