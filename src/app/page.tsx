"use client";

import Link from "next/link";
import Image from "next/image";
import { FadeIn, ScaleIn } from "@/components/ScrollAnimation";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-bg.jpeg"
            alt="Mountain train in Switzerland"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <FadeIn>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Prchan Tourism</h1>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-lg md:text-xl mb-8 leading-relaxed opacity-90">
              A Poland based DMC established by a seasoned professional with over 25 years of experience in
              successfully operating Leisure Groups, MICE and FIT business while living in different parts of
              Europe. Our aim is to provide seamless and quality services in budget friendly prices to give you a
              memorable and happy journey into Europe.
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <Link
              href="/contact"
              className="inline-block bg-primary text-white px-10 py-4 rounded-md font-semibold text-lg hover:bg-primary-dark transition-colors uppercase tracking-wide"
            >
              Contact Us
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* Certified Tour Operator Section */}
      <section className="py-20 px-4 bg-white">
        <FadeIn className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
            Certified Tour Operator
          </h2>
          <Link
            href="/certificate"
            className="inline-block bg-primary text-white px-10 py-4 rounded-md font-semibold hover:bg-primary-dark transition-colors uppercase tracking-wide"
          >
            View Certificate
          </Link>
        </FadeIn>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 px-4 bg-gray-50">
        <FadeIn className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
            Join Our Newsletter!
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
        </FadeIn>
      </section>

      {/* Let's Plan Your Excursion Section */}
      <section className="relative min-h-[500px] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/city-krakow.jpg"
            alt="Kraków cityscape"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative z-10 w-full flex justify-center md:justify-end px-4 py-20">
          <ScaleIn>
            <div className="bg-primary text-white p-10 md:p-16 max-w-lg md:mr-20">
              <h2 className="text-4xl md:text-5xl font-bold mb-8">
                Let&apos;s Plan Your Excursion
              </h2>
              <Link
                href="mailto:info@prchan-tourism.com"
                className="inline-block bg-white text-primary px-10 py-4 rounded-md font-semibold hover:bg-gray-100 transition-colors uppercase tracking-wide"
              >
                Sends Us An Email
              </Link>
            </div>
          </ScaleIn>
        </div>
      </section>
    </>
  );
}
