import type { ReactNode } from 'react';

export type TextProps = {
  children?: ReactNode;
};

export function Text({ children }: TextProps) {
  return (
    <div>
      {children}
    </div>
  );
}
