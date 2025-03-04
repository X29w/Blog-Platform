import { fetchGraphQL } from "@/utils/common/graphql";
import { SignUpFormSchema } from "@/utils/feature/zodSchema/auth";
import { print } from "graphql";
import { redirect } from "next/navigation";
import { CREATE_USER_MUTATION } from "../queries/user";

export const signUp = async (
  state: Auth.ISignUpFormState,
  formData: FormData
): Promise<Auth.ISignUpFormState> => {
  const validatedFields = SignUpFormSchema.safeParse(
    Object.fromEntries(formData.entries())
  );

  if (!validatedFields.success)
    return {
      data: Object.fromEntries(formData.entries()),
      errors: validatedFields.error.flatten().fieldErrors,
    };

  const data = await fetchGraphQL(print(CREATE_USER_MUTATION), {
    input: {
      ...validatedFields.data,
    },
  });

  if (data.errors)
    return {
      data: Object.fromEntries(formData.entries()),
      message: "Something went wrong",
    };
  redirect("/auth/signin");
};

/* export const signIn = async (
  state: SignUpFormState,
  formData: FormData
): Promise<SignUpFormState> => {
  const validatedFields = LoginFormSchema.safeParse(
    Object.fromEntries(formData.entries())
  );

  if (!validatedFields.success)
    return {
      data: Object.fromEntries(formData.entries()),
      errors: validatedFields.error.flatten().fieldErrors,
    };

  const data = await fetchGraphQL(print(SIGN_IN_MUTATION), {
    input: {
      ...validatedFields.data,
    },
  });

  if (data.errors) {
    return {
      data: Object.fromEntries(formData.entries()),
      message: "Invalid Credentials",
    };
  }
  // Todo: create a session
  await createSession({
    user: {
      id: data.signIn.id,
      name: data.signIn.name,
      avatar: data.signIn.avatar,
    },
    accessToken: data.signIn.accessToken,
  });
  revalidatePath("/");
  redirect("/");
};
 */
