'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { CheckCircle } from 'lucide-react';
import { useForm } from 'react-hook-form';

export function NewsletterSignup() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    reset,
    setError,
  } = useForm<{ email: string }>({});

  const onSubmit = async (data: { email: string }) => {
    try {
      const res = await fetch('/api/newsletter-signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: data.email }),
      });
      if (!res.ok) {
        let errorMsg = 'Failed to subscribe';
        try {
          const errorData = await res.json();
          errorMsg = errorData.message || errorMsg;
        } catch {}
        throw new Error(errorMsg);
      }
      reset();
    } catch {
      setError('email', {
        type: '500',
        message: 'Couldn’t subscribe. Try again.',
      });
    }
  };

  if (isSubmitSuccessful) {
    return (
      <div className="flex flex-col items-center justify-center space-x-2 text-green-600">
        <p className="flex items-center space-x-2">
          <CheckCircle className="h-5 w-5" />
          <span className="font-medium">Thanks for subscribing!</span>
        </p>
        <p className="text-green-600">
          Please confirm in the email you just received.
        </p>
      </div>
    );
  }

  return (
    <form
      className="mx-auto flex max-w-md flex-col gap-2 sm:flex-row"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex flex-1 flex-col items-start gap-1">
        <Input
          placeholder="Enter your email"
          type="email"
          {...register('email', { required: 'Email is required' })}
          required
          className="flex-1"
          disabled={isSubmitting}
        />
        {errors.email && (
          <span className="text-sm text-red-500">{errors.email?.message}</span>
        )}
      </div>
      <Button disabled={isSubmitting} type="submit">
        {isSubmitting ? 'Subscribing...' : 'Subscribe'}
      </Button>
    </form>
  );
}
