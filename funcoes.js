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
    document.getElementById("textarea-ofuscado").value = inputText
}

function copyClipboard(){
    var copyText = document.getElementById("textarea-ofuscado");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand("copy");

    var tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copied: " + copyText.value;
}

function outFunc() {
    var tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copy to clipboard";
  }