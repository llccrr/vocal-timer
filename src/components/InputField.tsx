import React from 'react';
import { LucideIcon } from 'lucide-react';

interface InputFieldProps {
  icon: LucideIcon;
  label: string;
  value: string | number;
  onChange: (value: any) => void;
  type?: string;
  min?: number;
  placeholder?: string;
}

export function InputField({
  icon: Icon,
  label,
  value,
  onChange,
  type = 'text',
  min,
  placeholder,
}: InputFieldProps) {
  return (
    <div className="space-y-2">
      <label className="flex items-center gap-2 text-gray-700 font-medium">
        <Icon size={20} />
        {label}
      </label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
        placeholder={placeholder}
        min={min}
      />
    </div>
  );
}