function convertirPesosABitcoin() {
    var pesos = document.getElementById("pesos").value;
    var bitcoin = pesos / 6500000; // tipo de cambio aproximado
    document.getElementById("bitcoin").value = bitcoin.toFixed(8);
    return false;
  }
