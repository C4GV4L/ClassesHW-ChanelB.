class Monsters {
    constructor(typeOfMonster,strength, name) {
        this._typeOfMonster = typeOfMonster,
        this._strength = strength, 
        this._name = name
} 

    get typeOfMonster(){
        return this._typeOfMonster;
    }

    get strength(){
        return this._strength; 
    }
    get name(){
        return this._name
    }

    set(newName){
        if(newName == "string") {
            this._name = name 
        }
    }

    attackMode(){
        this._strength +=4
        console.log("The monster is attacking!")
    }
}   

class EvolvedMonster extends Monsters{ 
    constructor(typeOfMonster, strength, name, speed, weapons){
        super(typeOfMonster, strength, name);
            this._speed = speed; 
            this._weapons = weapons; 
}
    get speed(){
        return this._speed
    }

    get weapons(){
        return this._weapons
    }

    changeWeapon(){ 
        if(typeof weapons == "sword"){ 
            this._weapons = "nunchucks"
        } else {
            this._weapons = "Giant Laser"
        }
        }
    }


 let monster1 = new Monsters ("Water Monster",50, "Charlie", 78, "trident")

    console.log(monster1._strength); 
    console.log(monster1._typeOfMonster); 
    monster1.attackMode(); 

    console.log(monster1); 

let monster2 = new EvolvedMonster("Forest Monster", 346, "Bob", 23, "Spiked Tree Branch"); 

    console.log(monster2._strength); 
    monster2.changeWeapon(); 
    monster2.attackMode(); 

    console.log(monster2); 