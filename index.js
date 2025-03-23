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
  let tipoLutador = 0;


  while(tipoLutador <= 3){

    if(tipoLutador === 0){

    mago.atacar();
    tipoLutador++
  }
    else if(tipoLutador === 1){

    guerreiro.atacar();  
    tipoLutador++

  }
    else if(tipoLutador === 2){

    monge.atacar();  
    tipoLutador++

  }
    else if(tipoLutador === 3){

    ninja.atacar();
    tipoLutador++
  }
}

  
    
   
