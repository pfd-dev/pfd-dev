// Hooks
import { useThemeController } from "@/libs/hooks/useThemeController";

interface ButtonProps {
  children?: React.ReactNode;
  disabled?: boolean;
  leftIcon?: React.ReactElement | string | undefined;
  onClick?: () => void;
  rightIcon?: React.ReactElement | string | undefined;
  styles?: string;
  text?: string;
  title?: string;
  type?: 'button' | 'submit' | 'reset' | undefined;
  ref?: React.RefObject<HTMLButtonElement | null>;
}

const Button = ({
  children,
  disabled = false,
  leftIcon,
  onClick,
  rightIcon,
  styles,
  text,
  title,
  type = 'button',
  ref,
}: ButtonProps) => {
  const { tones } = useThemeController();

  const buttonClasses = `
    outline ${tones.outlineColor.normal} flex items-center gap-1 px-2 rounded-xl transition-colors 
    ${styles}
    ${disabled ? 'bg-stone-700' : `${tones.bgColor.normal} hover:${tones.bgColor.dark} `}
  `;

  return (
    <button
      className={buttonClasses}
      disabled={disabled}
      onClick={onClick}
      title={title}
      type={type}
      ref={ref}
    >
      {children || (
        <>
          {leftIcon && <span className="fill-stone-200">{leftIcon}</span>}
          {text && <span className="text-stone-200 text-lg font-medium">{text}</span>}
          {rightIcon && <span className="fill-stone-200">{rightIcon}</span>}
        </>
      )}
    </button>
  )
}

export { Button };
