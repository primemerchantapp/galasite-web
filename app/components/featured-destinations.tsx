import Image from "next/image"

const destinations = [
  {
    name: "Manila Grand Hotel",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/10001%20(33)-uHLIKPxtKTJE2TFWbdCDNkyBlgkhEy.jpeg",
    description: "Experience luxury in the heart of Manila",
  },
  {
    name: "Modern City Suite",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/10001%20(30)-1piPpUkiIuyXoOwx8fXZTqGiOfeq5L.jpeg",
    description: "Contemporary comfort with stunning city views",
  },
  {
    name: "Urban Resort",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/10001%20(34)-7gHbNeyLlhcIRVwQMz92TcOjiewuCH.jpeg",
    description: "Where luxury meets urban convenience",
  },
  {
    name: "Garden Plaza Hotel",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/10001%20(26)-ZUqyz7RcyyiXtYArhW82yK0u0pIc3A.jpeg",
    description: "Tropical paradise in the city",
  },
]

export default function FeaturedDestinations() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Featured Destinations</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {destinations.map((destination) => (
            <div
              key={destination.name}
              className="bg-white rounded-lg shadow-md overflow-hidden group hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-48">
                <Image
                  src={destination.image || "/placeholder.svg"}
                  alt={destination.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{destination.name}</h3>
                <p className="text-gray-600">{destination.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

