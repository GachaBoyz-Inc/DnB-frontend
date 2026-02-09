class Attributes {
    private id: number
    private strength: number
    private dexterity: number
    private intelligence: number
    private wisdom: number
    private charisma: number
    private characterId: number

    constructor (id: number, strength: number, dexterity: number, intelligence: number, wisdom: number, charisma: number, characterId: number){
        this.id = id
        this.strength = strength
        this.dexterity = dexterity
        this.intelligence = intelligence
        this.wisdom = wisdom
        this.charisma = charisma
        this.characterId = characterId
    };
    getAttributesId() {
        return this.id
    };
    getAttributesStrength() {
        return this.strength
    };
    getAttributesDexterity() {
        return this.dexterity
    };
    getAttributesIntelligence() {
        return this.intelligence
    };
    getAttributesWisdom() {
        return this.wisdom
    };
    getAttributesCharisma() {
        return this.charisma
    };
    getAttributesCharacterId() {
        return this.characterId
    };
}
export default Attributes