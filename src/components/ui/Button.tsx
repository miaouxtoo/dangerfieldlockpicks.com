'use client';

import { cn } from '@/lib/utils';
import Link from 'next/link';
import { forwardRef } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'outline';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  external?: boolean;
  children: React.ReactNode;
}

const variants: Record<ButtonVariant, string> = {
  primary: 'bg-[var(--accent)] text-[var(--background)] hover:bg-[var(--accent-hover)] font-semibold',
  secondary: 'bg-[var(--background-tertiary)] text-[var(--foreground)] hover:bg-[var(--background-elevated)] border border-[var(--border)]',
  ghost: 'bg-transparent text-[var(--foreground)] hover:bg-[var(--background-tertiary)]',
  outline: 'bg-transparent border-2 border-[var(--accent)] text-[var(--accent)] hover:bg-[var(--accent)] hover:text-[var(--background)]',
};

const sizes: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', href, external, children, ...props }, ref) => {
    const baseStyles = cn(
      'inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200',
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)]',
      'disabled:opacity-50 disabled:pointer-events-none',
      variants[variant],
      sizes[size],
      className
    );

    if (href) {
      if (external) {
        return (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={baseStyles}
          >
            {children}
          </a>
        );
      }
      return (
        <Link href={href} className={baseStyles}>
          {children}
        </Link>
      );
    }

    return (
      <button ref={ref} className={baseStyles} {...props}>
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
