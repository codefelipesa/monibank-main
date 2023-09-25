import verificacaoDoCpf from "./validaCPF.js"
import maiorDeIdade from "./validaIdade.js";

const camposDoFormulario = document.querySelectorAll("[required]")

camposDoFormulario.forEach((campo)=>{
    campo.addEventListener("blur", ()=> verificaCampoFormulario(campo)) // Deve-se colocar o ()=> ver... para não chamar a função assim que iniciar o code
})

const tiposDeErros = [
    'valueMissing',
    'typeMismatch',
    'patternMismatch',
    'tooShort',
    'customError'

]

const mensagens = {
    nome: {
        valueMissing: "O campo de nome não pode estar vazio.",
        patternMismatch: "Por favor, preencha um nome válido.",
        tooShort: "Por favor, preencha um nome válido."
    },
    email: {
        valueMissing: "O campo de e-mail não pode estar vazio.",
        typeMismatch: "Por favor, preencha um email válido.",
        tooShort: "Por favor, preencha um e-mail válido."
    },
    rg: {
        valueMissing: "O campo de RG não pode estar vazio.",
        patternMismatch: "Por favor, preencha um RG válido.",
        tooShort: "O campo de RG não tem caractéres suficientes."
    },
    cpf: {
        valueMissing: 'O campo de CPF não pode estar vazio.',
        patternMismatch: "Por favor, preencha um CPF válido.",
        customError: "O CPF digitado não existe.",
        tooShort: "O campo de CPF não tem caractéres suficientes."
    },
    aniversario: {
        valueMissing: 'O campo de data de nascimento não pode estar vazio.',
        customError: 'Você deve ser maior que 18 anos para se cadastrar.'
    },
    termos: {
        valueMissing: 'Você deve aceitar nossos termos antes de continuar.',
    }
}

function verificaCampoFormulario(campo) {
    let mensagem = ""
    campo.setCustomValidity('')
    if (campo.name == 'cpf' && campo.value.length >= 11){
        verificacaoDoCpf(campo)
    }

    if(campo.name == 'aniversario' && campo.value != ""){ // Para impedir que o code rode com o campo vazio deve-se usar !=""
        maiorDeIdade(campo)
    }

    tiposDeErros.forEach(erro =>{ 
        if(campo.validity[erro]){
            mensagem = mensagens[campo.name][erro]
            console.log(mensagem)
        }

    })

    const mensagemErro = campo.parentNode.querySelector('.mensagem-erro')
    const validadorDeInput = campo.checkValidity()

    if(!validadorDeInput){
        mensagemErro.textContent = mensagem
    }else{
        mensagemErro.textContent = ""
    }

    console.log(campo.validity.valid)
}