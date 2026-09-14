'use client';

import React from 'react';
import { useMockAuth } from '@/context/MockAuthContext';
import { UserRole } from '@/lib/types';
import { Shield, Sparkles, User, ShoppingBag, Landmark } from 'lucide-react';

export default function MockAuthBar() {
  const { currentRole, currentUser, switchRole, language, t } = useMockAuth();

  const roles: { role: UserRole; label: string; labelHi: string; icon: React.ReactNode; color: string }[] = [
    {
      role: 'ARTISAN',
      label: 'Artisan (Ramesh)',
      labelHi: 'कारीगर (रमेश)',
      icon: <User className="w-3.5 h-3.5" />,
      color: 'bg-terracotta-600 text-white hover:bg-terracotta-700',
    },
    {
      role: 'BUYER',
      label: 'Buyer (Marketplace)',
      labelHi: 'खरीदार (मार्केट)',
      icon: <ShoppingBag className="w-3.5 h-3.5" />,
      color: 'bg-indigoCraft-600 text-white hover:bg-indigoCraft-700',
    },
    {
      role: 'ADMIN',
      label: 'Admin (Nodal Officer)',
      labelHi: 'प्रशासक (नोडल अधिकारी)',
      icon: <Landmark className="w-3.5 h-3.5" />,
      color: 'bg-emerald-700 text-white hover:bg-emerald-800',
    },
  ];

  return (
    <div className="bg-stone-900 text-stone-200 border-b border-stone-800 px-4 py-2 text-xs select-none">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
        {/* Project & Problem Statement Tag */}
        <div className="flex items-center gap-2">
          <span className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 font-semibold tracking-wide uppercase text-[10px] border border-amber-500/30">
            <Sparkles className="w-3 h-3 text-amber-400" />
            ArsAI Platform
          </span>
          <span className="hidden sm:inline text-stone-400 text-[11px]">
            {t('Role-Based Access Gateway', 'भूमिका-आधारित सुरक्षा गेटवे')}
          </span>
        </div>

        {/* Role Switcher Pills */}
        <div className="flex items-center gap-2">
          <span className="text-stone-400 text-[11px] hidden md:inline font-medium">
            {t('Simulate Role:', 'भूमिका चुनें:')}
          </span>
          <div className="flex bg-stone-800/80 p-0.5 rounded-lg border border-stone-700/60">
            {roles.map((r) => {
              const isActive = currentRole === r.role;
              return (
                <button
                  key={r.role}
                  onClick={() => switchRole(r.role)}
                  className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-medium transition-all ${
                    isActive
                      ? `${r.color} shadow-sm`
                      : 'text-stone-300 hover:text-white hover:bg-stone-700/50'
                  }`}
                  title={`Switch to ${r.label}`}
                >
                  {r.icon}
                  <span>{language === 'hi' ? r.labelHi : r.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
