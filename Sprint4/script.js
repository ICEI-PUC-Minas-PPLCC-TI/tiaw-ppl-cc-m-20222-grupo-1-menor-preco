function leDados() {
    let strDados = localStorage.getItem('db');
    let objDados = {};


    if (strDados) {
        objDados = JSON.parse(strDados);
    }else{
        objDados = {produtos: [ 
          {Nomedoproduto:"morango",
            ConjuntoAlimentar:"fruta", 
            Valor:"5",
            Empresa:"verdemar",
            Contato:"(31)983868343",
            Email:"verde@mar.com",
            CEP:"30150170",
            Número:"121"}]}
    }

    return objDados;
}

function salvaDados(dados) {
    localStorage.setItem('db', JSON.stringify(dados))
}


function incluirProduto(){

  let objDados = leDados();

  let strNomedoproduto = document.getElementById('Nomedoproduto').value;
  let strConjuntoAlimentar = document.getElementById('ConjuntoAlimentar').value;
  let strValor = document.getElementById('Valor').value;
  let strEmpresa = document.getElementById('Empresa').value;
    let strContato = document.getElementById('Contato').value;
    let strEmail = document.getElementById('email').value;
    let strCEP = document.getElementById('CEP').value;
    let strNúmero = document.getElementById('Numero').value;
    let novoProduto = {
        Nomedoproduto: strNomedoproduto,
        ConjuntoAlimentar: strConjuntoAlimentar,
        Valor: strValor,
        Empresa: strEmpresa,
        Contato: strContato,
        Email: strEmail,
        CEP: strCEP,
        Número: strNúmero
    };

  objDados.produtos.push(novoProduto)
  salvaDados(objDados);
  console.log(objDados)

}

document.getElementById('iudi').addEventListener('click', incluirProduto);