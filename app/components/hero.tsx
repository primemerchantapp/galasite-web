import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { CalendarIcon } from "lucide-react"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"

export default function Hero() {
  return (
    <div className="relative bg-blue-600 text-white py-20">
      <div className="absolute inset-0 z-0">
        <img
          src="https://designarc.biz/demos/lakecious/images/slider/11.jpg"
          alt="Hero background"
          className="w-full h-full object-cover opacity-50"
        />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <h1 className="text-4xl font-bold mb-6">Find your perfect stay in the Philippines (in PHP)</h1>
        <div className="bg-white rounded-lg p-6 shadow-lg">
          <form className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <Label htmlFor="destination" className="text-gray-700">
                Destination
              </Label>
              <Input type="text" id="destination" placeholder="Where are you going?" className="w-full" />
            </div>
            <div>
              <Label htmlFor="check-in" className="text-gray-700">
                Check-in
              </Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline" className="w-full justify-start text-left font-normal text-gray-700">
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    <span className="text-gray-700">Pick a date</span>
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar />
                </PopoverContent>
              </Popover>
            </div>
            <div>
              <Label htmlFor="check-out" className="text-gray-700">
                Check-out
              </Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline" className="w-full justify-start text-left font-normal text-gray-700">
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    <span className="text-gray-700">Pick a date</span>
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar />
                </PopoverContent>
              </Popover>
            </div>
            <div>
              <Label htmlFor="guests" className="text-gray-700">
                Guests
              </Label>
              <Input type="number" id="guests" placeholder="2 adults" className="w-full text-gray-900" />
            </div>
          </form>
          <Button className="w-full mt-4 bg-green-500 hover:bg-green-600 text-white">Search</Button>
        </div>
      </div>
    </div>
  )
}

