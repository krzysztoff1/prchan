import Image from "next/image";
import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "About us - Prchan Tourism",
  description: "Prchan Tourism sp. z o.o. is a Poland based Destination Management Company operating from Krakow and specializing in incoming tours to Europe from all over the world.",
};

const services = [
  "Create customized travel itineraries and propose accommodations according to the customers requirement",
  "Reservation of various Excursions, Theme Parks and point of touristic interest",
  "Reservation of Hotels, Resorts and Holiday Apartments.",
  "Reservation on Train. Bus. Boat and also the Private Transport services.",
];

export default function AboutUsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/destinations-hero.jpg"
            alt="European city crowd"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>
        <div className="relative z-10 px-4 max-w-7xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-white">About Prchan Tourism</h1>
        </div>
      </section>

      {/* Company Description Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            {/* Image */}
            <div className="flex-1 w-full">
              <div className="relative aspect-[4/3] w-full rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/images/warsaw-square.jpg"
                  alt="Warsaw Old Town Square"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Content */}
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Poland Based Destination Management Company
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  We, &quot;Prchan Tourism sp. z o.o.&quot;, are a Poland based Destination Management Company
                  operating from Krakow and specializing in incoming tours to Europe from all over the world
                </p>
                <p>
                  We are passionate travellers and create memorable holidays. We provide our best client services, expertise in Europe
                  destinations and well-planned travel packages.
                </p>
                <p>
                  Prchan Tourism handles MICE & FIT Groups of any size & profile in Europe.
                </p>
                <p>
                  We are registered in the Central Registry of Tour Operators
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Our Services</h2>
          <ul className="space-y-4">
            {services.map((service, index) => (
              <li key={index} className="flex items-start gap-3">
                <svg className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
                </svg>
                <span className="text-gray-600">{service}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <ContactForm />
        </div>
      </section>
    </>
  );
}
