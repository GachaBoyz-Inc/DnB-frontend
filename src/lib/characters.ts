export interface Character {
  id: string;
  name: string;
  race: string;
  class: string;
  level: number;
  avatar?: string;
}

export const RACES = ["Humano", "Elfo", "Anão", "Halfling", "Gnomo", "Meio-Elfo", "Meio-Orc", "Tiefling", "Draconato"];
export const CLASSES = ["Guerreiro", "Mago", "Ladino", "Clérigo", "Paladino", "Ranger", "Bárbaro", "Bardo", "Druida", "Feiticeiro", "Bruxo", "Monge"];
export const BACKGROUNDS = ["Acólito", "Charlatão", "Criminoso", "Artista", "Herói do Povo", "Eremita", "Nobre", "Forasteiro", "Sábio", "Marinheiro", "Soldado", "Órfão"];

export const MOCK_CHARACTERS: Character[] = [
  { id: "1", name: "Thorin Escudo de Ferro", race: "Anão", class: "Guerreiro", level: 8 },
  { id: "2", name: "Elara Luz da Lua", race: "Elfa", class: "Maga", level: 6 },
  { id: "3", name: "Kael Sombravento", race: "Meio-Elfo", class: "Ladino", level: 5 },
];
