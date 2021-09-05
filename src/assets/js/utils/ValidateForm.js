let validateForm = (function() {
  validate.validators.presence.options = {message: "Campo obrigatório"};
  validate.validators.presence.message = "message"

  let constraintsNewsletter = {
    name: {
      presence: true
    },
    email: {
      presence: true,
      email: {
        message: "Não é um e-mail válido"
      }
    },
    cpf: {
      presence: true,
      format: {
        pattern: /[0-9]{3}\.?[0-9]{3}\.?[0-9]{3}\-?[0-9]{2}?/,
        message: "Não é um CPF válido"
      }
    },
    gender: {
      presence: true
    }
  }

  let constraintsShare = {
    "namefriend": {
      presence: true
    },
    "emailfriend": {
      presence: true,
      email: {
        message: "Não é um e-mail válido"
      }
    }
  }

  return {
    configNewsletter: constraintsNewsletter,
    configShare: constraintsShare
  }
})()