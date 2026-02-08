import type Character from "../model/Character";
import AbstractApiService from "./AbstractApiService";

class CharacterService extends AbstractApiService<Character> {
  constructor() {
    super("/character");
  }
}

export default new CharacterService();