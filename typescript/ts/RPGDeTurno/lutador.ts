export default class Lutador {
    protected _atk: number = 0
    protected _def: number = 0
    protected _hp: number = 0
    protected _mana: number = 0
    protected _escudo: number = 0

    
    public get hp() {
        return this._hp
    }

    public set hp(dano: number) {
        this._hp -= dano 
    }

    public get mana() {
        return this._mana
    }

    public get escudo() {
        return this._escudo
    }
    

    atacar(){
        if (this._mana <= 0){
            console.log("Você não tem mana o suficiente")
            return 0
        }

        let critic: number = 1
        if (Math.random() > 0.9){
            critic = 1.5
        }

        this._mana -= 6
        let dano = (Math.random() * this._atk * critic)
        let danoFinal = dano - this._escudo

        if (danoFinal < 0){
            this._escudo -= dano
            return 0
        }
        return dano
    }

    defender(){
        if (this._escudo <= 25){
            this._escudo += Math.floor(Math.random() * (this._def - 5 + 1)) + 5;
            return 1
        } else {
            console.log("Escudo no máximo") 
            return 0
        }  
    }

    meditar(){
        if (this._mana <= 40){
            this._mana += 18
            return 1
        } else {
            console.log("Mana no máximo")
            return 0
        }
    }
}