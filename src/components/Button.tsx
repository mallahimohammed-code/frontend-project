import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { cn } from '@/src/lib/utils';

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'link';
type ButtonSize = 'sm' | 'md' | 'lg' | 'icon';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
  leftIcon?: ReactNode;
};

const variantClasses: Record<ButtonVariant, string> = {
  primary: 'bg-primary text-white hover:bg-primary-container shadow-bento',
  secondary: 'bg-surface-container-lowest text-on-surface border border-outline-variant hover:bg-surface-container shadow-bento',
  ghost: 'bg-transparent text-on-surface-variant hover:bg-surface-container hover:text-primary',
  link: 'bg-transparent text-primary shadow-none hover:underline underline-offset-4 active:scale-100',
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-xs',
  md: 'px-5 py-2.5 text-sm',
  lg: 'px-6 py-3 text-sm',
  icon: 'p-2.5',
};

export default function Button({
  variant = 'primary',
  size = 'md',
  leftIcon,
  className,
  children,
  type = 'button',
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={cn(
        'rounded-item font-bold transition-all flex items-center justify-center gap-2 active:scale-95',
        variantClasses[variant],
        sizeClasses[size],
        variant === 'link' && 'p-0',
        className
      )}
      {...props}
    >
      {leftIcon}
      {children}
    </button>
  );
}
