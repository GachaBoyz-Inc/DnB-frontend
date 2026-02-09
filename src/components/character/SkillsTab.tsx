import { Character } from '@/model/character';
import { Skills } from '@/model/Skills';

interface SkillsTabProps {
  character: Character;
}

const skillLabels: Record<Skills, string> = {
  acrobatics: 'Acrobacia',
  animalHandling: 'Adestrar Animais',
  arcana: 'Arcanismo',
  athletics: 'Atletismo',
  deception: 'Enganação',
  history: 'História',
  insight: 'Intuição',
  intimidation: 'Intimidação',
  investigation: 'Investigação',
  medicine: 'Medicina',
  nature: 'Natureza',
  perception: 'Percepção',
  performance: 'Atuação',
  persuasion: 'Persuasão',
  religion: 'Religião',
  sleightOfHand: 'Prestidigitação',
  stealth: 'Furtividade',
  survival: 'Sobrevivência',
};

export function SkillsTab({ character }: SkillsTabProps) {
  const formatModifier = (mod: number) => (mod >= 0 ? `+${mod}` : `${mod}`);
  
  const sortedSkills = (Object.keys(character.skills) as Skills[]).sort((a, b) => 
    skillLabels[a].localeCompare(skillLabels[b], 'pt-BR')
  );

  return (
    <div className="space-y-4 pb-4">
      <div className="stat-card">
        <h2 className="section-title mb-4">Perícias</h2>
        
        <div className="space-y-1">
          {sortedSkills.map((skill) => {
            const modifier = character.skills[skill];
            
            return (
              <div 
                key={skill}
                className="skill-row"
              >
                <span className="text-sm text-foreground">
                  {skillLabels[skill]}
                </span>
                
                <span className="text-lg font-bold tabular-nums text-foreground">
                  {formatModifier(modifier)}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Passive Perception */}
      <div className="stat-card">
        <div className="flex items-center justify-between">
          <span className="text-muted-foreground">Percepção Passiva</span>
          <span className="text-2xl font-bold text-foreground">
            {10 + character.skills.perception}
          </span>
        </div>
      </div>
    </div>
  );
}
