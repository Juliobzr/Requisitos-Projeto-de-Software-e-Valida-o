class Personagem {
  atacar() {
    return "Ataque básico";
  }
}

class PersonagemDecorator {
  constructor(personagem) {
    this.personagem = personagem;
  }

  atacar() {
    return this.personagem.atacar();
  }
}

class PoderFogo extends PersonagemDecorator {
  atacar() {
    return this.personagem.atacar() + " + dano de fogo";
  }
}

class PoderGelo extends PersonagemDecorator {
  atacar() {
    return this.personagem.atacar() + " + dano de gelo";
  }
}


let jogador = new Personagem();
console.log(jogador.atacar());

jogador = new PoderFogo(jogador);
console.log(jogador.atacar());

jogador = new PoderGelo(jogador);
console.log(jogador.atacar());
