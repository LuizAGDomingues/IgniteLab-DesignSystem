import { InputHTMLAttributes, ReactNode } from 'react';
import { clsx } from 'clsx';

export interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {}

export function TextInput(props: TextInputProps) {
  return (
    <div>
      <input className={clsx(
          ,
        )}
        {...props}
      />
    </div>
  )
}
