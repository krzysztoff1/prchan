import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Destinations - Prchan Tourism",
  description: "Traveling to Poland and Europe is a great opportunity to explore new places, enjoy spectacular views and immerse yourself in the unique atmosphere of a foreign culture.",
};

const destinations = [
  {
    name: "Poland",
    description: "If you wish to explore the historical and cultural heritage of Poland, Prchan Tourism is the right choice for your family trip or romantic holiday.",
    image: "/images/poland.jpg",
    isTopDestination: true,
  },
  {
    name: "Czech Republic",
    description: "With a historical past dating back over 500 years, Czech Republic is a vibrant destination on every traveller's list. Explore Prague's medieval splendours or a region's natural beauty with Prchan Tourism.",
    image: "/images/czech-republic.jpg",
    isTopDestination: true,
  },
  {
    name: "Switzerland",
    description: "Come explore Switzerland on a customized tour. Prchan Tourism offers high quality excursions designed just for you. Choose from a range of locations such as Zermatt or Montreux or plan your tour on our platform.",
    image: "/images/switzerland.jpg",
    isTopDestination: true,
  },
  {
    name: "Austria",
    description: "Experience a journey through Austria like never before. Use Prchan Tourism to plan a comprehensive excursion for your travels that includes countless world-famous locations, incredible beauty, and an unmatched experience.",
    image: "/images/austria.jpg",
    isTopDestination: true,
  },
  {
    name: "Germany",
    description: "Discover Germany on a German tour with Prchan Tourism.",
    image: "/images/germany.jpg",
    isTopDestination: false,
  },
  {
    name: "Netherlands",
    description: "If you're looking for a pure holiday, go to Netherlands. It's a small country with many great cities and castles. If you like to be on the sea, there are plenty of nice coastal towns as well.",
    image: "/images/netherlands.jpg",
    isTopDestination: true,
  },
  {
    name: "France",
    description: "Visit France and its vibrant cities, including Paris and Nice. See Disneyland, Eiffel Tower, Notre Dame Cathedral and Louvre Museum",
    image: "/images/france.jpg",
    isTopDestination: false,
  },
  {
    name: "Hungary",
    description: "Explore the ancient streets and stunning architecture of Budapest on a fully-guided, multi-day trip. We'll pick you up from the airport, take you around town by van or boat, see some of Hungary's best museums, eat at local restaurants, and even stay in an old historic house for two nights!",
    image: "/images/hungary.jpg",
    isTopDestination: true,
  },
  {
    name: "Slovakia",
    description: "Take a trip to Slovakia, the country of mountains, castles and beer! You'll visit Poprad and its beautiful Tatra mountains. You will also see a museum with the famous Golden Hat, the Slovakian parliament house and the mountain range Dôbrava.",
    image: "/images/slovakia.jpg",
    isTopDestination: true,
  },
  {
    name: "Spain",
    description: "If you're looking for an unforgettable trip to Madrid, Prchan can help. Our experienced, native staff understands local culture and history — from the best places to eat to the newest galleries and museums. They know how to make your trip worry-free and hassle-free so you can relax, enjoy yourself and go home with memories for a lifetime.",
    image: "/images/spain.jpg",
    isTopDestination: true,
  },
];

export default function DestinationsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/destinations-hero.jpg"
            alt="Destination crowd scene"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>
        <div className="relative z-10 px-4 max-w-7xl mx-auto">
          <div className="border-l-4 border-primary pl-6">
            <h1 className="text-5xl md:text-6xl font-bold text-white">Our Destinations</h1>
          </div>
          <p className="text-white text-lg mt-6 max-w-4xl leading-relaxed opacity-90">
            Traveling to Poland and Europe is a great opportunity to explore new places, enjoy spectacular views and immerse yourself in the unique
            atmosphere of a foreign culture. We organize trips in Poland and Europe, let us make your vacation unforgettable!
          </p>
        </div>
      </section>

      {/* Destinations List */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          {destinations.map((destination, index) => (
            <div
              key={destination.name}
              className={`flex flex-col md:flex-row items-center gap-8 md:gap-16 py-16 ${
                index !== destinations.length - 1 ? "border-b border-gray-100" : ""
              }`}
            >
              {/* Text Content */}
              <div className="flex-1 order-2 md:order-1">
                {destination.isTopDestination && (
                  <p className="text-sm text-gray-500 uppercase tracking-wider mb-2">
                    TOP DESTINATION
                  </p>
                )}
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                  {destination.name}
                </h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {destination.description}
                </p>
                <Link
                  href={`/destinations/${destination.name.toLowerCase().replace(/\s+/g, "-")}`}
                  className="inline-block bg-primary text-white px-8 py-3 rounded-md font-semibold hover:bg-primary-dark transition-colors uppercase tracking-wide"
                >
                  Explore
                </Link>
              </div>

              {/* Image */}
              <div className="flex-1 order-1 md:order-2 w-full">
                <div className="relative aspect-[4/3] w-full rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src={destination.image}
                    alt={destination.name}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Us CTA Section */}
      <section className="bg-primary py-20 px-4">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h2>
          <p className="text-lg mb-8 opacity-90">Contact us to create your personalized trip</p>
          <Link
            href="/contact"
            className="inline-block bg-white text-primary px-10 py-4 rounded-md font-semibold hover:bg-gray-100 transition-colors uppercase tracking-wide"
          >
            Send Us A Message
          </Link>
        </div>
      </section>
    </>
  );
}
