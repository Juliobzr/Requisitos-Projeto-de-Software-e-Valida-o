class Placar {
  constructor() {
    if (Placar.instancia) {
      return Placar.instancia;
    }

    this.pontos = 0;
    Placar.instancia = this;
  }

  adicionarPontos(valor) {
    this.pontos += valor;
  }

  verPontos() {
    return this.pontos;
  }
}

const placar1 = new Placar();
placar1.adicionarPontos(10);

const placar2 = new Placar();
placar2.adicionarPontos(5);

console.log(placar1.verPontos());
console.log(placar2.verPontos()); 
console.log(placar1 === placar2); 