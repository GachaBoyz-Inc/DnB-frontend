class Class {
    private id: number
    private name: string
    private description: string
    private hpDice: string
    private proficiencies: string
    private skills: string
    private equipment: string

    constructor(id: number, name: string, description: string, hpDice: string, proficiencies: string, skills: string, equipment: string) {
        this.id = id
        this.name = name
        this.description = description
        this.hpDice = hpDice
        this.proficiencies = proficiencies
        this.skills = skills
        this.equipment = equipment
    };
    getClassId() {
        return this.id
    };
    getClassName() {
        return this.name
    };
    getClassDescription() {
        return this.description
    };
    getClasshpDice(){
        return this.hpDice
    };
    getClassProficiencies() {
        return this.proficiencies
    };
    getClassSkills() {
        return this.skills
    };
    getClassEquipment() {
        return this.equipment
    };
};
export default Class