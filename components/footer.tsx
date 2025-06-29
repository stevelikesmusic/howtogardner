'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function Footer() {
  const pathname = usePathname();
  return (
    <footer className="bg-slate-800 py-12 text-white" id="contact">
      <div className="container mx-auto px-5">
        <div className="text-center">
          {pathname !== '/contact' && (
            <div className="mb-8">
              <h3 className="mb-4 text-3xl font-bold">
                Ready to Strengthen Your Engineering Team?
              </h3>
              <p className="mb-8 text-lg opacity-80">
                Let&apos;s start with a conversation about your current
                challenges. No sales pitch—just genuine curiosity about how I
                can help.
              </p>
              <Link
                className="inline-block rounded-full bg-blue-600 px-8 py-4 font-semibold text-white transition-colors hover:bg-blue-700"
                href="/contact"
              >
                Schedule a Free Assessment
              </Link>
            </div>
          )}
          <p className="text-sm opacity-60">
            &copy; {new Date().getFullYear()} Steve Gardner | howtogardner.com.
            Building better teams through service-oriented leadership.
          </p>
        </div>
      </div>
    </footer>
  );
}
