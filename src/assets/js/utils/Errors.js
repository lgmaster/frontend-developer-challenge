let Errors = (function () {
  function showErrors(errors) {
    const errorsList = errors;

    [...document.querySelectorAll('.error__message')].map(errorMessageElement => errorMessageElement.remove());

    for(error in errors) {
      messageError = errors[error][0].replace(`${error.charAt(0).toUpperCase() + error.slice(1)} `, "")
      if(error.toLowerCase() == 'gender') {
        document.querySelector(`.newsletter__section .radio__group`).insertAdjacentHTML('afterend', `<span class="error__message">${messageError}</span>`)
      } else {
        document.querySelector(`[name=${error.toLowerCase()}]`).insertAdjacentHTML('afterend', `<span class="error__message">${messageError}</span>`)
      }
    }
  }

  return {
    formatErrors: showErrors
  }
})()