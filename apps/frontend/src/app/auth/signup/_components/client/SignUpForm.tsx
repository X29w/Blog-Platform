"use client";
import SubmitButton from "@/components/client/common/SubmitButton";
import ConditionalRender from "@/components/general/ConditionalRender";
import RenderList from "@/components/general/RenderList";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { signUp } from "@/service/services/auth";
import { useActionState, type FC } from "react";

interface SignUpFormProps {}

const SignUpForm: FC<SignUpFormProps> = () => {
  const [state, action] = useActionState(signUp, undefined);
  return (
    <form action={action} className="flex flex-col gap-2">
      <ConditionalRender condition={!!state?.message}>
        <p className="text-red-500 text-sm">{state?.message}</p>
      </ConditionalRender>

      <div>
        <Label htmlFor="name">Name</Label>
        <Input
          id="name"
          name="name"
          placeholder="John Doe"
          defaultValue={state?.data?.name}
        />
      </div>
      <ConditionalRender condition={!!state?.errors?.name}>
        <p className="text-red-500 text-sm">{state?.errors?.name}</p>
      </ConditionalRender>

      <div>
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          name="email"
          placeholder="john@example.com"
          defaultValue={state?.data?.email}
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
          defaultValue={state?.data?.password}
        />
      </div>
      <ConditionalRender condition={!!state?.errors?.password}>
        <div className="text-sm text-red-500">
          <p>Password Must:</p>

          <RenderList<any>
            items={state?.errors?.password || []}
            renderItems={(item) => <li>{item}</li>}
          />
        </div>
      </ConditionalRender>

      <SubmitButton>Sign Up</SubmitButton>
    </form>
  );
};

export default SignUpForm;
