import { useEffect, useState } from "react";
import { Search, Filter, Plus } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { CharacterCard } from "./CharacterCard";
import { useNavigate } from "react-router-dom";

const mockCharacters = [
  {
    id: 1,
    name: "Thorin Escudo de Ferro",
    class: "Guerreiro",
    level: 8,
    race: "Anão",
    imageUrl: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=450&fit=crop",
  },
  {
    id: 2,
    name: "Elara Luz da Lua",
    class: "Maga",
    level: 6,
    race: "Elfa",
    imageUrl: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&h=450&fit=crop",
  },
];

export function CharacterList() {
  const [searchQuery, setSearchQuery] = useState("");
  const [characters, setCharacters] = useState<typeof mockCharacters>([]);
  const navigate = useNavigate();

  useEffect(() => {
    setCharacters(mockCharacters);
    // Aqui você pode adicionar a lógica para buscar os personagens do backend
    // Por enquanto, estamos usando os personagens mockados
  }, []);

  const filteredCharacters = characters.filter((char: any) =>
    char.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex-1 overflow-auto p-6 lg:p-8">
      {/* Header */}
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="font-display text-3xl font-bold tracking-wide text-foreground">
            SEUS PERSONAGENS
          </h1>
          <p className="mt-1 text-muted-foreground">
            Listagem dos personagens
          </p>
        </div>
        <Button onClick={() => navigate("/criar-personagem")} className="gap-2 cursor-pointer bg-primary-200 hover:bg-primary-500">
          <Plus className="h-4 w-4" />
          Criar Personagem
        </Button>
      </div>

      {/* Search and Filter */}
      <div className="mb-6 flex flex-col gap-3 sm:flex-row">
        <div className="relative flex-1">
          <Input
            type="text"
            placeholder="Pesquisar personagens..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input pr-10"
          />
        </div>
        <div className="flex gap-3">
          <Button variant="secondary" className="gap-2 cursor-pointer">
            <Search className="h-4 w-4" />
            Pesquisar
          </Button>
          <Button variant="outline" className="gap-2 cursor-pointer">
            <Filter className="h-4 w-4" />
            Filtrar
          </Button>
        </div>
      </div>

      {/* Character Grid */}
      <div className="grid gap-4 border rounded-md border-muted p-4">
        {filteredCharacters.map((character, index) => (
          <div
            key={character.id}
            className="animate-fade-in border-b last:border-0"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <CharacterCard
              name={character.name}
              class={character.class}
              level={character.level}
              race={character.race}
              imageUrl={character.imageUrl}
            />
          </div>
        ))}
      </div>

      {filteredCharacters.length === 0 && (
        <div className="flex flex-col items-center justify-center py-16 text-center">
          <p className="text-lg text-muted-foreground">
            Nenhum personagem encontrado
          </p>
          <p className="mt-1 text-sm text-muted-foreground">
            Tente ajustar sua pesquisa ou crie um novo personagem
          </p>
        </div>
      )}
    </div>
  );
}
