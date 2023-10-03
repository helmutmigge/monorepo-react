import { ComponentPropsWithoutRef, forwardRef } from "react";
import { twMerge } from "tailwind-merge";
import { IconButton } from "../icon-button";
type IconToolbarButtonElement = React.ElementRef<typeof IconButton>;

export type IconToolbarButtonProps = ComponentPropsWithoutRef<
  typeof IconButton
>;
const IconToolbarButton = forwardRef<
  IconToolbarButtonElement,
  IconToolbarButtonProps
>(({ className, children, ...iconToolbarButtonProps }, forwardedRef) => {
  return (
    <IconButton
      ref={forwardedRef}
      className={twMerge(className, "rounded-full")}
      {...iconToolbarButtonProps}
    >
      {children}
    </IconButton>
  );
});

IconToolbarButton.displayName = "IconToolbarButton";

export default IconToolbarButton;
