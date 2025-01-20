import Image from "next/image";
import { Button } from "@/components/ui/button";
import { HotelCard } from "../components/hotel-card";
import { HotelFilters } from "../components/hotel-filters";

const resorts = [
  {
    name: "Amanpulo",
    image: "https://preview.eagle-themes.com/html/zante/images/slider/hero.jpg",
    location: "Pamalican Island, Palawan",
    rating: 5,
    price: 75000,
    description: "An exclusive paradise nestled on a private island, offering unparalleled luxury and serenity.",
    rooms: [
      "https://preview.eagle-themes.com/html/zante/images/rooms/double1.jpg",
      "https://preview.eagle-themes.com/html/zante/images/rooms/king.jpg",
    ],
  },
  {
    name: "El Nido Resorts Pangulasian Island",
    image: "https://preview.eagle-themes.com/html/zante/images/places/place7.jpg",
    location: "El Nido, Palawan",
    rating: 5,
    price: 45000,
    description: "A luxurious eco-sanctuary with breathtaking views of Bacuit Bay and the Palawan sunset.",
    rooms: [
      "https://preview.eagle-themes.com/html/zante/images/rooms/single-room.jpg",
      "https://preview.eagle-themes.com/html/zante/images/rooms/single.jpg",
    ],
  },
  {
    name: "Shangri-La's Boracay Resort & Spa",
    image: "https://preview.eagle-themes.com/html/zante/images/gallery/gallery11.jpg",
    location: "Boracay Island",
    rating: 5,
    price: 35000,
    description:
      "An opulent retreat offering a perfect blend of luxury and natural beauty on the pristine shores of Boracay.",
    rooms: [
      "https://preview.eagle-themes.com/html/zante/images/rooms/double-room.jpg",
      "https://preview.eagle-themes.com/html/zante/images/rooms/double1.jpg",
    ],
  },
  {
    name: "Eskaya Beach Resort & Spa",
    image: "https://preview.eagle-themes.com/html/zante/images/gallery/gallery2.jpg",
    location: "Panglao Island, Bohol",
    rating: 4,
    price: 28000,
    description: "A hidden gem offering luxurious villas, world-class amenities, and stunning ocean views.",
    rooms: [
      "https://preview.eagle-themes.com/html/zante/images/rooms/king.jpg",
      "https://preview.eagle-themes.com/html/zante/images/rooms/single-room.jpg",
    ],
  },
  {
    name: "Two Seasons Coron Island Resort & Spa",
    image: "https://preview.eagle-themes.com/html/zante/images/gallery/gallery5.jpg",
    location: "Coron, Palawan",
    rating: 4,
    price: 22000,
    description: "An eco-friendly sanctuary offering unique experiences amidst the stunning landscapes of Coron.",
    rooms: [
      "https://preview.eagle-themes.com/html/zante/images/rooms/single.jpg",
      "https://preview.eagle-themes.com/html/zante/images/rooms/double-room.jpg",
    ],
  },
];

export default function ResortsPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <div className="relative h-[400px] mb-8">
        <Image
          src="https://preview.eagle-themes.com/html/zante/images/slider/hero.jpg"
          alt="Luxurious beach resort"
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center px-4">
            Discover Paradise in the Philippines
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Filters Sidebar */}
          <aside className="md:sticky md:top-24 md:h-[calc(100vh-6rem)]">
            <HotelFilters />
          </aside>

          {/* Resort Listings */}
          <main className="flex-1">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Exquisite Resorts (5)</h2>
              <select className="border rounded-md p-2 bg-white shadow-sm">
                <option>Recommended</option>
                <option>Price (Low to High)</option>
                <option>Price (High to Low)</option>
                <option>Rating</option>
              </select>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6">
              {resorts.map((resort) => (
                <HotelCard
                  key={resort.name}
                  name={resort.name}
                  image={resort.image}
                  location={resort.location}
                  rating={resort.rating}
                  price={resort.price}
                  description={resort.description}
                  rooms={resort.rooms}
                />
              ))}
            </div>
          </main>
        </div>

        {/* Become a Host Section */}
        <div className="mt-12 bg-white rounded-lg shadow-md p-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Become a Host</h2>
              <p className="text-lg mb-6">
                Are you the proprietor of a magnificent resort or a charming boutique hotel? Showcase your property to
                the world and join our illustrious community of hoteliers and resort owners.
              </p>
              <Button size="lg">List Your Property</Button>
            </div>
            <div className="relative h-[300px]">
              <Image
                src="https://preview.eagle-themes.com/html/zante/images/slider/full-slider-1.jpg"
                alt="Host your property with Gala"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

