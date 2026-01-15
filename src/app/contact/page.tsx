import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact - Prchan Tourism",
  description: "Get in touch with Prchan Tourism. Contact us to create your personalized trip to Poland and Europe.",
};

export default function ContactPage() {
  return (
    <section className="py-20 px-4 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <ContactForm />
      </div>
    </section>
  );
}
