import Link from "next/link";
import type { FC } from "react";
import SignUpForm from "./_components/client/SignUpForm";

interface SignUpPageProps {}

const SignUpPage: FC<SignUpPageProps> = () => (
  <div className="bg-white p-8 rounded-md shadow-md w-96 flex flex-col justify-center items-center">
    <h2 className="text-center text-2xl font-bold mb-4">欢迎注册</h2>
    <SignUpForm />
    <div>
      <p>已经有账户了吗?</p>
      <Link className="underline" href={"/auth/signin"}>
        登录
      </Link>
    </div>
  </div>
);

export default SignUpPage;
