class Heroi {
    constructor(nome, idade, tipo) {
      this.nome = nome;
      this.idade = idade;
      this.tipo = tipo;
    }
  
    atacar() {
      let ataque;
  
      switch (this.tipo.toLowerCase()) {
        case 'mago':
          ataque = 'usou magia';
          break;
        case 'guerreiro':
          ataque = 'usou espada';
          break;
        case 'monge':
          ataque = 'usou artes marciais';
          break;
        case 'ninja':
          ataque = 'usou shuriken';
          break;
        default:
          ataque = 'fez um ataque básico'; 
      }
  
      console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
  }
  

  const mago = new Heroi("Israel", 150, "Mago");
  const guerreiro = new Heroi("Kauã", 30, "Guerreiro");
  const monge = new Heroi("Pablo", 40, "Monge");
  const ninja = new Heroi("Eliana", 25, "Ninja");
  let i = 0;

  while (i <= 2){

    i++
    mago.atacar();     
    guerreiro.atacar();  
    monge.atacar();      
    ninja.atacar();

    console.log("Apenas colocando uma repetição")
    
  }
