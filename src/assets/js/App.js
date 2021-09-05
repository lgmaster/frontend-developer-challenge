// On Page Load
(function() {
  productsModule.addProducts();

  document.querySelector('.product__load_more').addEventListener('click', function() {
    productsModule.addProducts();
  })
})()