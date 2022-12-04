let bancoEmpresas = JSON.parse(localStorage.getItem("empresas"));

if (!bancoEmpresas) {

    bancoEmpresas = [
        {
            "nomeEmpresa": "Alladin",
            "tipoEmpresa": "Supermercados",
            "cidadeEmpresa": "BH",
            "endEmpresa": "R. Gonçalves Dias, 774 - Funcionários",
            "telEmpresa": "3359-6159",
            "instaEmpresa": "metropoles",
            "wppEmpresa": "3132721725"
        },
        {
            "nomeEmpresa": "Fellipeto",
            "tipoEmpresa": "Emporio",
            "cidadeEmpresa": "CONTAGEM",
            "endEmpresa": "RUA Possuã, 548 - Novo Eldorado",
            "telEmpresa": " 2564-2492",
            "instaEmpresa": "felipettoemporio",
            "wppEmpresa": "31983820023"
        },
        {
            "nomeEmpresa": "BH",
            "tipoEmpresa": "Supermercado",
            "cidadeEmpresa": "BH",
            "endEmpresa": " Av. Paraná, 470 - Centro",
            "telEmpresa": "3272-1725",
            "instaEmpresa": "supermercados_bh",
            "wppEmpresa": "3132721725"
        },
        {
            "nomeEmpresa": "vovo nita",
            "tipoEmpresa": "padaria",
            "cidadeEmpresa": "BH",
            "endEmpresa": "Rua Sergipe, 321 - Funcionários",
            "telEmpresa": "999-999-999",
            "instaEmpresa": "999-999-999",
            "wppEmpresa": "999-999-999"
        },
        {
            "nomeEmpresa": "BH",
            "tipoEmpresa": "Supermercados",
            "cidadeEmpresa": "CONTAGEM",
            "endEmpresa": "Av. João César de Oliveira, 1275 - Eldorado",
            "telEmpresa": "3356-4090",
            "instaEmpresa": "supermercados_bh",
            "wppEmpresa": "3133564090"
        }
        ,
        {
            "nomeEmpresa": "Pão Nosso",
            "tipoEmpresa": "Padaria",
            "cidadeEmpresa": "CONTAGEM",
            "endEmpresa": "Av. Água Branca, 977 - Jardim Bandeirantes",
            "telEmpresa": "2557-1100",
            "instaEmpresa": "paonosso",
            "wppEmpresa": "999-999-999"
        },
        {
            "nomeEmpresa": "ABC",
            "tipoEmpresa": "Sacolão",
            "cidadeEmpresa": "CONTAGEM",
            "endEmpresa": "R. Possua, 275 - Novo Eldorado",
            "telEmpresa": "97344-2353",
            "instaEmpresa": "ABC",
            "wppEmpresa": "973442353"
        },
        {
            "nomeEmpresa": "SuperNosso",
            "tipoEmpresa": "Supermercados",
            "cidadeEmpresa": "BH",
            "endEmpresa": " R. Gonçalves Dias, 2001 - Lourdes",
            "telEmpresa": "2222-4556",
            "instaEmpresa": "supernosso",
            "wppEmpresa": "318484-4892"
        }
        ,
        {
            "nomeEmpresa": "Dupão",
            "tipoEmpresa": "Padaria",
            "cidadeEmpresa": "CONTAGEM",
            "endEmpresa": "R. Dr. Cassiano, 25 - Centro",
            "telEmpresa": "3911-0704",
            "instaEmpresa": "padaria_dupao",
            "wppEmpresa": "999999999"
        }

    ]
}

function filtro() {
    var filtro = document.getElementById("textoFiltro").value;
    exibirEmpresas(filtro.toLowerCase())
}
function exibirEmpresas(filtroBusca) {

    var strCard = "";

    for (let index = 0; index < bancoEmpresas.length; index++) {
        const empresa = bancoEmpresas[index];
        if (empresa.nomeEmpresa.toLowerCase().startsWith(filtroBusca)) {
            strCard += ` <div class="card"  style="background-color: #fa8072; display: inline-block;"  >
                            <img src="images/${index}.jpg "width="100" class="card-img-top" alt="...">
                            <div class="card-body">
                            <h5 class="card-title">${empresa.nomeEmpresa}</h5>
                            <h6 class="card-subtitle">${empresa.tipoEmpresa}</h6>
                            <p class="card-text">${empresa.cidadeEmpresa}</p>
                            <p class="card-text">${empresa.endEmpresa}</p>
                            <p class="card-text">Telefone: ${empresa.telEmpresa}</p>
                            <a href="https://www.instagram.com/${empresa.instaEmpresa}"target="_blank" class="btn btn-primary">Instagram </a>
                            <a href="https://api.whatsapp.com/send?phone=55${empresa.wppEmpresa}&text=Ola,%20descobri%20voces%20pelo%20CibusAPP."target=”_blank” class="btn btn-success" onclick="(wpp())">Whatsapp</a>
                            </div>
                            </div>`

        }
    }
    document.querySelector('#tela').innerHTML = strCard;
}
function wpp() {
    let number = document.getElementById("empresa.telEmpresa").value;
    let url = "https://wa.me/";
    let end_url = `${url}${number}?text=$ola`;
    document.getElementById('end_url').innerText = end_url;
}

onload = () => {
    exibirEmpresas('');
}
