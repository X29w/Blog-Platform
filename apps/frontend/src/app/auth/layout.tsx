import type { FC, PropsWithChildren } from "react";

interface AuthLayoutProps extends PropsWithChildren {}

const AuthLayout: FC<AuthLayoutProps> = ({ children }) => (
  <div className="min-h-screen flex items-center justify-center bg-slate-100">
    {children}
  </div>
);

export default AuthLayout;
