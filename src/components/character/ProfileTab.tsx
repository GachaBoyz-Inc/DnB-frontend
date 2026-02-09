import { Character } from '@/model/character';
import { Scroll, Crown, Heart, BookOpen, Eye } from 'lucide-react';

interface ProfileTabProps {
  character: Character;
}

export function ProfileTab({ character }: ProfileTabProps) {
  return (
    <div className="space-y-6 pb-4">
      {/* Header Card */}
      <div className="stat-card relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/10 to-transparent rounded-bl-full" />
        
        <div className="flex items-start gap-4">
          <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center border-2 border-primary/30">
            <span className="text-3xl font-cinzel font-bold text-primary">
              {character.name.charAt(0)}
            </span>
          </div>
          
          <div className="flex-1">
            <h1 className="font-cinzel text-2xl font-bold text-foreground">
              {character.name}
            </h1>
            <p className="text-muted-foreground">
              {character.race} • {character.class}
            </p>
            <div className="flex items-center gap-2 mt-2">
              <span className="inline-flex items-center gap-1 px-2 py-1 bg-primary/10 text-primary rounded-md text-sm font-medium">
                <Crown className="w-3.5 h-3.5" />
                Nível {character.level}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Basic Info */}
      <div className="stat-card">
        <h2 className="section-title flex items-center gap-2">
          <Scroll className="w-5 h-5 text-primary" />
          Informações Básicas
        </h2>
        
        <div className="grid grid-cols-2 gap-4">
          <InfoRow label="Antecedente" value={character.background} />
          <InfoRow label="Alinhamento" value={character.alignment} />
          <InfoRow label="Jogador" value={character.playerName} />
          <InfoRow label="Bônus de Prof." value={`+${character.proficiencyBonus}`} />
        </div>
      </div>

      {/* Appearance */}
      {character.appearance && (
        <div className="stat-card">
          <h2 className="section-title flex items-center gap-2">
            <Eye className="w-5 h-5 text-primary" />
            Aparência
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            {character.appearance}
          </p>
        </div>
      )}

      {/* Personality */}
      <div className="stat-card">
        <h2 className="section-title flex items-center gap-2">
          <Heart className="w-5 h-5 text-primary" />
          Personalidade
        </h2>
        
        <div className="space-y-4">
          <PersonalityBlock label="Traços de Personalidade" value={character.personalityTraits} />
          <PersonalityBlock label="Ideais" value={character.ideals} />
          <PersonalityBlock label="Objetivos" value={character.objectives} />
          <PersonalityBlock label="Vínculos" value={character.bonds} />
          <PersonalityBlock label="Defeitos" value={character.flaws} />
        </div>
      </div>

      {/* Backstory */}
      {character.backstory && (
        <div className="stat-card">
          <h2 className="section-title flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-primary" />
            História
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            {character.backstory}
          </p>
        </div>
      )}
    </div>
  );
}

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-xs text-muted-foreground uppercase tracking-wide">{label}</p>
      <p className="font-medium text-foreground">{value}</p>
    </div>
  );
}

function PersonalityBlock({ label, value }: { label: string; value: string }) {
  return (
    <div className="border-l-2 border-primary/30 pl-3">
      <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">{label}</p>
      <p className="text-foreground">{value}</p>
    </div>
  );
}
