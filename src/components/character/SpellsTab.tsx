import { Character } from '@/model/character';
import { Spell } from '@/model/Spell';
import { 
  Clock, 
  Target, 
  Timer,
  BookOpen,
  Plus
} from 'lucide-react';
import { Button } from '@/components/ui/button';

interface SpellsTabProps {
  character: Character;
  onAddSpell: () => void;
}

export function SpellsTab({ character, onAddSpell }: SpellsTabProps) {
  if (character.spells.length === 0) {
    return (
      <div className="space-y-4 pb-4">
        <div className="stat-card text-center py-8">
          <BookOpen className="w-12 h-12 text-muted-foreground mx-auto mb-3" />
          <p className="text-muted-foreground mb-4">Nenhuma magia conhecida</p>
          <Button onClick={onAddSpell} className="gap-2">
            <Plus className="w-4 h-4" />
            Adicionar Magia
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4 pb-4">
      <div className="flex justify-end">
        <Button onClick={onAddSpell} size="sm" className="gap-2">
          <Plus className="w-4 h-4" />
          Adicionar
        </Button>
      </div>

      <div className="space-y-2">
        {character.spells.map((spell) => (
          <SpellCard key={spell.id} spell={spell} />
        ))}
      </div>
    </div>
  );
}

function SpellCard({ spell }: { spell: Spell }) {
  return (
    <div className="item-card">
      <div className="flex-1">
        <div className="flex items-center gap-2 mb-1">
          <span className="font-medium text-foreground">{spell.name}</span>
        </div>
        
        <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
          <span className="text-primary">{spell.school}</span>
          <span className="flex items-center gap-1">
            <Clock className="w-3 h-3" />
            {spell.castingTime}
          </span>
          <span className="flex items-center gap-1">
            <Target className="w-3 h-3" />
            {spell.range}
          </span>
          <span className="flex items-center gap-1">
            <Timer className="w-3 h-3" />
            {spell.duration}
          </span>
          {spell.componentTypes.length > 0 && (
            <span>{spell.componentTypes.join(', ')}</span>
          )}
        </div>
        
        <p className="text-xs text-muted-foreground mt-2 line-clamp-2">
          {spell.description}
        </p>
      </div>
    </div>
  );
}
