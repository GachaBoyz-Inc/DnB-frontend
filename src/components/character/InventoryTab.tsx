import { Character } from '@/model/character';
import { Item } from '@/model/item';
import { ItemTypes } from '@/model/enums/ItemTypes';
import { 
  Sword, 
  Shield, 
  FlaskConical, 
  Wrench, 
  Package, 
  Gem,
  Plus
} from 'lucide-react';
import { Button } from '@/components/ui/button';

interface InventoryTabProps {
  character: Character;
  onAddItem: () => void;
}

const typeIcons: Record<ItemTypes, React.ElementType> = {
  weapon: Sword,
  armor: Shield,
  potion: FlaskConical,
  tool: Wrench,
  misc: Package,
  treasure: Gem,
};

export function InventoryTab({ character, onAddItem }: InventoryTabProps) {
  if (character.items.length === 0) {
    return (
      <div className="space-y-4 pb-4">
        <div className="stat-card text-center py-8">
          <Package className="w-12 h-12 text-muted-foreground mx-auto mb-3" />
          <p className="text-muted-foreground mb-4">Nenhum item</p>
          <Button onClick={onAddItem} className="gap-2">
            <Plus className="w-4 h-4" />
            Adicionar Item
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4 pb-4">
      <div className="flex justify-end">
        <Button onClick={onAddItem} size="sm" className="gap-2">
          <Plus className="w-4 h-4" />
          Adicionar
        </Button>
      </div>

      <div className="space-y-2">
        {character.items.map((item) => (
          <ItemCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

function ItemCard({ item }: { item: Item }) {
  const Icon = typeIcons[item.type];
  
  return (
    <div className="item-card">
      <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-muted">
        <Icon className="w-5 h-5 text-muted-foreground" />
      </div>
      
      <div className="flex-1 min-w-0">
        <span className="font-medium text-foreground">{item.name}</span>
        {item.description && (
          <p className="text-xs text-muted-foreground mt-1 line-clamp-2">
            {item.description}
          </p>
        )}
      </div>
    </div>
  );
}
