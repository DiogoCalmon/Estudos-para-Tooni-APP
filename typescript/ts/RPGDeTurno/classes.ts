class Cavalheiro extends Lutador implements MoveSet{
    constructor(tipo: string) {
        super(tipo)
        if (tipo == "Cavalheiro") {
            this.atk = 5
            this.hp = 65
            this.mana = 20
        } else if (tipo == "Mago") {
            this.atk = 5
            this.hp = 40
            this.mana = 30
        } else {
            this.atk = 8
            this.hp = 40
            this.mana = 20
        }
    }

    atacar(){
        const damage = Math.random()
    }
    defender(){
        console.log("atacar")
    }
    meditar(){
        console.log("atacar")
    }
    usarHabilidade(){
        console.log("atacar")
    }
}