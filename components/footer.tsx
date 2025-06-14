import Link from 'next/link';
import { Linkedin, Github } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-indigo-950 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="mb-4 flex items-center space-x-2">
              <span className="text-xl font-bold">Stephen Gardner</span>
            </div>
            <p className="mb-6 max-w-md text-slate-300">
              Fractional CTO and engineering consultant helping companies scale
              their technology and build high-performing teams.
            </p>
            <div className="flex space-x-4">
              <Link
                className="text-slate-400 transition-colors hover:text-white"
                href="https://linkedin.com/in/gardnersj"
                target="_blank"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link
                className="text-slate-400 transition-colors hover:text-white"
                href="https://github.com/stevelikesmusic"
                target="_blank"
              >
                <Github className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  className="text-slate-300 transition-colors hover:text-white"
                  href="/about"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  className="text-slate-300 transition-colors hover:text-white"
                  href="/blog"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  className="text-slate-300 transition-colors hover:text-white"
                  href="/contact"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between border-t border-slate-600 pt-8 md:flex-row">
          <p className="text-sm text-slate-400">
            ©{new Date().getFullYear()} Stephen Gardner. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
