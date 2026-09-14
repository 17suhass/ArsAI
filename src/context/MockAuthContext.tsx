'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { UserRole, SupportedLanguage, MockUserSession } from '@/lib/types';
import { useRouter, usePathname } from 'next/navigation';
import { translate, isValidLanguage } from '@/lib/i18n';

export interface AuthContextType {
  currentUser: MockUserSession | null;
  currentRole: UserRole | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  language: SupportedLanguage;
  login: (email: string, password: string) => Promise<{ success: boolean; error?: string; redirectUrl?: string; role?: UserRole; user?: MockUserSession }>;
  signup: (data: { name: string; email: string; password: string; role: 'ARTISAN' | 'BUYER' }) => Promise<{ success: boolean; error?: string; redirectUrl?: string; role?: UserRole; user?: MockUserSession }>;
  logout: () => Promise<void>;
  switchRole: (role: UserRole) => Promise<void>;
  setLanguage: (lang: SupportedLanguage) => void;
  t: (en: string, hi?: string) => string;
}

export const DEMO_USERS: Record<UserRole, MockUserSession> = {
  ARTISAN: {
    id: 'user_artisan_1',
    name: 'Ramesh Kumar Prajapati',
    email: 'ramesh.artisan@arsai.org',
    role: 'ARTISAN',
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
    artisanId: 'artisan_demo_1',
  },
  BUYER: {
    id: 'user_buyer_1',
    name: 'Aditi Sen (Vistara Interiors)',
    email: 'aditi.buyer@arsai.org',
    role: 'BUYER',
    avatarUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80',
  },
  ADMIN: {
    id: 'user_admin_1',
    name: 'Vikramaditya Rao (Nodal Officer)',
    email: 'admin@arsai.org',
    role: 'ADMIN',
    avatarUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&auto=format&fit=crop&q=80',
  },
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function MockAuthProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();

  const [currentUser, setCurrentUser] = useState<MockUserSession | null>(null);
  const [currentRole, setCurrentRole] = useState<UserRole | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [language, setLanguage] = useState<SupportedLanguage>('en');

  // Verify session on mount
  useEffect(() => {
    // 1. Language restore (all 13 supported languages)
    try {
      let savedLang = localStorage.getItem('arsai_lang') as SupportedLanguage;
      if (!savedLang || !isValidLanguage(savedLang)) {
        const match = document.cookie.match(/(?:^|;\s*)arsai_lang=([a-z]{2})/);
        if (match && isValidLanguage(match[1])) {
          savedLang = match[1] as SupportedLanguage;
        }
      }
      if (savedLang && isValidLanguage(savedLang)) {
        setLanguage(savedLang);
      }
    } catch (e) {
      console.warn('Could not restore language from storage:', e);
    }

    // 2. Check active session via /api/auth/me
    async function checkSession() {
      try {
        const res = await fetch('/api/auth/me', { cache: 'no-store' });
        if (res.ok) {
          const data = await res.json();
          if (data.authenticated && data.user) {
            setCurrentUser(data.user);
            setCurrentRole(data.user.role as UserRole);
            setIsAuthenticated(true);
            localStorage.setItem('arsai_auth', 'true');
            localStorage.setItem('arsai_role', data.user.role);
            localStorage.setItem('arsai_user', JSON.stringify(data.user));
            setIsLoading(false);
            return;
          } else {
            // Server confirmed unauthenticated: clear any stale client state
            setCurrentUser(null);
            setCurrentRole(null);
            setIsAuthenticated(false);
            localStorage.removeItem('arsai_auth');
            localStorage.removeItem('arsai_role');
            localStorage.removeItem('arsai_user');
            setIsLoading(false);
            return;
          }
        }
      } catch (err) {
        console.warn('Session verification fallback to localStorage (offline):', err);
      }

      // Offline fallback check only if server was unreachable
      const localAuth = localStorage.getItem('arsai_auth');
      const localUser = localStorage.getItem('arsai_user');
      const localRole = localStorage.getItem('arsai_role') as UserRole;

      if (localAuth === 'true' && localUser) {
        try {
          const parsed = JSON.parse(localUser);
          setCurrentUser(parsed);
          setCurrentRole(localRole || parsed.role || 'BUYER');
          setIsAuthenticated(true);
        } catch {
          setIsAuthenticated(false);
          setCurrentUser(null);
          setCurrentRole(null);
        }
      } else {
        setIsAuthenticated(false);
        setCurrentUser(null);
        setCurrentRole(null);
      }
      setIsLoading(false);
    }

    checkSession().finally(() => setIsLoading(false));
  }, []);

  const login = async (email: string, password: string) => {
    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();
      if (!res.ok || !data.success) {
        return { success: false, error: data.error || 'Login failed' };
      }

      setCurrentUser(data.user);
      setCurrentRole(data.user.role as UserRole);
      setIsAuthenticated(true);

      localStorage.setItem('arsai_auth', 'true');
      localStorage.setItem('arsai_role', data.user.role);
      localStorage.setItem('arsai_user', JSON.stringify(data.user));

      return { success: true, redirectUrl: data.redirectUrl, user: data.user, role: data.user.role as UserRole };
    } catch (err: any) {
      return { success: false, error: err.message || 'Network error during login' };
    }
  };

  const signup = async (payload: { name: string; email: string; password: string; role: 'ARTISAN' | 'BUYER' }) => {
    try {
      const res = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (!res.ok || !data.success) {
        return { success: false, error: data.error || 'Registration failed' };
      }

      setCurrentUser(data.user);
      setCurrentRole(data.user.role as UserRole);
      setIsAuthenticated(true);

      localStorage.setItem('arsai_auth', 'true');
      localStorage.setItem('arsai_role', data.user.role);
      localStorage.setItem('arsai_user', JSON.stringify(data.user));

      return { success: true, redirectUrl: data.redirectUrl, user: data.user, role: data.user.role as UserRole };
    } catch (err: any) {
      return { success: false, error: err.message || 'Network error during signup' };
    }
  };

  const logout = async () => {
    try {
      await fetch('/api/auth/logout', { method: 'POST' });
    } catch (e) {
      console.error('Logout error:', e);
    }
    setCurrentUser(null);
    setCurrentRole(null);
    setIsAuthenticated(false);
    localStorage.removeItem('arsai_auth');
    localStorage.removeItem('arsai_role');
    localStorage.removeItem('arsai_user');
    sessionStorage.removeItem('arsai_redirect');
    try {
      document.cookie = 'arsai_session=; path=/; max-age=0; expires=Thu, 01 Jan 1970 00:00:00 GMT';
      document.cookie = 'arsai_role=; path=/; max-age=0; expires=Thu, 01 Jan 1970 00:00:00 GMT';
    } catch (e) {}

    router.replace('/');
  };

  // Demo / presentation role simulation that signs in as the respective demo user
  const switchRole = async (newRole: UserRole) => {
    // Automatically log in as the demo user for this role
    const demoEmail =
      newRole === 'ARTISAN'
        ? 'ramesh.artisan@arsai.org'
        : newRole === 'ADMIN'
        ? 'admin@arsai.org'
        : 'aditi.buyer@arsai.org';

    const loginRes = await login(demoEmail, 'password123');
    if (!loginRes.success) {
      // Fallback if network fails: set demo user directly
      const mock = DEMO_USERS[newRole];
      setCurrentUser(mock);
      setCurrentRole(newRole);
      setIsAuthenticated(true);
      localStorage.setItem('arsai_auth', 'true');
      localStorage.setItem('arsai_role', newRole);
      localStorage.setItem('arsai_user', JSON.stringify(mock));
    }

    if (newRole === 'ARTISAN') {
      router.push('/artisan');
    } else if (newRole === 'BUYER') {
      router.push('/');
    } else if (newRole === 'ADMIN') {
      router.push('/admin');
    }
  };

  const handleSetLanguage = (lang: SupportedLanguage) => {
    setLanguage(lang);
    try {
      localStorage.setItem('arsai_lang', lang);
      document.cookie = `arsai_lang=${lang}; path=/; max-age=31536000; SameSite=Lax`;
      if (lang !== 'en') {
        localStorage.setItem('arsai_regional_slot', lang);
      }
    } catch (e) {
      console.error(e);
    }
  };

  const t = (keyOrEn: string, fallbackOrHi?: string) =>
    translate(language, keyOrEn, fallbackOrHi);

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        currentRole,
        isAuthenticated,
        isLoading,
        language,
        login,
        signup,
        logout,
        switchRole,
        setLanguage: handleSetLanguage,
        t,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useMockAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useMockAuth must be used within a MockAuthProvider');
  }
  return context;
}
