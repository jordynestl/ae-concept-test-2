import React, { KeyboardEvent } from 'react';

interface InputWithSpacesProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
}

export function InputWithSpaces({
  value,
  onChange,
  placeholder = '',
  className = '',
}: InputWithSpacesProps) {
  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    // Prevent default only for specific keys that need special handling
    // Don't prevent default for Space key
    if (e.key === 'Space') {
      e.stopPropagation();
    }
  };

  return (
    <input 
      type="text" 
      value={value} 
      onChange={(e) => onChange(e.target.value)}
      onKeyDown={handleKeyDown}
      className={`w-full p-0 border-0 focus:outline-none bg-transparent ${className}`}
      placeholder={placeholder}
    />
  );
}