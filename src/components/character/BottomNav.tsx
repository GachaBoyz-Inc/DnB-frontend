import { User, Shield, Swords, Sparkles, Backpack, Zap } from 'lucide-react';
import { cn } from '@/lib/utils';

export type TabType = 'profile' | 'stats' | 'skills' | 'features' | 'inventory' | 'spells';

interface BottomNavProps {
  activeTab: TabType;
  onTabChange: (tab: TabType) => void;
}

const tabs = [
  { id: 'profile' as TabType, label: 'Perfil', icon: User },
  { id: 'stats' as TabType, label: 'Atributos', icon: Shield },
  { id: 'skills' as TabType, label: 'Perícias', icon: Swords },
  { id: 'features' as TabType, label: 'Habilidades', icon: Zap },
  { id: 'inventory' as TabType, label: 'Itens', icon: Backpack },
  { id: 'spells' as TabType, label: 'Magias', icon: Sparkles },
];

export function BottomNav({ activeTab, onTabChange }: BottomNavProps) {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-card border-t border-border shadow-lg z-50">
      <div className="flex justify-around items-center h-16 max-w-lg mx-auto px-2">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          
          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={cn(
                'nav-item flex-1 max-w-[72px]',
                isActive ? 'nav-item-active' : 'nav-item-inactive'
              )}
            >
              <Icon className="w-5 h-5" />
              <span className="text-xs font-medium">{tab.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
