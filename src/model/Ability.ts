import type {AbilityTypes} from "./enums/AbilityTypes"

class Ability {
    private id: number 
    private name: string 
    private description: string 
    private type: AbilityTypes

    constructor(id: number, name: string, description: string, type: AbilityTypes) {
        this.id = id;
        
        this.name = name;
        this.description = description;
        this.type = type;
    }

    getId() {
        return this.id
    }

    getName() {
        return this.name
    }

    getDescription() {
        return this.description
    }

    getType() {
        return this.type
    }
} 

export default Ability
