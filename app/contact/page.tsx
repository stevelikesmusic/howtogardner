'use client';

import type React from 'react';
import { useForm, Controller } from 'react-hook-form';
import useWeb3Form from '@web3forms/react';
import { Button } from '@/components/ui/button';
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
import { Checkbox } from '@/components/ui/checkbox';
import { ContactInfoSection } from '@/components/ContactInfoSection';

type ContactFormData = {
  name: string;
  email: string;
  company: string;
  role: string;
  teamSize: string;
  timeline: string;
  challenges: string[];
  details: string;
  newsletter: boolean;
};

export default function ContactPage() {
  const { register, handleSubmit, control, reset, formState, watch, setValue } =
    useForm<ContactFormData>({
      defaultValues: {
        name: '',
        email: '',
        company: '',
        role: '',
        teamSize: '',
        timeline: '',
        challenges: [],
        details: '',
        newsletter: false,
      },
    });

  const watchedChallenges = watch('challenges');

  const { submit } = useWeb3Form({
    access_key: 'cc0ae117-bbc5-4643-8111-0bea618bb9f3',
    settings: {
      from_name: 'howtogardner.com Contact Form',
      subject: 'New Contact Form Submission',
    },
    onSuccess: () => {
      reset();
    },
    onError: () => {
      alert('Error submitting form. Please try again.');
    },
  });

  const handleChallengeChange = (challenge: string, checked: boolean) => {
    const currentChallenges = watchedChallenges || [];
    if (checked) {
      setValue('challenges', [...currentChallenges, challenge]);
    } else {
      setValue(
        'challenges',
        currentChallenges.filter((c) => c !== challenge),
      );
    }
  };

  const challengeOptions = [
    { value: 'scaling', label: 'Scaling engineering team' },
    { value: 'technical-debt', label: 'Technical debt management' },
    { value: 'deployment', label: 'Slow deployment cycles' },
    { value: 'culture', label: 'Engineering culture issues' },
    { value: 'hiring', label: 'Hiring & onboarding' },
    { value: 'remote', label: 'Remote team coordination' },
    { value: 'architecture', label: 'System architecture' },
    { value: 'leadership', label: 'Engineering leadership' },
  ];

  return (
    <section className="flex min-h-screen items-center justify-center bg-gray-50 p-4 md:p-16">
      <div className="w-full max-w-6xl overflow-hidden rounded-3xl bg-white shadow-2xl">
        <div className="grid min-h-[600px] md:grid-cols-2">
          {/* Contact Info Section */}
          <ContactInfoSection className="rounded-l-3xl" />

          {/* Contact Form Section */}
          <div className="flex flex-col justify-center p-8 md:p-12">
            {formState.isSubmitSuccessful ? (
              <div className="text-center">
                <h2 className="mb-4 text-3xl font-bold text-slate-800">
                  Thank you for reaching out!
                </h2>
                <p className="text-lg text-slate-600">
                  Your message has been received. I look forward to connecting
                  with you soon.
                </p>
              </div>
            ) : (
              <>
                <div className="mb-8">
                  <h2 className="mb-2 text-2xl font-bold text-slate-800">
                    Tell Me About Your Situation
                  </h2>
                  <p className="text-slate-600">
                    I&apos;ll get back to you with thoughtful questions, not a
                    sales pitch.
                  </p>
                </div>

                <form
                  className="space-y-6 pb-16"
                  onSubmit={handleSubmit(submit)}
                >
                  {/* Name and Email Row */}
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label
                        className="text-sm font-semibold text-slate-700"
                        htmlFor="name"
                      >
                        Your Name *
                      </Label>
                      <Input
                        id="name"
                        {...register('name', { required: true })}
                        required
                        className="rounded-xl border-2 border-slate-200 p-3 focus:border-blue-500 focus:ring-blue-500/10"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label
                        className="text-sm font-semibold text-slate-700"
                        htmlFor="email"
                      >
                        Email Address *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        {...register('email', { required: true })}
                        required
                        className="rounded-xl border-2 border-slate-200 p-3 focus:border-blue-500 focus:ring-blue-500/10"
                      />
                    </div>
                  </div>

                  {/* Company and Role Row */}
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label
                        className="text-sm font-semibold text-slate-700"
                        htmlFor="company"
                      >
                        Company Name
                      </Label>
                      <Input
                        id="company"
                        {...register('company')}
                        className="rounded-xl border-2 border-slate-200 p-3 focus:border-blue-500 focus:ring-blue-500/10"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label
                        className="text-sm font-semibold text-slate-700"
                        htmlFor="role"
                      >
                        Your Role
                      </Label>
                      <Controller
                        control={control}
                        name="role"
                        render={({ field }) => (
                          <Select
                            value={field.value}
                            onValueChange={field.onChange}
                          >
                            <SelectTrigger className="rounded-xl border-2 border-slate-200 p-3 focus:border-blue-500">
                              <SelectValue placeholder="Select your role" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="ceo">CEO/Founder</SelectItem>
                              <SelectItem value="cto">CTO</SelectItem>
                              <SelectItem value="vp-engineering">
                                VP Engineering
                              </SelectItem>
                              <SelectItem value="engineering-manager">
                                Engineering Manager
                              </SelectItem>
                              <SelectItem value="product-manager">
                                Product Manager
                              </SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                        )}
                      />
                    </div>
                  </div>

                  {/* Team Size and Timeline Row */}
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label
                        className="text-sm font-semibold text-slate-700"
                        htmlFor="teamSize"
                      >
                        Engineering Team Size
                      </Label>
                      <Controller
                        control={control}
                        name="teamSize"
                        render={({ field }) => (
                          <Select
                            value={field.value}
                            onValueChange={field.onChange}
                          >
                            <SelectTrigger className="rounded-xl border-2 border-slate-200 p-3 focus:border-blue-500">
                              <SelectValue placeholder="Select team size" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="1-5">1-5 engineers</SelectItem>
                              <SelectItem value="6-15">
                                6-15 engineers
                              </SelectItem>
                              <SelectItem value="16-30">
                                16-30 engineers
                              </SelectItem>
                              <SelectItem value="31-50">
                                31-50 engineers
                              </SelectItem>
                              <SelectItem value="50+">50+ engineers</SelectItem>
                            </SelectContent>
                          </Select>
                        )}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label
                        className="text-sm font-semibold text-slate-700"
                        htmlFor="timeline"
                      >
                        Preferred Timeline
                      </Label>
                      <Controller
                        control={control}
                        name="timeline"
                        render={({ field }) => (
                          <Select
                            value={field.value}
                            onValueChange={field.onChange}
                          >
                            <SelectTrigger className="rounded-xl border-2 border-slate-200 p-3 focus:border-blue-500">
                              <SelectValue placeholder="Select timeline" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="asap">
                                ASAP - Urgent need
                              </SelectItem>
                              <SelectItem value="2-4-weeks">
                                Next 2-4 weeks
                              </SelectItem>
                              <SelectItem value="1-2-months">
                                1-2 months
                              </SelectItem>
                              <SelectItem value="3-6-months">
                                3-6 months
                              </SelectItem>
                              <SelectItem value="exploring">
                                Just exploring
                              </SelectItem>
                            </SelectContent>
                          </Select>
                        )}
                      />
                    </div>
                  </div>

                  {/* Challenges Checkboxes */}
                  <div className="space-y-3">
                    <Label className="text-sm font-semibold text-slate-700">
                      What challenges are you facing? (Check all that apply)
                    </Label>
                    <div className="grid gap-2 md:grid-cols-2">
                      {challengeOptions.map((challenge) => (
                        <Checkbox
                          key={challenge.value}
                          checked={
                            watchedChallenges?.includes(challenge.value) ||
                            false
                          }
                          className="text-sm text-slate-600"
                          id={challenge.value}
                          onChange={(checked) =>
                            handleChallengeChange(challenge.value, checked)
                          }
                        >
                          {challenge.label}
                        </Checkbox>
                      ))}
                    </div>
                  </div>

                  {/* Details Textarea */}
                  <div className="space-y-2">
                    <Label
                      className="text-sm font-semibold text-slate-700"
                      htmlFor="details"
                    >
                      Tell me more about your situation *
                    </Label>
                    <Textarea
                      id="details"
                      {...register('details', { required: true })}
                      required
                      className="min-h-[120px] resize-y rounded-xl border-2 border-slate-200 p-3 focus:border-blue-500 focus:ring-blue-500/10"
                      placeholder="What's your biggest engineering challenge right now? What would success look like for you? Any specific context about your team, product, or business that would be helpful to know?"
                    />
                  </div>

                  {/* Newsletter Signup */}
                  <div className="border-t border-slate-200 pt-6">
                    <Controller
                      control={control}
                      name="newsletter"
                      render={({ field }) => (
                        <Checkbox
                          checked={field.value}
                          className="font-semibold text-slate-800"
                          id="newsletter"
                          onChange={field.onChange}
                        >
                          Yes, send me engineering leadership insights
                        </Checkbox>
                      )}
                    />
                    <p className="mt-1 ml-6 text-sm text-slate-500">
                      Get practical advice on building engineering teams, twice
                      monthly. Unsubscribe anytime.
                    </p>
                  </div>

                  <Button
                    className="bg-brand-gradient w-full rounded-full py-6 text-lg font-semibold text-white transition-all hover:-translate-y-1 hover:opacity-90 hover:shadow-lg disabled:transform-none disabled:cursor-not-allowed disabled:opacity-70"
                    disabled={formState.isSubmitting}
                    type="submit"
                  >
                    {formState.isSubmitting
                      ? 'Sending...'
                      : 'Start the Conversation'}
                  </Button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
