function mostrarSeleccionado() {
    var usuario = document.getElementById("peso1").value;
    var mi_peso = parseInt(usuario);
    var g_tierra = 9.8;
    var g_marte = 3.7;
    var g_jupiter = 24.8;
    var peso_final;
    var nombre = "";

    if (document.getElementById('radio1').checked) {
        peso_final = mi_peso * g_marte / g_tierra;
        nombre = ">MARTE<";
       
    } if (document.getElementById('radio2').checked) {
        peso_final = mi_peso * g_jupiter / g_tierra;
        nombre = ">JUPITER<";
        
    }
    alert("TU PESO EN " +nombre+ " ES: " +peso_final.toFixed(2)+ " KILOS");
}



function soloNumericos(event) {
    if(event.charCode >= 48 && event.charCode <= 57){
      return true;
     }
     return false;        
}











