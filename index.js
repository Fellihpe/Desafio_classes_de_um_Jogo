class Heroi {
    constructor(nome, idade, tipo) {
      this.nome = nome;
      this.idade = idade;
      this.tipo = tipo;
    }
  
    atacar() {
      let ataque;
      switch (this.tipo) {
        case "mago":
          ataque = "usando magia";
          break;
        case "guerreiro":
          ataque = "usando espada";
          break;
        case "monge":
          ataque = "usando artes marciais";
          break;
        case "ninja":
          ataque = "usando shuriken";
          break;
        default:
          ataque = "atacou";
      }
  
      console.log(`o ${this.tipo} atacou ${ataque}`);
    }
  }
  
  const heroi1 = new Heroi("Felix", 100, "mago");
  const heroi2 = new Heroi("Madre", 100, "guerreiro");
  const heroi3 = new Heroi("Barce", 100, "ninja");
  const heroi4 = new Heroi("venex", 100, "monge");

  heroi1.atacar(); 
  heroi2.atacar();
  heroi3.atacar();
  heroi4.atacar();
