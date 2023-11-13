class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
        this.ataque = "";
    }

    atacar() {
        if (this.tipo === "mago") {
            this.ataque = "magia";
        } else if (this.tipo === "guerreiro") {
            this.ataque = "espada";
        } else if (this.tipo === "monge") {
            this.ataque = "artes marciais";
        } else if (this.tipo === "ninja") {
            this.ataque = "shuriken";
        } else {
            this.ataque = "ataque indefinido";
        }
    }
}

let meuHeroi = new Heroi("Jaquiro", "58", "ninja");
console.log(meuHeroi);
meuHeroi.atacar();
console.log(`O ${meuHeroi.tipo} atacou usando ${meuHeroi.ataque}`);