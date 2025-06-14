'use client';

import type React from 'react';
import { useForm, Controller } from 'react-hook-form';
import useWeb3Form from '@web3forms/react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

type ContactFormData = {
  name: string;
  email: string;
  company: string;
  projectType: string;
  timeline: string;
  message: string;
};

export default function ContactPage() {
  const { register, handleSubmit, control, reset, formState } =
    useForm<ContactFormData>({
      defaultValues: {
        name: '',
        email: '',
        company: '',
        projectType: '',
        timeline: '',
        message: '',
      },
    });
  const { submit } = useWeb3Form({
    access_key: 'cc0ae117-bbc5-4643-8111-0bea618bb9f3',
    settings: {
      from_name: 'howtogardner.com Contact Form',
      subject: 'New "Let’s Work" Form Submission',
    },
    onSuccess: () => {
      reset();
    },
    onError: () => {
      alert('Error submitting form. Please try again.');
    },
  });

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mx-auto max-w-6xl">
        {/* Hero Section */}
        <div className="mb-16 text-center">
          <h1 className="mb-6 text-4xl font-bold text-slate-900 lg:text-5xl">
            Let’s Work Together
          </h1>
          <p className="mx-auto max-w-2xl text-xl text-slate-600">
            Ready to scale your technology and build a high-performing
            engineering team? Looking for coaching to get that next job?
          </p>
          <br />
          <p className="mx-auto max-w-2xl text-xl text-slate-600">
            Let’s discuss how I can help accelerate your business growth or
            career.
          </p>
        </div>
        <div className="mb-12 flex justify-center">
          <div className="center">
            <Card className="border-slate-200">
              {formState.isSubmitSuccessful ? (
                <>
                  <CardHeader>
                    <h2 className="mb-4 text-2xl font-semibold text-green-700">
                      Thank you for reaching out!
                    </h2>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-2 text-lg text-slate-700">
                      Your message has been received. I look forward to
                      connecting with you soon.
                    </p>
                  </CardContent>
                </>
              ) : (
                <>
                  <CardHeader>
                    <CardTitle>Start a Conversation</CardTitle>
                    <CardDescription>
                      Tell me about your project and I’ll get back to you within
                      24 hours.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form className="space-y-6" onSubmit={handleSubmit(submit)}>
                      <div className="grid gap-4 md:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="name">Full Name *</Label>
                          <Input
                            id="name"
                            {...register('name', { required: true })}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email Address *</Label>
                          <Input
                            id="email"
                            type="email"
                            {...register('email', { required: true })}
                            required
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="company">Company Name</Label>
                        <Input id="company" {...register('company')} />
                      </div>

                      <div className="grid gap-4 md:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="projectType">Project Type</Label>
                          <Controller
                            control={control}
                            name="projectType"
                            render={({ field }) => (
                              <Select
                                value={field.value}
                                onValueChange={field.onChange}
                              >
                                <SelectTrigger>
                                  <SelectValue placeholder="Select project type" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="fractional-cto">
                                    Fractional CTO Services
                                  </SelectItem>
                                  <SelectItem value="architecture-review">
                                    Architecture Review
                                  </SelectItem>
                                  <SelectItem value="team-building">
                                    Team Building & Hiring
                                  </SelectItem>
                                  <SelectItem value="technology-audit">
                                    Technology Audit
                                  </SelectItem>
                                  <SelectItem value="strategic-consulting">
                                    Strategic Consulting
                                  </SelectItem>
                                  <SelectItem value="other">Other</SelectItem>
                                </SelectContent>
                              </Select>
                            )}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="timeline">Project Timeline</Label>
                          <Controller
                            control={control}
                            name="timeline"
                            render={({ field }) => (
                              <Select
                                value={field.value}
                                onValueChange={field.onChange}
                              >
                                <SelectTrigger>
                                  <SelectValue placeholder="Select timeline" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="asap">ASAP</SelectItem>
                                  <SelectItem value="1-month">
                                    Within 1 month
                                  </SelectItem>
                                  <SelectItem value="3-months">
                                    Within 3 months
                                  </SelectItem>
                                  <SelectItem value="6-months">
                                    Within 6 months
                                  </SelectItem>
                                  <SelectItem value="flexible">
                                    Flexible
                                  </SelectItem>
                                </SelectContent>
                              </Select>
                            )}
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Details *</Label>
                        <Textarea
                          className="h-40"
                          id="message"
                          {...register('message', { required: true })}
                          required
                          placeholder="Tell me about your project, current challenges, and/or what you're looking to achieve..."
                          rows={6}
                        />
                      </div>

                      <Button
                        className="w-full cursor-pointer"
                        size="lg"
                        type="submit"
                      >
                        Send Message
                      </Button>
                    </form>
                  </CardContent>
                </>
              )}
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
