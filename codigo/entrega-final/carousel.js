
var margin = 0;
var index = 0;

function slide (btn, qtdProd) {

    // alert('testando');

    let lista = document.getElementById('list-items');
    
    var listaStyle = lista.style;
    var transform = 400;

    if (btn.name == 'next' && index < (qtdProd - 1)) {
        margin = margin - transform;
        index++;
    } else if ( index > 0 ) {
        margin = margin + transform;
        index--;
    }

    listaStyle.transform = "translate3d(" + margin + "px, 0px, 0px)";


}