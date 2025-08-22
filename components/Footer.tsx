'use client';

import Link from 'next/link';
import { MapPin, Phone, Mail } from 'lucide-react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';



const quickLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/contact', label: 'Contact' },
  { href: '/Help', label: 'Help' },
];

export default function Footer() {
  const pathname = usePathname();

  const isHidden = pathname === '/admin';
  return (
    <footer className={"bg-[#0A1628] border-t border-gray-700/50 mt-auto" + (isHidden ? ' hidden' : '')}>
      <div className="container mx-auto px-4 md:px-8 lg:px-16 xl:px-24 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Image src='/DIPS.png' alt='' width={40} height={40} />
              <span className="text-xl font-bold text-[#4DD0E1]">DIPS</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed max-w-md">
              Digital Plan Solution - Your creative partner for innovative design solutions. 
              We transform visions into compelling digital experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-300 text-sm hover:text-[#4DD0E1] transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-[#4DD0E1] mt-1 flex-shrink-0" />
                <p className="text-gray-300 text-sm">
                  Jl. Danau Batur, Sawojajar, Kec. Kedungkandang,<br />
                  Kota Malang, Jawa Timur 65139
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-[#4DD0E1] flex-shrink-0" />
                <p className="text-gray-300 text-sm">+62 812 8546 1822</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-[#4DD0E1] flex-shrink-0" />
                <p className="text-gray-300 text-sm">Digitalplansolution@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700/50 mt-8 pt-6">
          <p className="text-center text-gray-400 text-sm">
            © 2025 DIPS - Digital Plan Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}