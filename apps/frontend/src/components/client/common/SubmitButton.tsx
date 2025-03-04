"use client";
import ConditionalRender from "@/components/general/ConditionalRender";
import { Button, ButtonProps } from "@/components/ui/button";
import type { FC } from "react";
import { useFormStatus } from "react-dom";

interface SubmitButtonProps extends ButtonProps {}

const SubmitButton: FC<SubmitButtonProps> = ({ children, ...props }) => {
  const { pending } = useFormStatus();
  return (
    <Button color="blue" type="submit" aria-disabled={pending} {...props}>
      <ConditionalRender condition={pending} fallback={children}>
        <span className="animate-pulse">Submitting</span>
      </ConditionalRender>
    </Button>
  );
};

export default SubmitButton;
