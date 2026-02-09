class Background {
    private id: number
    private name: string
    private description: string
    private skills: string
    private equipment: string
    
    constructor (id: number, name: string, description: string, skills: string, equipment: string) {
        this.id = id
        this.name = name
        this.description = description
        this.skills = skills
        this.equipment = equipment 
    }

    getBackgroundId() {
        return this.id
    };
    getBackgroundName() {
        return this.name
    };
    getBackgroundDescription() {
        return this.description
    };
    getBackgroundSkills() {
        return this.skills
    };
    getBackgroundEquipment() {
        return this.equipment
    };
};
export default Background