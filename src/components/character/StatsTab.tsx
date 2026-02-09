import { Character } from '@/model/character';
import { Attributes } from '@/model/attributes';
import { Shield, Heart, Zap, Footprints, Minus, Plus } from 'lucide-react';
import { cn } from '@/lib/utils';

interface StatsTabProps {
  character: Character;
  getAttributeModifier: (attribute: Attributes) => number;
  updateHitPoints: (value: number) => void;
  updateTempHitPoints: (value: number) => void;
}

const attributeLabels: Record<Attributes, string> = {
  strength: 'FOR',
  dexterity: 'DES',
  intelligence: 'INT',
  wisdom: 'SAB',
  charisma: 'CAR',
  constitution : 'CON',
};

const attributeFullNames: Record<Attributes, string> = {
  strength: 'Força',
  dexterity: 'Destreza',
  intelligence: 'Inteligência',
  wisdom: 'Sabedoria',
  charisma: 'Carisma',
  constitution: 'Constituição',
};

export function StatsTab({
  character,
  getAttributeModifier,
  updateHitPoints,
  updateTempHitPoints,
}: StatsTabProps) {
  const formatModifier = (mod: number) => (mod >= 0 ? `+${mod}` : `${mod}`);
  const hpPercentage = (character.currentHp / character.maxHp) * 100;

  return (
    <div className="space-y-6 pb-4">
      {/* Combat Stats */}
      <div className="grid grid-cols-3 gap-3">
        <CombatStat 
          icon={Shield} 
          label="CA" 
          value={character.armorClass} 
          color="text-primary"
        />
        <CombatStat 
          icon={Zap} 
          label="Iniciativa" 
          value={formatModifier(character.initiative)} 
          color="text-gold"
        />
        <CombatStat 
          icon={Footprints} 
          label="Deslocamento" 
          value={`${character.speed}ft`} 
          color="text-emerald"
        />
      </div>

      {/* Hit Points */}
      <div className="stat-card">
        <div className="flex items-center justify-between mb-3">
          <h2 className="section-title flex items-center gap-2 mb-0">
            <Heart className="w-5 h-5 text-destructive" />
            Pontos de Vida
          </h2>
          <span className="text-lg font-bold text-foreground">
            {character.currentHp} / {character.maxHp}
          </span>
        </div>
        
        {/* HP Bar */}
        <div className="relative h-4 bg-muted rounded-full overflow-hidden mb-4">
          <div 
            className={cn(
              "absolute inset-y-0 left-0 rounded-full transition-all duration-300",
              hpPercentage > 50 ? "bg-emerald" : hpPercentage > 25 ? "bg-gold" : "bg-destructive"
            )}
            style={{ width: `${hpPercentage}%` }}
          />
        </div>

        <div className="flex items-center justify-center gap-3">
          <button 
            onClick={() => updateHitPoints(character.currentHp - 1)}
            className="w-10 h-10 rounded-full bg-destructive/10 text-destructive flex items-center justify-center hover:bg-destructive/20 transition-colors"
          >
            <Minus className="w-5 h-5" />
          </button>
          
          <div className="text-center px-4">
            <p className="text-xs text-muted-foreground">PV Atual</p>
            <p className="text-2xl font-bold text-foreground">{character.currentHp}</p>
          </div>
          
          <button 
            onClick={() => updateHitPoints(character.currentHp + 1)}
            className="w-10 h-10 rounded-full bg-emerald/10 text-emerald flex items-center justify-center hover:bg-emerald/20 transition-colors"
          >
            <Plus className="w-5 h-5" />
          </button>
        </div>

        {/* Temp HP */}
        <div className="flex items-center justify-between mt-4 pt-4 border-t border-border">
          <span className="text-sm text-muted-foreground">PV Temporários</span>
          <div className="flex items-center gap-2">
            <button 
              onClick={() => updateTempHitPoints(character.tempHp - 1)}
              className="w-6 h-6 rounded-full bg-muted flex items-center justify-center hover:bg-muted/80"
            >
              <Minus className="w-3 h-3" />
            </button>
            <span className="w-8 text-center font-bold">{character.tempHp}</span>
            <button 
              onClick={() => updateTempHitPoints(character.tempHp + 1)}
              className="w-6 h-6 rounded-full bg-muted flex items-center justify-center hover:bg-muted/80"
            >
              <Plus className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>

      {/* Attributes */}
      <div className="stat-card">
        <h2 className="section-title">Atributos</h2>
        <div className="grid grid-cols-3 gap-3">
          {(Object.keys(character.attributes) as Attributes[]).map((attr) => (
            <div key={attr} className="ability-score">
              <span className="text-xs text-muted-foreground uppercase">
                {attributeLabels[attr]}
              </span>
              <span className="text-2xl font-bold text-foreground">
                {formatModifier(getAttributeModifier(attr))}
              </span>
              <span className="text-sm text-muted-foreground">
                {character.attributes[attr]}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Saving Throws */}
      <div className="stat-card">
        <h2 className="section-title">Salvaguardas</h2>
        <div className="grid grid-cols-2 gap-2">
          {(Object.keys(character.savingThrows) as Attributes[]).map((attr) => {
            const modifier = character.savingThrows[attr];
            
            return (
              <div 
                key={attr}
                className="flex items-center justify-between py-2 px-3 rounded-lg bg-muted/50"
              >
                <span className="text-sm text-muted-foreground">
                  {attributeFullNames[attr]}
                </span>
                <span className="font-bold text-foreground">
                  {formatModifier(modifier)}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function CombatStat({ 
  icon: Icon, 
  label, 
  value, 
  color 
}: { 
  icon: React.ElementType; 
  label: string; 
  value: string | number; 
  color: string;
}) {
  return (
    <div className="stat-card flex flex-col items-center justify-center py-3">
      <Icon className={cn("w-5 h-5 mb-1", color)} />
      <span className="text-xl font-bold text-foreground">{value}</span>
      <span className="text-xs text-muted-foreground mt-1">{label}</span>
    </div>
  );
}
