export const secretKey = process.env.SESSION_SECRET_KEY!;
export const encodedKey = new TextEncoder().encode(secretKey);
