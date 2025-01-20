export default function About() {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-50 to-purple-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-center text-gray-800">
          About Gala
        </h2>
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-gray-600 mb-6 text-lg leading-relaxed">
            Gala is your ultimate companion for discovering the perfect stay in the Philippines. We curate a wide selection
            of hotels and resorts across the stunning islands of the country, ensuring every traveler finds their ideal getaway.
          </p>
          <p className="text-gray-600 mb-6 text-lg leading-relaxed">
            Whether you're dreaming of a luxurious beachfront resort in Boracay, a cozy boutique hotel in the heart of Manila,
            or a serene eco-retreat nestled in the pristine landscapes of Palawan, Gala is here to make your travel dreams a reality.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed">
            Start your Philippine adventure with us today and experience the beauty, warmth, and hospitality of the islands like never before!
          </p>
        </div>

        {/* Image Gallery */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <img
              src="https://preview.eagle-themes.com/html/zante/images/swimming.jpg"
              alt="Swimming Pool"
              className="w-full h-48 object-cover"
            />
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <img
              src="https://preview.eagle-themes.com/html/zante/images/conference.jpg"
              alt="Conference Room"
              className="w-full h-48 object-cover"
            />
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <img
              src="https://preview.eagle-themes.com/html/zante/images/rooms/deluxe-room.jpg"
              alt="Deluxe Room"
              className="w-full h-48 object-cover"
            />
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <img
              src="https://preview.eagle-themes.com/html/zante/images/rooms/double-room.jpg"
              alt="Double Room"
              className="w-full h-48 object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

