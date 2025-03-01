/**
 * @name secretKey
 * @description 用于会话加密的密钥，从环境变量 SESSION_SECRET_KEY 中获取
 */
export const secretKey = process.env.SESSION_SECRET_KEY!;

/**
 * @name encodedKey
 * @description 将 secretKey 编码为 Uint8Array，用于 JWT 签名和验证
 */
export const encodedKey = new TextEncoder().encode(secretKey);

/**
 * @name BACKEND_URL
 * @description 后端服务的 URL 地址，默认为 http://localhost:8000
 */
export const BACKEND_URL = "http://localhost:8000";

/**
 * @name DEFAULT_PAGE_SIZE
 * @description 默认的分页大小，用于分页查询
 */
export const DEFAULT_PAGE_SIZE = 12;
