import { FC } from 'react';
import { CheckCircle } from 'lucide-react';

type Props = {
  icon: string;
  title: string;
  description: string;
  features: string[];
};

export const ServiceCard: FC<Props> = ({
  icon,
  title,
  description,
  features,
}) => {
  return (
    <div className="group flex flex-col justify-between rounded-2xl bg-white p-10 shadow-lg transition-all hover:-translate-y-2 hover:shadow-2xl">
      <div>
        <div className="bg-brand-gradient mb-6 flex h-15 w-15 items-center justify-center rounded-2xl text-2xl">
          {icon}
        </div>
        <h3 className="mb-4 text-2xl font-bold text-slate-800">{title}</h3>
        <p className="mb-6 text-gray-600">{description}</p>
      </div>
      <ul className="space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-slate-700">
            <CheckCircle className="mr-3 h-5 w-5 text-green-500" />
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
};
