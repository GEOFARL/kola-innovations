import { cn } from '@/lib/cn';
import { Loader2 } from 'lucide-react';
import { ComponentProps } from 'react';

export const buttonSizes = ['xs', 'sm', 'md', 'lg'] as const;
export const buttonVariants = [
  'primary',
  'secondary',
  'link',
  'text-link',
] as const;
export const buttonColors = ['red', 'black'] as const;

export type Size = (typeof buttonSizes)[number];
export type Variant = (typeof buttonVariants)[number];
export type Color = (typeof buttonColors)[number];

type Props = {
  variant?: Variant;
  size?: Size;
  color?: Color;
  isLoading?: boolean;
} & ComponentProps<'button'>;

const Button: React.FC<Props> = ({
  variant = 'primary',
  size = 'md',
  color = 'red',
  disabled,
  className,
  children,
  isLoading,
  ...props
}) => {
  const base =
    'flex items-center justify-center transition font-semibold small-1 cursor-pointer border-[1px] border-transparent';

  const sizesMap: Record<Size, string> = {
    xs: 'px-2 py-[3px] rounded-[4px] min-w-[67px] min-h-[28px]',
    sm: 'px-2 py-[5.5px] rounded-[6px] min-w-[67px] min-h-[32px]',
    md: 'px-3 py-[9.5px] rounded-[8px] min-w-[75px] min-h-[40px]',
    lg: 'px-4 py-[13px] rounded-[8px] min-w-[90px] min-h-[50px]',
  };

  const variantStyles: Record<
    Variant,
    (color: Color, isLoading: boolean) => string
  > = {
    primary: (color, isLoading) =>
      cn(
        'text-white',
        'hover:bg-primary-600',
        'disabled:bg-dark-400',
        color === 'red' && 'bg-primary',
        color === 'black' && 'bg-dark-900',
        !isLoading && 'active:bg-primary-700',
      ),
    secondary: (color, isLoading) =>
      cn(
        'bg-transparent text-primary border-primary-300',
        'enabled:hover:bg-primary-100 enabled:hover:text-primary-600',
        'disabled:text-dark-400 disabled:border-dark-400',
        color === 'black' && 'text-dark-900 border-dark-200',
        !isLoading &&
          'enabled:active:bg-primary-200 enabled:active:text-primary-700',
      ),
    link: (color, isLoading) =>
      cn(
        'bg-transparent text-primary',
        'enabled:hover:bg-primary-100 enabled:hover:text-primary-600',
        'disabled:text-dark-400',
        color === 'black' && 'text-dark-900',
        !isLoading &&
          'enabled:active:bg-primary-200 enabled:active:text-primary-700',
      ),
    'text-link': (color, isLoading) =>
      cn(
        'bg-transparent text-primary',
        'enabled:hover:underline enabled:hover:text-primary-600',
        'disabled:text-dark-400',
        color === 'black' && 'text-dark-900',
        !isLoading && 'enabled:active:text-primary-700',
      ),
  };

  return (
    <button
      className={cn(
        base,
        sizesMap[size],
        variantStyles[variant](color, isLoading ?? false),
        className,
      )}
      disabled={disabled}
      {...props}
    >
      {isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : children}
    </button>
  );
};

export default Button;
