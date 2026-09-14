import crypto from 'crypto';

const AUTH_SECRET = process.env.AUTH_SECRET || 'arsai-sih-2026-secret-key-production-ready';

/**
 * Generates a cryptographically secure hash for a password using scrypt + salt.
 * Output format: salt:hashHex
 */
export function hashPassword(password: string): string {
  const salt = crypto.randomBytes(16).toString('hex');
  const derivedKey = crypto.scryptSync(password, salt, 64);
  return `${salt}:${derivedKey.toString('hex')}`;
}

/**
 * Verifies a password against a stored salt:hash string using constant-time comparison.
 */
export function verifyPassword(password: string, storedHash: string | null | undefined): boolean {
  if (!storedHash || !storedHash.includes(':')) {
    return false;
  }
  try {
    const [salt, key] = storedHash.split(':');
    const keyBuffer = Buffer.from(key, 'hex');
    const derivedKey = crypto.scryptSync(password, salt, 64);
    return crypto.timingSafeEqual(keyBuffer, derivedKey);
  } catch {
    return false;
  }
}

export interface SessionPayload {
  userId: string;
  email: string;
  name: string;
  role: 'ARTISAN' | 'BUYER' | 'ADMIN';
  avatarUrl?: string | null;
  expiresAt: number;
}

/**
 * Creates a signed base64 session token with HMAC-SHA256 signature.
 */
export function createSessionToken(payload: Omit<SessionPayload, 'expiresAt'>): string {
  const expiresAt = Date.now() + 7 * 24 * 60 * 60 * 1000; // 7 days
  const data: SessionPayload = { ...payload, expiresAt };
  const jsonStr = JSON.stringify(data);
  const base64Data = Buffer.from(jsonStr).toString('base64url');
  const signature = crypto.createHmac('sha256', AUTH_SECRET).update(base64Data).digest('base64url');
  return `${base64Data}.${signature}`;
}

/**
 * Verifies and parses a signed session token.
 */
export function verifySessionToken(token: string | null | undefined): SessionPayload | null {
  if (!token || !token.includes('.')) return null;
  try {
    const [base64Data, signature] = token.split('.');
    const expectedSig = crypto.createHmac('sha256', AUTH_SECRET).update(base64Data).digest('base64url');
    if (!crypto.timingSafeEqual(Buffer.from(signature), Buffer.from(expectedSig))) {
      return null;
    }
    const jsonStr = Buffer.from(base64Data, 'base64url').toString('utf-8');
    const payload = JSON.parse(jsonStr) as SessionPayload;
    if (payload.expiresAt && Date.now() > payload.expiresAt) {
      return null;
    }
    return payload;
  } catch {
    return null;
  }
}
