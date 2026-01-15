"use client";

import ContactForm from "@/components/ContactForm";
import { FadeIn } from "@/components/ScrollAnimation";

export default function ContactPage() {
  return (
    <section className="py-20 px-4 bg-gray-50 min-h-screen">
      <FadeIn className="max-w-7xl mx-auto">
        <ContactForm />
      </FadeIn>
    </section>
  );
}
