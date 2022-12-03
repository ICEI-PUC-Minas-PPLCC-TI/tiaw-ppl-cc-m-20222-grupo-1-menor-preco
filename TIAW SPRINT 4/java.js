const cibus = {
  lista: [
    {
      nomeDoProduto: 'VITAMINA DE MORANGO 500 mL',
      preco: 'R$12.00',
      img1: 'logoverde.jpg',
      img2: 'copo-vitamina-morango.png',
      descricaoProduto: 'Vitamina Natural, 100% Integral E Sem Adição De Açúcar',
      ingredientes: 'morango e leite',
      estrelinha1: 'bx bxs-star',
      estrelinha2: 'bx bxs-star',
      estrelinha3: 'bx bxs-star',
      estrelinha4: 'bx bxs-star',
      estrelinha5: 'bx bxs-star',
      precoAntigo: 'R$14.00',
      preco: 'R$12.00',
      descricaoSupermercado: 'O Supermercado Verdemar, ou simplesmente Verdemar, é uma rede de supermercados da cidade de Belo Horizonte.'

    }
  ]
}



function exibeFeed() {
  let feedProduto = '';
  let itemlista = cibus.lista[0];
  feedProduto += `<div class="capa">
    <div class="content">
      <div class="expand">
        <div class="logo">
          <img src="${itemlista.img1}" alt="">
        </div>
      </div>
      <div class="icone">
        <span class='bx bx-cart-alt'></span>
      </div>
    </div>
    <div class="other">
      <div class="image">
        <img id="img-black" src="${itemlista.img2}" alt="">
      </div>
      <div class="header"></div>
      <p>
      <H1>${itemlista.nomeDoProduto}</H1>
      ${itemlista.descricaoProduto}
      <p>ingredientes: ${itemlista.ingredientes}</p>
      </p>
      <div class="rating">
        <span class="${itemlista.estrelinha1}"></span>
        <span class="${itemlista.estrelinha2}"></span>
        <span class="${itemlista.estrelinha3}"></span>
        <span class="${itemlista.estrelinha4}"></span>
        <span class="${itemlista.estrelinha5}"></span>

      </div>
      <div class="tab">
        <div class="preço_tab">
          <span>${itemlista.preco}</span>
          <div class="end-price"><strike>${itemlista.precoAntigo}</strike></div>
        </div>
      </div>
      <div class="button">
        <a href="#">Adicionar ao carrinho</a>
      </div>
      <section class="main">
        <div class="full-boxer">
          <div class="comment-box">
            <div class="box-top">
              <div class="Profile">
                <div class="profile-image">
                  <img src="${itemlista.img1}">
                </div>
                <div class="Name">
                  <strong>Verde Mar</strong>
                  <span>@VERDEMAR</span>
                </div>
              </div>
            </div>
            <div class="comment">
              <p>${itemlista.descricaoSupermercado}
                
              </p>
            </div>
      </section>
    </div>
  </div>`;
  document.getElementById('feed').innerHTML = feedProduto;
}