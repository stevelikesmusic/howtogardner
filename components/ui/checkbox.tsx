import * as React from 'react';
import { cn } from '@/lib/utils';

interface CheckboxProps {
  id?: string;
  name?: string;
  value?: string;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  className?: string;
  children?: React.ReactNode;
}

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  (
    { id, name, value, checked, onChange, className, children, ...props },
    ref,
  ) => {
    return (
      <label
        className={cn('flex cursor-pointer items-center', className)}
        htmlFor={id}
      >
        <input
          ref={ref}
          checked={checked}
          className="mr-2 h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500"
          id={id}
          name={name}
          type="checkbox"
          value={value}
          onChange={(e) => onChange?.(e.target.checked)}
          {...props}
        />
        {children}
      </label>
    );
  },
);

Checkbox.displayName = 'Checkbox';
