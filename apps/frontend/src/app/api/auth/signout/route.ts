import { deleteSession } from "@/utils/config/session";
import { redirect } from "next/navigation";

export const GET = async () => {
  await deleteSession();
  redirect("/");
};
