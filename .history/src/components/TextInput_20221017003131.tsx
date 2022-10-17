import { ReactNode } from 'react';
import { clsx } from 'clsx';

export interface TextInputProps {
  children: ReactNode;
  asChild?: boolean;
}

export function TextInput({ children, asChild }: TextInputProps) {
  const Comp = asChild ? Slot : 'TextInput';
  return (
    <Comp className={clsx('py-4 px-3 bg-cyan-500 rounded font-semibold text-black text-sm w-full transition-colors hover:bg-cyan-300 focus:ring-2 ring-white',
    )}>
      {children}
    </Comp>
  )
}
