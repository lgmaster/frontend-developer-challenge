let cpfMask = (function () {
  function addMask(element) {
    VMasker(element).maskPattern("999.999.999-99");
  }

  return {
    applyMask: addMask
  }
})()