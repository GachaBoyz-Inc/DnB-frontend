import { Button } from "@/components/ui/button";

interface CharacterCardProps {
  name: string;
  class: string;
  level: number;
  imageUrl: string;
  race: string;
}

export function CharacterCard({ name, class: charClass, level, imageUrl, race }: CharacterCardProps) {
  return (
    <div className="character-card group flex h-24 items-center gap-4 p-3">
      {/* Image - Left */}
      <div className="h-16 w-16 shrink-0 overflow-hidden rounded-md">
        <img
          src={imageUrl}
          alt={name}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>

      {/* Character Info - Center */}
      <div className="flex flex-1 flex-col justify-center gap-1">
        <h3 className="font-display text-base font-semibold text-foreground">{name}</h3>
        <div className="flex flex-wrap gap-x-3 gap-y-1 text-sm text-muted-foreground">
          <span>{race}</span>
          <span>•</span>
          <span>{charClass}</span>
          <span>•</span>
          <span>Nível {level}</span>
        </div>
      </div>

      {/* Button - Right */}
      <Button variant="outline" size="sm" className="shrink-0">
        Ver ficha
      </Button>
    </div>
  );
}