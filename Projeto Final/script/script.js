var estados = ["AC", "AL", "AP", "AM", "BA", "CE", "DF", "ES", "GO", "MA", "MS", "MT", "MG", "PA", "PB", "PR", "PE", "PI", "RJ","RN", "RS", "RO", "RR", "SC", "TO"];

var estadoMenu = document.getElementById("UF");
function exibeEstados(){
    for (var i = 0; i < estados.length; i++) {
        var sigla = estados[i];
    
        var option = document.createElement("option");
        option.text = sigla;
        option.value = sigla;
        UF.add(option);
    }
}
