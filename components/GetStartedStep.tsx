interface GetStartedStepProps {
  stepNumber: number;
  title: string;
  description: string;
}

export function GetStartedStep({
  stepNumber,
  title,
  description,
}: GetStartedStepProps) {
  return (
    <div className="text-center">
      <div className="bg-brand-gradient mx-auto mb-6 flex h-15 w-15 items-center justify-center rounded-full text-2xl font-bold text-white">
        {stepNumber}
      </div>
      <h3 className="mb-4 text-2xl font-bold text-slate-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
