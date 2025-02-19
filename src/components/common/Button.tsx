import React from 'react';
// Hooks
import { useThemeController } from '@/libs/hooks/useThemeController';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
  leftIcon?: React.ReactElement | string;
  rightIcon?: React.ReactElement | string;
  styles?: string;
  text?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  disabled = false,
  isLoading = false,
  leftIcon,
  rightIcon,
  text,
  styles,
  ...props
}) => {
  const { tones } = useThemeController();

  const buttonClasses = `
    outline ${tones.outlineColor.normal} flex items-center gap-1 px-2 py-1 rounded-xl transition-colors 
    ${styles}
    ${disabled ? 'bg-stone-700' : `${tones.bgColor.normal} hover:${tones.bgColor.dark} `}
  `;

  return (
    <button
      className={buttonClasses}
      disabled={disabled || isLoading}
      aria-label={props['aria-label'] || text || props.title || 'button'}
      role="button"
      {...props}
    >
      {isLoading ?
        <span className="loader" aria-hidden="true" /> :
        <>
          {leftIcon && <span className="fill-stone-200 flex items-center">{leftIcon}</span>}
          {text && <span className="text-stone-200 text-sm font-bold capitalize">{text}</span>}
          {rightIcon && <span className="fill-stone-200 flex items-center">{rightIcon}</span>}
          {children}
        </>
      }
    </button>
  );
}
