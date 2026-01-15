import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Itineraries - Prchan Tourism",
  description: "Explore our curated travel itineraries across Poland and Europe. From Kraków to Berlin, we have the perfect trip for you.",
};

const itineraries = [
  {
    title: "Kraków- Wieliczka-Zakopany",
    duration: "4 days, 3 nights",
    price: "on request",
    description: "This 3-night trip is the perfect way to see the natural and historic wonders of Poland. It includes a visit to Kraków, where you can walk around Wawel Hill and marvel at the city's medieval architecture; a tour of Wieliczka Salt Mine in order to learn about its unique history; and a day in Zakopane, where you can get into nature with a hike up Giewont Mountain.",
    image: "/images/zakopane.jpg",
  },
  {
    title: "Warszawa- Gdańsk-Sopot- Gdynia",
    duration: "4 days, 3 nights",
    price: "on request",
    description: "The best trip for those short of time, but want to see the most destinations. This itinerary will take you from Gdansk in the north to Sopot and Gdynia on the Baltic Sea to the south.",
    image: "/images/gdansk.jpg",
  },
  {
    title: "Warszawa- Poznań-Berlin",
    duration: "5 days, 4 nights",
    price: "on request",
    description: "",
    image: "/images/warsaw.jpg",
  },
  {
    title: "Kraków- Wrocław-Warszawa",
    duration: "5 days, 4 nights",
    price: "on request",
    description: "",
    image: "/images/wroclaw.jpg",
  },
  {
    title: "Warszawa- Gdańsk-Wrocław- Kraków",
    duration: "8 days, 7 nights",
    price: "on request",
    description: "",
    image: "/images/wroclaw-2.jpg",
  },
];

export default function TripsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/destinations-hero.jpg"
            alt="European city square"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>
        <div className="relative z-10 px-4 max-w-7xl mx-auto">
          <div className="border-l-4 border-primary pl-6">
            <h1 className="text-5xl md:text-6xl font-bold text-white">Our Itineraries</h1>
          </div>
        </div>
      </section>

      {/* Itineraries List */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          {itineraries.map((itinerary, index) => (
            <div
              key={itinerary.title}
              className={`flex flex-col md:flex-row items-center gap-8 md:gap-16 py-16 ${
                index !== itineraries.length - 1 ? "border-b border-gray-100" : ""
              }`}
            >
              {/* Text Content */}
              <div className="flex-1 order-2 md:order-1">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  {itinerary.title}
                </h2>
                <div className="text-gray-500 mb-4 space-y-1">
                  <p>duration: {itinerary.duration}</p>
                  <p>price: {itinerary.price}</p>
                </div>
                {itinerary.description && (
                  <p className="text-gray-600 leading-relaxed">
                    {itinerary.description}
                  </p>
                )}
              </div>

              {/* Image */}
              <div className="flex-1 order-1 md:order-2 w-full">
                <div className="relative aspect-[4/3] w-full rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src={itinerary.image}
                    alt={itinerary.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
            Join Our Newsletter
          </h2>
          <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto bg-white p-2 rounded-lg shadow-sm">
            <input
              type="email"
              placeholder="Your Email Address"
              className="flex-1 px-4 py-3 border-0 focus:outline-none focus:ring-0 text-gray-700"
              required
            />
            <button
              type="submit"
              className="bg-primary text-white px-8 py-3 rounded-md font-medium hover:bg-primary-dark transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
