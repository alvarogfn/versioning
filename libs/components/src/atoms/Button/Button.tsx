import type { ComponentPropsWithRef } from "react";
import { forwardRef } from "react";

export type ButtonProps = ComponentPropsWithRef<"button">;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  function Button({ ...props }, ref) {
    return <button {...props} ref={ref}></button>;
  }
);
