class Character {
    private id: number 
    private name: string
    private backstory: string
    private appearance: string
    private ideals: string
    private objectives: string
    private bonds: string
    private flaws: string
    private personalityTraits: string
    private alignment: string
    private raceId: number
    private classId: number
    private attributesId: number
    private skillsId: number
    private userId: number
    private backgroundId: number
    private playerName: string
    private level: number
    private proficiencyBonus: number
    private armorClass: number
    private initiative: number
    private speed: number
    private maxHp: number
    private currentHp: number
    private tempHp: number

    constructor(id: number, name: string, backstory: string, appearance: string, ideals: string, objectives: string, bonds: string, flaws: string, personalityTraits: string, alignment:string, raceId: number, classId: number, backgroundId: number, attributesId: number, skillsId: number, userId: number, playerName: string, level: number, proficiencyBonus: number, armorClass: number, initiative: number, speed: number, maxHp: number, currentHp: number, tempHp: number){
        this.id = id
        this.name = name
        this.backstory = backstory
        this.appearance = appearance
        this.ideals = ideals
        this.objectives = objectives
        this.bonds = bonds
        this.flaws = flaws
        this.personalityTraits = personalityTraits
        this.alignment = alignment
        this.raceId = raceId
        this.classId = classId
        this.attributesId = attributesId
        this.skillsId = skillsId
        this.userId = userId
        this.backgroundId = backgroundId
        this.playerName = playerName
        this.level = level 
        this.proficiencyBonus = proficiencyBonus
        this.armorClass = armorClass
        this.initiative = initiative
        this.speed = speed 
        this.maxHp = maxHp
        this.currentHp = currentHp
        this.tempHp = tempHp
    }

    getCharacterId() {
        return this.id
    };

    getCharacterName() {
        return this.name
    };
    getCharacterBackstory() {
        return this.backstory
    };
    getCharacterAppearance() {
        return this.appearance
    };
    getCharacterIdeals() {
        return this.ideals
    };
    getCharacterObjectives() {
        return this.objectives
    };
    getCharacterBonds() {
        return this.bonds
    };
    getCharacterFlaws() {
        return this.flaws
    };
    getCharacterpersonalityTraits() {
        return this.personalityTraits
    };

    getCharacterAlignment() {
        return this.alignment
    };

    getCharacterraceId() {
        return this.raceId
    };
    getCharacterClassId() {
        return this.classId
    };
    getCharaterbackgroundId() {
        return this.backgroundId
    };
    getCharacterAttributesId() {
        return this.attributesId
    };
    getCharacterSkillsId() {
        return this.skillsId
    };
    getCharacterUserId() {
        return this.userId
    };
    getCharacterplayerName() {
        return this.playerName
    };
    getCharacterLevel() {
        return this.level
    };
    getCharacterProficiencyBonus() {
        return this.proficiencyBonus
    };
    getCharacterArmorClass() {
        return this.armorClass
    };
    getCharacterInitiative() {
        return this.initiative
    };
    getCharacterSpeed() {
        return this.speed
    };
    getCharacterMaxHp() {
        return this.maxHp
    };
    getCharacterCurrentHp() {
        return this.currentHp
    };
    getCharacterTempHp() {
        return this.tempHp
    };
}

export default Character