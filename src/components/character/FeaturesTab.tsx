import { Character, Ability, AbilityTypes } from '@/model/character';
import { 
  Zap, 
  Plus
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface FeaturesTabProps {
  character: Character;
  onAddAbility: () => void;
}

const typeLabels: Record<AbilityTypes, string> = {
  racial: 'Racial',
  class: 'Classe',
  feat: 'Talento',
  other: 'Outro',
};

const typeColors: Record<AbilityTypes, string> = {
  racial: 'text-emerald',
  class: 'text-primary',
  feat: 'text-gold',
  other: 'text-muted-foreground',
};

export function FeaturesTab({ character, onAddAbility }: FeaturesTabProps) {
  if (character.abilities.length === 0) {
    return (
      <div className="space-y-4 pb-4">
        <div className="stat-card text-center py-8">
          <Zap className="w-12 h-12 text-muted-foreground mx-auto mb-3" />
          <p className="text-muted-foreground mb-4">Nenhuma habilidade</p>
          <Button onClick={onAddAbility} className="gap-2">
            <Plus className="w-4 h-4" />
            Adicionar Habilidade
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4 pb-4">
      <div className="flex justify-end">
        <Button onClick={onAddAbility} size="sm" className="gap-2">
          <Plus className="w-4 h-4" />
          Adicionar
        </Button>
      </div>

      <div className="space-y-2">
        {character.abilities.map((ability) => (
          <AbilityCard key={ability.id} ability={ability} />
        ))}
      </div>
    </div>
  );
}

function AbilityCard({ ability }: { ability: Ability }) {
  return (
    <div className="item-card">
      <div className="flex-1">
        <div className="flex items-center gap-2 mb-1">
          <span className="font-medium text-foreground">{ability.name}</span>
          <span className={cn("text-xs", typeColors[ability.type])}>
            {typeLabels[ability.type]}
          </span>
        </div>
        <p className="text-xs text-muted-foreground">
          {ability.description}
        </p>
      </div>
    </div>
  );
}
