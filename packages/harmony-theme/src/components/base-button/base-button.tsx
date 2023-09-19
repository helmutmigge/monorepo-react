import { ComponentProps, forwardRef } from 'react';
import { VariantProps, tv } from 'tailwind-variants';

const baseButtonVariants = tv({
    base: ['px-[1.5rem]', 'rounded-[0.5rem]', 'uppercase', 'box-border', 'items-center', 'justify-center', 'inline-flex'],
    variants: {
        variant: {
            'Primary-Large': [
                'border-none',
                'bg-primary-pure',
                'text-neutral-2',
                'hover:bg-primary-14',
                'disabled:bg-neutral-3',
                'disabled:text-neutral-6',
                'focus:outline',
                'focus:outline-primary-pure',
                'focus:outline-[0.0625rem]',
                'focus:outline-offset-[0.12rem]',
                'focus:boder-transparent',
                'border-transparent',
                'active:outline-none',
                'active:bg-primary-7',
                'h-[3rem]',
                'py-[3rem]'
            ],
            'Secondary-Large': [
                'bg-transparent',
                'border-[0.0625rem]',
                'border-primary-pure',
                'text-primary-pure',
                'hover:bg-primary-3',
                'disabled:text-neutral-6',
                'disabled:border-neutral-6',
                'focus:bg-primary-3',
                'focus:outline-primary-pure',
                'focus:outline-offset-[0.12rem]',
                'focus:outline-[0.0625rem]',
                'focus:boder-transparent',
                'active:outline-none',
                'active:bg-primary-7',
                'active:text-neutral-2',
                'h-[3rem]',
                'py-[3rem]'
            ],
            'Tertiary-Large': [
                'bg-transparent',
                'text-primary-pure',
                'hover:bg-secondary-2',
                'disabled:text-neutral-6',
                'focus:bg-primary-3',
                'focus:outline-[0.625rem]',
                'focus:outline-offset-[0.12rem]',
                'outline-primary-pure',
                'focus:border-transparent',
                'active:outline-none',
                'active:bg-secondary-7',
                'active:text-neutral-2',
                'h-[3rem]',
                'py-[3rem]'
            ],
            'Primary-Small': [
                'border-none',
                'bg-primary-pure',
                'text-neutral-2',
                'hover:bg-primary-14',
                'disabled:bg-neutral-3',
                'disabled:text-neutral-6',
                'focus:outline',
                'focus:outline-primary-pure',
                'focus:outline-[0.0625rem]',
                'focus:outline-offset-[0.12rem]',
                'border-transparent',
                'active:outline-none',
                'active:bg-primary-7',
                'h-[2rem]',
                'py-[0.5rem]'
            ],
            'Secondary-Small': [
                'bg-transparent',
                'border-[0.0625rem]',
                'border-primary-pure',
                'text-primary-pure',
                'hover:bg-primary-3',
                'disabled:text-neutral-6',
                'disabled:border-neutral-6',
                'focus:bg-primary-3',
                'focus:outline-primary-pure',
                'focus:outline-offset-[0.12rem]',
                'focus:outline-[0.0625rem]',
                'focus:boder-transparent',
                'active:outline-none',
                'active:bg-primary-7',
                'active:text-neutral-2',
                'h-[2rem]',
                'py-[0.5rem]'
            ],
            'Tertiary-Small': [
                'bg-transparent',
                'text-primary-pure',
                'hover:bg-secondary-2',
                'disabled:text-neutral-6',
                'focus:bg-primary-3',
                'focus:outline-[0.625rem]',
                'focus:outline-offset-[0.12rem]',
                'outline-primary-pure',
                'focus:border-transparent',
                'active:outline-none',
                'active:bg-secondary-7',
                'active:text-neutral-2',
                'h-[2rem]',
                'py-[0.5rem]'
            ],
            Compact: [
                'capitalize',
                'h-8',
                'px-1',
                'py-1',
                'text-neutral-10',
                'hover:text-primary-pure',
                'disabled:text-neutral-6',
                'focus:boder-[0.125rem]',
                'focus:border-primary-pure',
                'active:border-none',
                'active:bg-primary-2',
                'active:text-primary-pure'
            ]
        }
    },
    defaultVariants: {
        variant: 'Primary-Large'
    }
});

type ButtonElement = React.ElementRef<'button'>;

export type BaseButtonProps = ComponentProps<'button'> & VariantProps<typeof baseButtonVariants>;

const BaseButton = forwardRef<ButtonElement, BaseButtonProps>(({ variant, className, children, ...buttonProps }, forwardedRef) => {
    return (
        <button ref={forwardedRef} className={baseButtonVariants({ variant, className })} {...buttonProps}>
            {children}
        </button>
    );
});

BaseButton.displayName = 'BaseButton';

export default BaseButton;
