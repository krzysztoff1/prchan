"use client";

import Image from "next/image";
import { FadeIn } from "@/components/ScrollAnimation";

export default function CertificatePage() {
  return (
    <section className="py-20 px-4 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <FadeIn className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            Certified Tour Operator
          </h1>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-8">
          <FadeIn direction="left">
            <div className="bg-white p-4 rounded-lg shadow-lg">
              <Image
                src="/images/certificate-1.png"
                alt="Tour Operator Certificate 1"
                width={600}
                height={800}
                className="w-full h-auto"
              />
            </div>
          </FadeIn>
          <FadeIn direction="right">
            <div className="bg-white p-4 rounded-lg shadow-lg">
              <Image
                src="/images/certificate-2.png"
                alt="Tour Operator Certificate 2"
                width={600}
                height={800}
                className="w-full h-auto"
              />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
