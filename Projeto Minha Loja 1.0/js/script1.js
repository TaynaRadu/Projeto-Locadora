class Produto {
  constructor() {
    this.id = 1;
    this.arrayProdutos = [];
  }

  salvar() {
    let produto = this.lerDados();

    if (this.validarCampo(produto)) {
      this.adicionar(produto);
    }

    console.log(this.arrayProdutos);
  }

  adicionar(produto) {
    this.arrayProdutos.push(produto);
    this.id++;
  }

  lerDados() {
    let produto = {};

    produto.id = this.id;
    produto.nomeProduto = document.getElementById("produto").value;
    produto.preco = document.getElementById("preco").value;

    return produto;
  }

  validarCampo(produto) {
    let msg = "";
    if (produto.nomeProduto == "") {
      // += indica que ira receber ela mesma mais a mensagem informada
      msg += "Informe o nome do produto \n";
    }
    if (produto.preco == "") {
      msg += "Informe o preço do produto \n";
    }
    if (msg != "") {
      alert(msg);
      return false;
    }
    return true;
  }

  cancelar() {
    alert("Produto excluido!");
  }
}

var produto = new Produto();
