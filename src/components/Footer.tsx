import Link from "next/link";

const footerLinks = [
  { href: "/", label: "Home" },
  { href: "/trips", label: "Our itineraries" },
  { href: "/about-us", label: "About us" },
  { href: "/privacy-policy", label: "Privacy Policy" },
];

export default function Footer() {
  return (
    <footer className="bg-white py-12 px-4 border-t">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Prchan</h3>
            <div className="text-gray-600 space-y-1 text-sm">
              <p className="font-medium">Prchan Tourism sp. z o.o.</p>
              <p><span className="font-medium">Address:</span> Ul. Lipowa 3D, 30-702 Kraków, Poland</p>
              <p><span className="font-medium">NIP:</span> 6772474528, <span className="font-medium">KRS:</span> 0000953128, <span className="font-medium">Regon:</span> 521268601</p>
              <p><span className="font-medium">Email:</span> info@prchan-tourism.com</p>
              <p><span className="font-medium">Phone:</span> +48 732 563 927</p>
            </div>
            <p className="text-gray-400 text-sm mt-6">Copyright © 2020 Prchan</p>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-3">
            <nav className="flex flex-wrap justify-start lg:justify-end gap-8">
              {footerLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-gray-700 hover:text-primary transition-colors font-medium"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}
