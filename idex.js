class Heroi {
    // Construtor da classe Heroi
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo.toLowerCase();
    }

    // Método para realizar o ataque de acordo com o tipo do herói
    atacar() {
        const ataques = {
            "mago": "usou magia",
            "guerreiro": "usou espada",
            "monge": "usou artes marciais",
            "ninja": "usou shuriken"
        };
        
        // Obtém o ataque correspondente ao tipo do herói, ou uma mensagem padrão
        const ataque = ataques[this.tipo] || "atacou de forma desconhecida";
        
        // Exibe a mensagem do ataque
        console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
}

// Criando instâncias de heróis com diferentes tipos
const heroi1 = new Heroi("Aragorn", 35, "guerreiro");
const heroi2 = new Heroi("Merlin", 80, "mago");
const heroi3 = new Heroi("Bruce", 40, "monge");
const heroi4 = new Heroi("Hanzo", 30, "ninja");

// Chamando o método atacar para cada herói
heroi1.atacar();
heroi2.atacar();
heroi3.atacar();
heroi4.atacar();
