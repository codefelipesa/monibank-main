import verificacaoDoCpf from "./validaCPF.js"
import maiorDeIdade from "./validaIdade.js";

const camposDoFormulario = document.querySelectorAll("[required]")

camposDoFormulario.forEach((campo)=>{
    campo.addEventListener("blur", ()=> verificaCampoFormulario(campo)) // Deve-se colocar o ()=> ver... para não chamar a função assim que iniciar o code
})


function verificaCampoFormulario(campo) {
    if (campo.name == 'cpf' && campo.value.length >= 11){
        verificacaoDoCpf(campo)
    }

    if(campo.name == 'aniversario' && campo.value != ""){ // Para impedir que o code rode com o campo vazio deve-se usar !=""
        maiorDeIdade(campo)
    }
}