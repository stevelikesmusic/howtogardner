'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navigation = [
    { name: 'About', href: '/about' },
    { name: 'Articles', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (href: string) => {
    if (href === '/blog') {
      return pathname === '/blog' || pathname?.startsWith('/blog/');
    }
    return pathname === href;
  };

  return (
    <header className="fixed top-0 z-50 w-full bg-white shadow-lg">
      <div className="container mx-auto px-5">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link className="text-2xl font-bold text-slate-800" href="/">
            Steve Gardner
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center space-x-8 md:flex">
            {navigation.map((item) => (
              <Link
                key={item.name}
                className={`font-medium transition-colors ${
                  isActive(item.href)
                    ? 'text-brand-gradient'
                    : 'hover:text-brand-gradient text-slate-800'
                }`}
                href={item.href}
              >
                {item.name}
              </Link>
            ))}
          </nav>

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
                    className={`text-lg font-medium transition-colors ${
                      isActive(item.href)
                        ? 'text-brand-gradient'
                        : 'hover:text-brand-gradient text-slate-800'
                    }`}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
