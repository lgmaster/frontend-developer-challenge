const numberFormat = (function() {

  function formatToCurrency(valueToFormat) {
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(valueToFormat);
  }

  return {
    format: formatToCurrency
  }
})()