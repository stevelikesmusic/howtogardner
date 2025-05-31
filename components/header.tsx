'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import { COMMON_CTA } from '@/lib/constants';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link className="flex items-center space-x-2" href="/">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-green-600">
              <span className="text-sm font-bold text-white">SG</span>
            </div>
            <span className="text-xl font-bold text-slate-900">
              How to Gardner
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center space-x-8 md:flex">
            {navigation.map((item) => (
              <Link
                key={item.name}
                className="text-slate-600 transition-colors hover:text-slate-900"
                href={item.href}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex">
            <Button asChild>
              <Link href="/contact">{COMMON_CTA}</Link>
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button size="icon" variant="ghost">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent className="w-[300px] sm:w-[400px]" side="right">
              <div className="mt-8 flex flex-col space-y-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    className="text-lg text-slate-600 transition-colors hover:text-slate-900"
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="pt-4">
                  <Button asChild className="w-full">
                    <Link href="/contact" onClick={() => setIsOpen(false)}>
                      {COMMON_CTA}
                    </Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
