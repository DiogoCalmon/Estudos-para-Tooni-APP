import Lutador from "./lutador"
import MoveSet from "./moveSet"

export class Cavalheiro extends Lutador implements MoveSet{
    abilityOn: boolean
    tipo: string = "Cavalheiro"

    constructor() {
        super()
        this._atk = 7
        this._def = 12
        this._hp = 65
        this._mana = 20
        this.abilityOn = false
    }

    usarHabilidade(){
        this._hp -= this.hp * 0.8
        this._atk += 20
    }
}

export class Mago extends Lutador implements MoveSet{
    abilityOn: boolean
    tipo: string = "Mago"

    constructor() {
        super()
        this._atk = 9
        this._def = 7
        this._hp = 50
        this._mana = 40
        this.abilityOn = false
    }

    usarHabilidade(){
        this._hp -= this.hp * 0.8
        this._atk += 20
    }
}

export class Gladiador extends Lutador implements MoveSet{
    abilityOn: boolean
    tipo: string = "Gladiador"

    constructor() {
        super()
        this._atk = 12
        this._def = 9
        this._hp = 50
        this._mana = 20
        this.abilityOn = false
    }

    usarHabilidade(){
        this._hp -= this.hp * 0.8
        this._atk += 20
    }
}