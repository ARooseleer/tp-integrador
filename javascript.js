function convertirPesosABitcoin() {
    var pesos = document.getElementById("pesos").value;
    var bitcoin = pesos / 6500000; // tipo de cambio aproximado
    document.getElementById("bitcoin").value = bitcoin.toFixed(8);
    return false;
  }

  const form = document.querySelector('form');
  const submitButton = document.getElementById('btnUno');
  
  submitButton.onclick = function() {
    if (form.checkValidity()) {
      alert('¡Gracias por suscribirte!');
    } else {
      alert('Por favor, completa todos los campos obligatorios.');
    }
  };
  