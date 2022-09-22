
export class Animais{
    nome: string;
    idade: number;
    som: string;
    move: string;

    constructor(nome: string, idade: number, som: string, move: string){
        this.nome = nome;
        this.idade = idade;
        this.som = som;
        this.move = move;

    }
    info(){
        console.log(`Nome: ${this.nome}\nIdade: ${this.idade}\nSom: ${this.som}\nMovimento: ${this.move}`)
    }
}