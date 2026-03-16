class Command {
  executar() {}
}

class Luz {
  ligar() {
    console.log("A luz foi ligada");
  }

  desligar() {
    console.log("A luz foi desligada");
  }
}


class LigarLuzCommand extends Command {
  constructor(luz) {
    super();
    this.luz = luz;
  }

  executar() {
    this.luz.ligar();
  }
}
class DesligarLuzCommand extends Command {
  constructor(luz) {
    super();
    this.luz = luz;
  }

  executar() {
    this.luz.desligar();
  }
}

class ControleRemoto {
  constructor(command) {
    this.command = command;
  }

  pressionarBotao() {
    this.command.executar();
  }
}

const luz = new Luz();

const ligar = new LigarLuzCommand(luz);
const desligar = new DesligarLuzCommand(luz);

const controle = new ControleRemoto(ligar);
controle.pressionarBotao(); 

controle.command = desligar;
controle.pressionarBotao(); 