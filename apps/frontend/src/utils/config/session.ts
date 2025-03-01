import { JWTPayload, jwtVerify, SignJWT } from "jose";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { encodedKey } from "../../../constant/config";

/**
 * @name 创建 Session
 * @description 创建 Session
 * @param {Session.Session} payload
 */
export const createSession = async (payload: Session.Session) => {
  const session = await new SignJWT(payload as unknown as JWTPayload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("7d")
    .sign(encodedKey);

  const expiredAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);

  (await cookies()).set("session", session, {
    httpOnly: true,
    secure: true,
    expires: expiredAt,
    sameSite: "lax",
    path: "/",
  });
};

/**
 * @name 获取 Session
 * @description 获取 Session
 * @return {*}
 */
export const getSession = async () => {
  const cookie = (await cookies()).get("session")?.value;
  if (!cookie) return null;

  try {
    const { payload } = await jwtVerify(cookie, encodedKey, {
      algorithms: ["HS256"],
    });
    return payload as unknown as Session.Session;
  } catch (err) {
    console.error("Failed to verify the session: ", err);
    redirect("/auth/sginin");
  }
};

/**
 * @name 删除 Session
 * @description 删除 Session
 */
export const deleteSession = async () => (await cookies()).delete("session");
