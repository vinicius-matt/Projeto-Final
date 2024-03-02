var estados = ["AC", "AL", "AP", "AM", "BA", "CE", "DF", "ES", "GO", "MA", "MS", "MT", "MG", "PA", "PB", "PR", "PE", "PI", "RJ","RN", "RS", "RO", "RR", "SC", "TO"];

var estadoMenu = document.getElementById("UF");
function exibeEstados() {
    for (var i = 0; i < estados.length; i++) {
        var sigla = estados[i];
        
        // Verifica se a opção já existe
        if (!estadoMenu.querySelector("option[value='" + sigla + "']")) {
            var option = document.createElement("option");
            option.text = sigla;
            option.value = sigla;
            UF.add(option);
        }
    }
}
//---------------------------------

function validarNome() {
    var nomeInput = document.getElementById("Nome");
    var nome = nomeInput.value.trim(); // Remove espaços em branco do início e do fim

    // Verifica se o campo não está vazio
    if (nome.length === 0) {
    
        return;
    }

    // Expressão regular para verificar se o nome contém apenas letras
    var re = /^[a-zA-Z\s]+$/;

    if (re.test(nome)) {
    
    } else {
        alert("Digite apenas letras no campo de nome");
        nomeInput.value = nome.replace(/[^a-zA-Z\s]/g, ''); // Remove caracteres não permitidos
    }
}

// expressão validar cpf
function validarCPF() {
    var form = document.getElementById("formulario");
    var CPF = form.cpf;

    // Remove caracteres não numéricos do CPF antes de validar
    var cpfNumerico = CPF.value.replace(/[^\d]/g, '');

    var re_cpf = /^(\d{3}\.?\d{3}\.?\d{3}-?\d{2}|\d{11})$/;

    if (re_cpf.test(cpfNumerico)) {
        alert("CPF válido");
    } else {
        alert("Digite um CPF válido");
    }
}

function formatarCPF(campo) {
    // Remove caracteres não numéricos do valor atual do campo
   var cpfAtual = campo.value.replace(/[^\d]/g, '');

//     // Verifica se o CPF já está formatado
   if (cpfAtual.length <= 11) {
    campo.value = cpfAtual.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
    }
}