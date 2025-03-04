"use client";
import { useActionState, type FC } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import SubmitButton from "@/components/client/common/SubmitButton";
import { signIn } from "@/service/services/auth";
import ConditionalRender from "@/components/general/ConditionalRender";

interface SignInFormProps {}

const SignInForm: FC<SignInFormProps> = () => {
  const [state, action] = useActionState(signIn, undefined);
  return (
    <form action={action} className="flex flex-col gap-2">
      <ConditionalRender condition={!!state?.message}>
        <p className="text-red-500 text-sm">{state?.message}</p>
      </ConditionalRender>

      <div>
        <Label defaultValue={state?.data.email} htmlFor="email">
          Email
        </Label>
        <Input
          id="email"
          name="email"
          placeholder="john@example.com"
          type="email"
        />
      </div>

      <ConditionalRender condition={!!state?.errors?.email}>
        <p className="text-red-500 text-sm">{state?.errors?.email}</p>
      </ConditionalRender>

      <div>
        <Label htmlFor="password">Password</Label>
        <Input
          id="password"
          name="password"
          type="password"
          defaultValue={state?.data.password}
        />
      </div>
      <ConditionalRender condition={!!state?.errors?.password}>
        <p className="text-red-500 text-sm">{state?.errors?.password}</p>
      </ConditionalRender>

      <SubmitButton>Sign In</SubmitButton>
    </form>
  );
};

export default SignInForm;
