import { UserRole } from '@/lib/types';

/**
 * Returns the default authorized destination for a given user role.
 */
export function getDefaultDestination(role: UserRole | string | null | undefined): string {
  if (role === 'ARTISAN') return '/artisan';
  if (role === 'ADMIN') return '/admin';
  return '/marketplace';
}

/**
 * Validates and sanitizes redirect destinations based on the authenticated user's role.
 * Prevents unauthorized role access (e.g. Buyer redirected to /artisan or /admin)
 * and eliminates open-redirect vulnerabilities.
 */
export function getSafeRedirectUrl(
  candidateUrl: string | null | undefined,
  role: UserRole | string | null | undefined
): string {
  const defaultDest = getDefaultDestination(role);

  if (!candidateUrl || typeof candidateUrl !== 'string') {
    return defaultDest;
  }

  let target = candidateUrl.trim();
  try {
    target = decodeURIComponent(target);
  } catch {}

  // Open-redirect prevention: must start with single '/', not '//' or absolute protocol
  if (!target.startsWith('/') || target.startsWith('//') || target.includes('://')) {
    return defaultDest;
  }

  // Prevent redirect loops to login/signup/auth endpoints
  if (
    target === '/login' ||
    target.startsWith('/login?') ||
    target === '/signup' ||
    target.startsWith('/signup?') ||
    target.startsWith('/api/')
  ) {
    return defaultDest;
  }

  // Root landing page redirects to the role's default destination
  if (target === '/') {
    return defaultDest;
  }

  // Admin section: ADMIN ONLY
  if (target.startsWith('/admin')) {
    return role === 'ADMIN' ? target : defaultDest;
  }

  // Protected artisan dashboard sections: ARTISAN ONLY
  // Note: /artisan/[id] is the public artisan craft profile, which is open to all
  const isProtectedArtisanRoute =
    target === '/artisan' ||
    target.startsWith('/artisan?') ||
    target.startsWith('/artisan/new');

  if (isProtectedArtisanRoute) {
    return role === 'ARTISAN' ? target : defaultDest;
  }

  // Permitted paths for all roles (including BUYER):
  // /marketplace, /product/[id], /artisan/[id] (public profile), etc.
  return target;
}
