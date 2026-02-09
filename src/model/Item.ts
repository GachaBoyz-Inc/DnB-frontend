import type { ItemTypes } from "./enums/ItemTypes"

class Item {
    private id: number
    private name: string
    private description: string
    private type: ItemTypes

    constructor(id: number, name: string, description: string, type: ItemTypes) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.type = type;
    }

    getItemId(): number {
        return this.id;
    }

    getItemName(): string {
        return this.name;
    }

    getItemDescription(): string {
        return this.description;
    }

    getItemType(): ItemTypes {
        return this.type;
    }

}

export default Item