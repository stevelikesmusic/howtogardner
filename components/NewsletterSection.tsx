'use client';

import { NewsletterSignup } from './newsletter-signup';

interface NewsletterSectionProps {
  title: string;
  description: string;
  variant?: 'light' | 'medium';
  className?: string;
}

export function NewsletterSection({
  title,
  description,
  variant = 'light',
}: NewsletterSectionProps) {
  const backgroundClass =
    variant === 'light'
      ? 'bg-gradient-to-br from-slate-50 to-slate-100'
      : 'bg-gradient-to-br from-slate-200 to-slate-100';

  return (
    <div className={`rounded-lg p-8 text-center ${backgroundClass}`}>
      <h2 className="mb-4 text-2xl font-bold text-slate-900">{title}</h2>
      <p className="mx-auto mb-6 max-w-2xl text-slate-600">{description}</p>
      <NewsletterSignup />
    </div>
  );
}
