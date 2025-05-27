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
  const { register, handleSubmit, control, reset, formState } = useForm<ContactFormData>({
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
      from_name: 'HowToGardner Contact Form',
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
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Let’s Work Together
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Ready to scale your technology and build a high-performing engineering team?
            Let’s discuss how I can help accelerate your business growth.
          </p>
        </div>
        <div className="flex justify-center mb-12">
          <div className="center">
            <Card className="border-slate-200">
              {formState.isSubmitSuccessful ? (
                <>
                  <CardHeader>
                    <h2 className="text-2xl font-semibold mb-4 text-green-700">
                      Thank you for reaching out!
                    </h2>
                  </CardHeader>
                  <CardContent>
                    <p className="text-lg text-slate-700 mb-2">
                      Your message has been received. I look forward to connecting with
                      you soon.
                    </p>
                  </CardContent>
                </>
              ) : (
                <>
                  <CardHeader>
                    <CardTitle>Start a Conversation</CardTitle>
                    <CardDescription>
                      Tell me about your project and I’ll get back to you within 24 hours.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit(submit)} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
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

                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="projectType">Project Type</Label>
                          <Controller
                            name="projectType"
                            control={control}
                            render={({ field }) => (
                              <Select value={field.value} onValueChange={field.onChange}>
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
                            name="timeline"
                            control={control}
                            render={({ field }) => (
                              <Select value={field.value} onValueChange={field.onChange}>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select timeline" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="asap">ASAP</SelectItem>
                                  <SelectItem value="1-month">Within 1 month</SelectItem>
                                  <SelectItem value="3-months">
                                    Within 3 months
                                  </SelectItem>
                                  <SelectItem value="6-months">
                                    Within 6 months
                                  </SelectItem>
                                  <SelectItem value="flexible">Flexible</SelectItem>
                                </SelectContent>
                              </Select>
                            )}
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Details *</Label>
                        <Textarea
                          id="message"
                          className="h-40"
                          {...register('message', { required: true })}
                          placeholder="Tell me about your project, current challenges, and/or what you're looking to achieve..."
                          rows={6}
                          required
                        />
                      </div>

                      <Button type="submit" size="lg" className="w-full cursor-pointer">
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
