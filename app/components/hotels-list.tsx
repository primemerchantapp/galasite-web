import Image from "next/image"
import { Button } from "@/components/ui/button"

const hotels = [
  {
    name: "Okada Manila",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/10001%20(62)-bWIEAdqfHDQ9AYDtS6BUfzXfbKuEX8.jpeg",
    location: "Manila",
    price: 15500,
    rating: 4.9,
  },
  {
    name: "Hyatt Manila",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/10001%20(56)-a67TvjmcNBYhzdF94FK8WrQE3gRljf.jpeg",
    location: "Manila",
    price: 12900,
    rating: 4.8,
  },
  {
    name: "Manila Grand",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/10001%20(63)-r3ehTPGKhrRhTpAqVj4vZeucHCCB6s.jpeg",
    location: "Manila",
    price: 11500,
    rating: 4.7,
  },
  {
    name: "City View Hotel",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/10001%20(55)-5B61BHvxJ96uhrOpA7F4nzkukdn83f.jpeg",
    location: "Manila",
    price: 9900,
    rating: 4.6,
  },
]

export default function HotelsList() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Featured Hotels</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {hotels.map((hotel) => (
            <div key={hotel.name} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-48">
                <Image src={hotel.image || "/placeholder.svg"} alt={hotel.name} fill className="object-cover" />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{hotel.name}</h3>
                <p className="text-gray-600 mb-2">{hotel.location}</p>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold">₱{hotel.price.toLocaleString()}/night</span>
                  <span className="text-sm text-gray-500">Rating: {hotel.rating}/5</span>
                </div>
                <Button className="w-full mt-4">Book Now</Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

