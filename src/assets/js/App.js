// On Page Load
(function() {
  productsModule.addProducts();

  document.querySelector('.product__load_more').addEventListener('click', function() {
    productsModule.addProducts();
  })
  
  let formNewsletter = document.querySelector(".newsletter__section form");

  formNewsletter.addEventListener('submit', function (e) {
      e.preventDefault();

      let errors = validate(formNewsletter, validateForm.configNewsletter);

      Errors.formatErrors(errors)
  });

  let formShare = document.querySelector(".share__section form");

  formShare.addEventListener('submit', function (e) {
    e.preventDefault();

    let errors = validate(formShare, validateForm.configShare);

    Errors.formatErrors(errors)
});
})()