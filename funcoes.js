var inputText

function ofusca(){
    inputText = document.getElementById("textarea-original").value    
    const response = inputText.replaceAll(/i/gi,"innis")
    .replaceAll(/a/gi,"ais")
    .replaceAll(/e/gi,"enter")
    .replaceAll(/o/gi,"omber")
    .replaceAll(/u/gi,"ufter")

    document.getElementById("textarea-ofuscado").value = response
    
}

function desofuscar(){
    inputText = document.getElementById("textarea-original").value
    const response = inputText
    .replaceAll(/innis/gi,"i")
    .replaceAll(/ais/gi,"a")
    .replaceAll(/enter/gi,"e")
    .replaceAll(/omber/gi,"o")
    .replaceAll(/ufter/gi,"u")

    document.getElementById("textarea-ofuscado").value = response
}

function copyClipboard(){
    var copyText = document.getElementById("textarea-ofuscado");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand("copy");

    var tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copiado: " + copyText.value;
}

function outFunc() {
    var tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copiar";
  }