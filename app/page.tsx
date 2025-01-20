import Header from "./components/header"
import Hero from "./components/hero"
import FeaturedDestinations from "./components/featured-destinations"
import HotelsList from "./components/hotels-list"
import About from "./components/about"
import Footer from "./components/footer"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main>
        <Hero />
        <FeaturedDestinations />
        <HotelsList />
        <About />
      </main>
      <Footer />
    </div>
  )
}

