import type { ComponentPropsWithRef } from "react";
import { forwardRef } from "react";
import { Button } from "../../atoms/Button";

export type ElevatedButtonProps = ComponentPropsWithRef<"button">;

export const ElevatedButton = forwardRef<
  HTMLButtonElement,
  ElevatedButtonProps
>(function ElevatedButton({ ...props }, ref) {
  return (
    <Button {...props} ref={ref}>
      ElevatedButton
    </Button>
  );
});
