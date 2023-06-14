function resaltar() {
  var texto = document.getElementById("texto");
  var traerhtml = texto.innerHTML;
  var masde8 = traerhtml.split(" ");
  for (let i = 0; i < masde8.length; i++) {
      var p = masde8[i];
      if (p.length > 8) {
          masde8[i] = "<span style='background-color: yellow'>" + p + "</span>";
      }
  }
  var variablesemifinal = masde8.join(" ");
  texto.innerHTML = variablesemifinal;
}