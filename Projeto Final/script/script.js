window.onload = function(){
    setInterval(exibeHoras, 1000);
}

function exibeHoras() {
    var agora = new Date();
    var horas = agora.getHours().toString().padStart(2,0);
    var minutos = agora.getMinutes().toString().padStart(2, '0');
    var segundos = agora.getSeconds().toString().padStart(2, '0');

    var horarioFormatado = horas + ":" + minutos + ":" + segundos;

    document.getElementById("horas").innerHTML = horarioFormatado;

}

var estados = ["AC", "AL", "AP", "AM", "BA", "CE", "DF", "ES", "GO", "MA", "MS", "MT", "MG", "PA", "PB", "PR", "PE", "PI", "RJ","RN", "RS", "RO", "RR", "SC", "TO"];


var menuStatus = document.getElementById("UF");
function exibeEstados() {
    for (var i = 0; i < estados.length; i++) {
        var sigla = estados[i];
        
        // Verifica se a opção já existe
        if (!menuStatus.querySelector("option[value='" + sigla + "']")) {
            var option = document.createElement("option");
            option.text = sigla;
            option.value = sigla;
            UF.add(option);
        }
    }
}

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
        alert("Digite apenas Letras");
        nomeInput.value = nome.replace(/[^a-zA-Z\s]/g, ''); // Remove caracteres não permitidos
    }
}

// expressão validar cpf
function validarCPF() {
    var form = document.getElementById("formulario");
    var CPF = form.cpf;

    // Remove caracteres não numéricos do CPF
    var cpfNumerico = CPF.value.replace(/[^\d]/g, '');

    var re_cpf = /^(\d{3}\.?\d{3}\.?\d{3}-?\d{2}|\d{11})$/;
}

function formatarCPF(campo) {
    // Remove caracteres não numéricos do valor atual do campo
   var cpfAtual = campo.value.replace(/[^\d]/g, '');

// Verifica se o CPF já está formatado
   if (cpfAtual.length <= 11) {
    campo.value = cpfAtual.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
    }
}

//verifica formato do email
function validaEmail() {
    var form = document.getElementById("formulario");
    var email = form.email.value;

    var re_email = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;

   if (!re_email.test(email)) {
         alert("Padrão de e-mail inválido");
   } else {
         
     }
}

function cadastrarDados(){
    var dados = [
        document.querySelector("#Nome"),
        document.querySelector("#email"),
        document.querySelector("#cpf"),
        document.querySelector("#data"),
        document.querySelector("#UF"),
      ];
       
      document.querySelector('#btn-cadastrar')
        var tr = document.createElement('tr');
       
        dados.forEach(function(posicao) {
          var td = document.createElement('td');
          td.textContent = posicao.value;
          tr.appendChild(td);
        });
       
        var tabela = document.querySelector("#table-Client tbody");
        tabela.appendChild(tr);

          //Limpando dados
          dados.forEach(function(posicao) {
            posicao.value = '';
          });

};

//criar função para formatar data futuramente para o padrão dd-MM-yyyy