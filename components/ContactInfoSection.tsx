interface ContactInfoSectionProps {
  className?: string;
}

export function ContactInfoSection({
  className = '',
}: ContactInfoSectionProps) {
  const steps = [
    'Free 1-week technical assessment',
    'Custom strategy recommendations',
    'Ongoing fractional CTO partnership',
  ];

  return (
    <div
      className={`bg-brand-gradient flex flex-col justify-center p-8 text-white md:p-12 ${className}`}
    >
      <h1 className="mb-4 text-3xl font-bold md:text-4xl">Ready to Start?</h1>
      <p className="mb-6 text-lg opacity-90 md:text-xl">
        Let&apos;s discuss your engineering challenges
      </p>
      <p className="mb-8 leading-relaxed opacity-80">
        Every successful engagement begins with understanding your specific
        situation. No generic solutions, no assumptions—just genuine curiosity
        about how I can help your team thrive.
      </p>

      <div className="space-y-4">
        {steps.map((step, index) => (
          <div key={index} className="flex items-center opacity-90">
            <div className="mr-4 flex h-8 w-8 items-center justify-center rounded-full bg-white/20 text-sm font-bold">
              {index + 1}
            </div>
            <span className="text-sm md:text-base">{step}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
