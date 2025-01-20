"use client"

import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

export function HotelFilters() {
  return (
    <div className="w-full md:w-64 bg-white p-4 rounded-lg shadow">
      <div className="mb-6">
        <h3 className="font-semibold mb-4">Price per night</h3>
        <Slider defaultValue={[0, 15000]} max={30000} step={1000} className="mb-2" />
        <div className="flex justify-between text-sm text-gray-600">
          <span>₱0</span>
          <span>₱30,000+</span>
        </div>
      </div>

      <div className="mb-6">
        <h3 className="font-semibold mb-4">Property Rating</h3>
        <div className="space-y-2">
          {[5, 4, 3, 2, 1].map((rating) => (
            <div key={rating} className="flex items-center">
              <Checkbox id={`rating-${rating}`} />
              <Label htmlFor={`rating-${rating}`} className="ml-2">
                {Array.from({ length: rating }).map((_, i) => (
                  <StarIcon key={i} className="inline h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </Label>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-6">
        <h3 className="font-semibold mb-4">Property Type</h3>
        <div className="space-y-2">
          {["Hotels", "Resorts", "Apartments", "Villas"].map((type) => (
            <div key={type} className="flex items-center">
              <Checkbox id={type.toLowerCase()} />
              <Label htmlFor={type.toLowerCase()} className="ml-2">
                {type}
              </Label>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="font-semibold mb-4">Amenities</h3>
        <div className="space-y-2">
          {[
            "Free WiFi",
            "Pool",
            "Spa",
            "Restaurant",
            "Fitness Center",
            "Room Service",
            "Airport Transfer",
            "Free Parking",
          ].map((amenity) => (
            <div key={amenity} className="flex items-center">
              <Checkbox id={amenity.toLowerCase().replace(" ", "-")} />
              <Label htmlFor={amenity.toLowerCase().replace(" ", "-")} className="ml-2">
                {amenity}
              </Label>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function StarIcon(props: React.ComponentProps<"svg">) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  )
}

