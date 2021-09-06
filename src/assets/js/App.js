(function() {
  // load products on page load
  productsModule.addProducts();

  // load more products if click on button
  document.querySelector('.product__load_more').addEventListener('click', function() {
    productsModule.addProducts();
  })

  // apply cpf mask on input
  cpfMask.applyMask(document.getElementById('cpf'))

  // validation for newsletter form  
  let formNewsletter = document.querySelector(".newsletter__section form");

  formNewsletter.addEventListener('submit', function (e) {
      e.preventDefault();

      let errors = validate(formNewsletter, validateForm.configNewsletter);

      Errors.formatErrors(errors)
  });

  // validation for share form
  let formShare = document.querySelector(".share__section form");

  formShare.addEventListener('submit', function (e) {
    e.preventDefault();

    let errors = validate(formShare, validateForm.configShare);

    Errors.formatErrors(errors)
});
})()