'use client';
import { ComponentPropsWithRef, ReactNode, forwardRef } from 'react';
import * as TooltipPrimitive from '@radix-ui/react-tooltip';
import { Text } from '../text';
import { VariantProps, tv } from 'tailwind-variants';

const arrowVariants = tv({
    variants: {
        variant: {
            Default: ['fill-secondary-pure'],
            OnColor: ['fill-neutral-2']
        }
    },
    defaultVariants: {
        variant: 'Default'
    }
});

const contentVariants = tv({
    base: [
        'data-[state=delayed-open]:data-[side=bottom]:animate-slideUpAndFade',
        'data-[state=delayed-open]:data-[side=left]:animate-slideRightAndFade',
        'data-[state=delayed-open]:data-[side=top]:animate-slideDownAndFade',
        'data-[state=delayed-open]:data-[side=right]:animate-slideLeftAndFade',
        'rounded-[0.375rem]',
        'px-2.5',
        'py-2.5',
        'shadow-[0rem_0.0625rem_0.3125rem_secondary-a20]',
        'select-none',
        'duration-[400ms]',
        'ease-[cubic-bezier(0.16, 1, 0.3, 1)]',
        'will-change-[transform,opacity]'
    ],
    variants: {
        variant: {
            Default: ['text-neutral-2', 'bg-secondary-pure'],
            OnColor: ['text-neutral-pure', 'bg-neutral-2']
        }
    },
    defaultVariants: {
        variant: 'Default'
    }
});

type TooltipProps = ComponentPropsWithRef<typeof TooltipPrimitive.Root> &
    Omit<React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>, 'content'> &
    VariantProps<typeof contentVariants> & {
        multiline: boolean;
        content: ReactNode;
        container?: React.ComponentProps<typeof TooltipPrimitive.Portal>['container'];
    };

type TooltipElement = React.ElementRef<typeof TooltipPrimitive.Content>;
const Tooltip = forwardRef<TooltipElement, TooltipProps>((props, forwardedRef) => {
    const { children, className, open, defaultOpen, onOpenChange, delayDuration, disableHoverableContent, content, variant, multiline, container, forceMount, ...tooltipContentProps } = props;
    const rootProps = { open, defaultOpen, onOpenChange, delayDuration, disableHoverableContent };
    return (
        <TooltipPrimitive.Provider>
            <TooltipPrimitive.Root {...rootProps}>
                <TooltipPrimitive.Trigger className="w-full" asChild>
                    {children}
                </TooltipPrimitive.Trigger>
                <TooltipPrimitive.Portal container={container} forceMount={forceMount}>
                    <TooltipPrimitive.Content sideOffset={4} collisionPadding={10} {...tooltipContentProps} ref={forwardedRef} className={contentVariants({ variant, className })}>
                        <Text typography="button">{content}</Text>
                        <TooltipPrimitive.Arrow className={arrowVariants({ variant })} />
                    </TooltipPrimitive.Content>
                </TooltipPrimitive.Portal>
            </TooltipPrimitive.Root>
        </TooltipPrimitive.Provider>
    );
});
Tooltip.displayName = 'Tooltip';

export default Tooltip;
export type { TooltipProps };
