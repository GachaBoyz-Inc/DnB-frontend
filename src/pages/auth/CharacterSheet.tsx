import { useState } from 'react';
import { BottomNav, TabType } from '@/components/character/BottomNav';
import { ProfileTab } from '@/components/character/ProfileTab';
import { StatsTab } from '@/components/character/StatsTab';
import { SkillsTab } from '@/components/character/SkillsTab';
import { FeaturesTab } from '@/components/character/FeaturesTab';
import { InventoryTab } from '@/components/character/InventoryTab';
import { SpellsTab } from '@/components/character/SpellsTab';
import { useCharacter } from '@/hooks/useCharacter';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const [activeTab, setActiveTab] = useState<TabType>('profile');
  const { toast } = useToast();
  
  const {
    character,
    getAttributeModifier,
    updateHitPoints,
    updateTempHitPoints,
  } = useCharacter();

  const handleAddAbility = () => {
    toast({
      title: "Em breve",
      description: "Funcionalidade de adicionar habilidade será implementada.",
    });
  };

  const handleAddItem = () => {
    toast({
      title: "Em breve",
      description: "Funcionalidade de adicionar item será implementada.",
    });
  };

  const handleAddSpell = () => {
    toast({
      title: "Em breve",
      description: "Funcionalidade de adicionar magia será implementada.",
    });
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'profile':
        return <ProfileTab character={character} />;
      case 'stats':
        return (
          <StatsTab
            character={character}
            getAttributeModifier={getAttributeModifier}
            updateHitPoints={updateHitPoints}
            updateTempHitPoints={updateTempHitPoints}
          />
        );
      case 'skills':
        return <SkillsTab character={character} />;
      case 'features':
        return (
          <FeaturesTab
            character={character}
            onAddAbility={handleAddAbility}
          />
        );
      case 'inventory':
        return (
          <InventoryTab 
            character={character} 
            onAddItem={handleAddItem}
          />
        );
      case 'spells':
        return (
          <SpellsTab
            character={character}
            onAddSpell={handleAddSpell}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-card/80 backdrop-blur-sm border-b border-border">
        <div className="max-w-lg mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="font-cinzel text-lg font-bold text-foreground">
                {character.name}
              </h1>
              <p className="text-xs text-muted-foreground">
                {character.class} • Nível {character.level}
              </p>
            </div>
            <div className="flex items-center gap-2">
              <div className="text-right">
                <p className="text-xs text-muted-foreground">HP</p>
                <p className="font-bold text-foreground">
                  {character.currentHp}/{character.maxHp}
                </p>
              </div>
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center border border-primary/30">
                <span className="font-cinzel font-bold text-primary text-sm">
                  {character.armorClass}
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <ScrollArea className="h-[calc(100vh-64px-64px)]">
        <main className="max-w-lg mx-auto px-4 py-4">
          {renderTabContent()}
        </main>
      </ScrollArea>

      {/* Bottom Navigation */}
      <BottomNav activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  );
};

export default Index;
