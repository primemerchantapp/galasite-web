import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">About Gala</h1>

        {/* Section 1: Raison d'Être */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-semibold mb-4">Our Raison d'Être</h2>
            <p className="text-lg mb-6">
              Gala, derived from the Filipino word "galá" meaning "to go out and explore," is not merely a booking
              platform; it's a portal to the extraordinary. We curate a collection of the most sumptuous accommodations
              and resorts in the Philippine archipelago, offering discerning travelers a gateway to unparalleled luxury
              and adventure.
            </p>
            <p className="text-lg">
              Our mission is to elevate your sojourn, transforming mere trips into transcendent experiences that linger
              in your memory long after you've returned home.
            </p>
          </div>
          <div className="relative h-[400px]">
            <Image
              src="https://preview.eagle-themes.com/html/zante/images/swimming.jpg"
              alt="Luxury resort swimming pool"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>

        {/* Section 2: Modus Operandi */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative h-[400px] md:order-2">
            <Image
              src="https://preview.eagle-themes.com/html/zante/images/conference.jpg"
              alt="Conference room in a luxury resort"
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <div className="md:order-1">
            <h2 className="text-3xl font-semibold mb-4">Our Modus Operandi</h2>
            <p className="text-lg mb-6">
              At Gala, we eschew the mundane and celebrate the exceptional. Our team of seasoned connoisseurs scours the
              7,641 islands of the Philippines to unearth hidden gems and iconic establishments alike. We don't just
              list accommodations; we curate experiences.
            </p>
            <p className="text-lg">
              From the sun-kissed shores of Boracay to the verdant peaks of Banaue, from the historic walls of
              Intramuros to the crystal-clear waters of Palawan, Gala is your compass to the finest stays in the Pearl
              of the Orient Seas.
            </p>
          </div>
        </div>

        {/* Section 3: Rooms Showcase */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-semibold mb-4">Luxury Redefined</h2>
            <p className="text-lg mb-6">
              Experience the epitome of comfort and elegance with our handpicked selection of rooms. Whether it's a
              deluxe suite with panoramic views or a cozy double room for intimate stays, Gala ensures every detail
              is tailored to perfection.
            </p>
            <p className="text-lg">
              Our accommodations are designed to provide a sanctuary where luxury meets tranquility, allowing you to
              unwind and recharge in style.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="relative h-[200px]">
              <Image
                src="https://preview.eagle-themes.com/html/zante/images/rooms/deluxe-room.jpg"
                alt="Deluxe Room"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div className="relative h-[200px]">
              <Image
                src="https://preview.eagle-themes.com/html/zante/images/rooms/double-room.jpg"
                alt="Double Room"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>

        {/* Section 4: Join Our Network */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-16">
          <h2 className="text-3xl font-semibold mb-4">Join Our Constellation of Stars</h2>
          <p className="text-lg mb-6">
            Are you the custodian of a magnificent resort, a purveyor of unparalleled hospitality, or the steward of a
            hidden paradise? We extend an invitation to you to become part of our illustrious network. List your
            property with Gala and let the world discover the unique tapestry of experiences you offer.
          </p>
          <Button size="lg" className="mr-4">
            Become a Host
          </Button>
          <Button size="lg" variant="outline">
            Learn More
          </Button>
        </div>

        {/* Section 5: Call to Action */}
        <div className="text-center">
          <h2 className="text-3xl font-semibold mb-4">Embark on Your Next Adventure</h2>
          <p className="text-lg mb-6">
            Whether you're a globe-trotting sybarite in search of your next indulgence or a curious explorer seeking to
            unravel the mysteries of the Philippines, Gala is your key to unlocking extraordinary experiences. Join us
            in our quest to redefine luxury travel in the Pearl of the Orient.
          </p>
          <Button size="lg">Create Your Account</Button>
        </div>
      </div>
    </div>
  );
}

