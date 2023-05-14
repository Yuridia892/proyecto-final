function convertir() {
    const cantidad = document.getElementById("cantidad").value;
    const de = document.getElementById("de").value;
    const a = document.getElementById("a").value;
  
    const url = `https://api.exchangerate-api.com/v4/latest/${de}`;
  
    fetch(url)
      .then(response => response.json())
      .then(data => {
        const tasa = data.rates[a];
        const resultado = cantidad * tasa;
        document.getElementById("resultado").innerHTML = `${cantidad} ${de} = ${resultado.toFixed(2)} ${a}`;
      });
  }
  