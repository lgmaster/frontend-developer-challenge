const productsModule = (function () {

  let products = [];
  let nextPage = 'https://frontend-intern-challenge-api.iurykrieger.vercel.app/products?page=1';

  function loadProducts() {
    fetch(nextPage)
    .then(response => response.json())
    .then(data => {

      products = data.products
      nextPage = data.nextPage

      if (!/^https?:\/\//i.test(nextPage)) {
        nextPage = 'https://' + nextPage;
      }

    })
    .then(() => renderProduct())
  }

  function renderProduct() {
    products.map(product => {
      let productTemplate = `
        <div class="product__container">
          <div class="product__image">
            <img src="${product.image}" alt="${product.name}">
          </div>
          <div>
            <p class="product__name">${product.name}</p>
            <p class="product__description">${product.description}</p>
            <p class="product__old_price">De: ${numberFormat.format(product.oldPrice)}</p>
            <p class="product__new_price">Por: ${numberFormat.format(product.price)}</p>
            <p class="product__installments">ou ${product.installments.count}x de ${numberFormat.format(product.installments.value)}</p>
            <button type="button" class="product__buy btn__primary">Comprar</button>
          </div>
        </div>
      `

      let productContentBox = document.querySelector('.products__content');

      productContentBox.insertAdjacentHTML('beforeend', productTemplate);
    })
  }

  function getNextProducts() {
    addProducts()
  }
  
  return {
    addProducts: function() {
      loadProducts();
    }
  }

})();