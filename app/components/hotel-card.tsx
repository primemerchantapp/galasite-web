"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { StarIcon, MapPinIcon } from "lucide-react"

interface HotelCardProps {
  name: string
  image: string
  location: string
  rating: number
  price: number
  description: string
}

export function HotelCard({ name, image, location, rating, price, description }: HotelCardProps) {
  return (
    <Card className="flex flex-col md:flex-row overflow-hidden border-0 shadow-lg mb-4">
      <div className="relative w-full md:w-1/3 h-[200px] md:h-auto">
        <Image src={image || "/placeholder.svg"} alt={name} fill className="object-cover" />
      </div>
      <div className="flex flex-col md:flex-row flex-1">
        <div className="p-4 flex-1">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-xl font-semibold mb-2">{name}</h3>
              <div className="flex items-center text-sm text-gray-600 mb-2">
                <MapPinIcon className="h-4 w-4 mr-1" />
                {location}
              </div>
            </div>
            <div className="flex items-center">
              {Array.from({ length: rating }).map((_, i) => (
                <StarIcon key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
          </div>
          <p className="text-gray-600 text-sm mb-4">{description}</p>
          <div className="flex items-center text-sm text-gray-600">
            <span className="bg-green-100 text-green-800 px-2 py-1 rounded">8.4 Excellent</span>
            <span className="ml-2">1,234 reviews</span>
          </div>
        </div>
        <div className="p-4 bg-gray-50 flex flex-col justify-between">
          <div>
            <div className="text-sm text-gray-600 mb-1">Agoda</div>
            <div className="text-2xl font-bold mb-1">₱{price.toLocaleString()}</div>
            <div className="text-sm text-gray-600">per night</div>
          </div>
          <Button className="mt-4">View Deal</Button>
        </div>
      </div>
    </Card>
  )
}

