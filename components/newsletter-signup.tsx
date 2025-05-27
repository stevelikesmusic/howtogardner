'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { CheckCircle } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { useState } from 'react';

export function NewsletterSignup() {
  const [apiError, setApiError] = useState<string>();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    reset,
    setError,
  } = useForm<{ email: string }>({});

  const onSubmit = async (data: { email: string }) => {
    setApiError(undefined); // Reset any previous error
    try {
      const res = await fetch('https://connect.mailerlite.com/api/subscribers', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_MAILER_LITE_API_KEY || ''}`,
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
    } catch (err) {
      if (err instanceof Error) {
        setError('email', {
          type: '500',
          message: 'Couldn’t subscribe. Try again.',
        });
      } else {
        setApiError('An error occurred');
      }
      return false; // Prevent success UI
    }
    return true;
  };

  const wrappedSubmit = handleSubmit(async (data) => {
    const ok = await onSubmit(data);
    // Only reset form state if successful
    if (!ok) return;
  });

  const errorMessage = errors.email?.message || apiError;

  if (isSubmitSuccessful && !errorMessage) {
    return (
      <div className="flex items-center justify-center space-x-2 text-green-600">
        <CheckCircle className="h-5 w-5" />
        <span className="font-medium">Thanks for subscribing!</span>
      </div>
    );
  }

  return (
    <form
      onSubmit={wrappedSubmit}
      className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto"
    >
      <div className="flex-1 flex items-start flex-col gap-1">
        <Input
          type="email"
          placeholder="Enter your email"
          {...register('email', { required: 'Email is required' })}
          required
          className="flex-1"
          disabled={isSubmitting}
        />
        {errorMessage && <span className="text-red-500 text-sm">{errorMessage}</span>}
      </div>
      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Subscribing...' : 'Subscribe'}
      </Button>
    </form>
  );
}
