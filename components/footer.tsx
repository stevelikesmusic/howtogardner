import Link from 'next/link';
import { Linkedin, Github } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-indigo-950 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <span className="font-bold text-xl">Stephen Gardner</span>
            </div>
            <p className="text-slate-300 mb-6 max-w-md">
              Fractional CTO and engineering consultant helping growing companies scale
              their technology and build high-performing teams.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://linkedin.com/in/gardnersj"
                target="_blank"
                className="text-slate-400 hover:text-white transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link
                href="https://github.com/stevelikesmusic"
                target="_blank"
                className="text-slate-400 hover:text-white transition-colors"
              >
                <Github className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-600 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm">
            ©{new Date().getFullYear()} Stephen Gardner. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
