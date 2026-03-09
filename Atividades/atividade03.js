class PagamentoCartao {
  pagar(valor) {
    console.log("Pagando R$" + valor + " com cartão");
  }
}

class PagamentoPix {
  pagar(valor) {
    console.log("Pagando R$" + valor + " com PIX");
  }
}

class PagamentoDinheiro {
  pagar(valor) {
    console.log("Pagando R$" + valor + " em dinheiro");
  }
}

class Pagamento {
  constructor(estrategia) {
    this.estrategia = estrategia;
  }

  realizarPagamento(valor) {
    this.estrategia.pagar(valor);
  }
}

const pagamento1 = new Pagamento(new PagamentoPix());
pagamento1.realizarPagamento(100);

const pagamento2 = new Pagamento(new PagamentoCartao());
pagamento2.realizarPagamento(200);