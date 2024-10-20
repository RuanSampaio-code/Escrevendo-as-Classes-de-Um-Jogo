class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque;

        //ataque com base no tipo do herói
        switch (this.tipo.toLowerCase()) {
            case 'mago':
                ataque = 'magia';
                break;
            case 'guerreiro':
                ataque = 'espada';
                break;
            case 'monge':
                ataque = 'artes marciais';
                break;
            case 'ninja':
                ataque = 'shuriken';
                break;
            default:
                ataque = 'ataque desconhecido';
        }

        console.log(`O ${this.tipo} atacou usando ${ataque}.`);
    }
}

// Exemplo de uso da classe Heroi
const heroi1 = new Heroi('Gandalf', 300, 'mago');
heroi1.atacar(); // O mago atacou usando magia.

const heroi2 = new Heroi('Conan', 30, 'guerreiro');
heroi2.atacar(); // O guerreiro atacou usando espada.

const heroi3 = new Heroi('Master Oogway', 1000, 'monge');
heroi3.atacar(); // O monge atacou usando artes marciais.

const heroi4 = new Heroi('Naruto', 17, 'ninja');
heroi4.atacar(); // O ninja atacou usando shuriken.
