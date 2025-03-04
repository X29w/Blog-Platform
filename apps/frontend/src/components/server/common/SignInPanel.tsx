import Link from "next/link";
import { Fragment, type FC } from "react";

interface SignInPanelProps {}

const SignInPanel: FC<SignInPanelProps> = () => (
  <Fragment>
    <Link href={"/auth/signin"}>Sign In</Link>
    <Link href={"/auth/signup"}>Sign Up</Link>
  </Fragment>
);

export default SignInPanel;
