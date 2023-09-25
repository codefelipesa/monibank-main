const erroCpf = document.querySelector("[data-erro-cpf]")

export default function verificacaoDoCpf(campo) {
    const cpf = campo.value.replace(/\.|-/g, "") // Retira os caracteres especiais do CPF
    if(verificaNumerosRepetidos(cpf)||validaPrimeiroDigitoCpf(cpf)||validaSegundoDigitoCpf(cpf)){
        campo.setCustomValidity('Esse cpf não é válido')
    
}   else{
    campo.setCustomValidity('')
}
}

// export default function verificaNumerosRepetidos (cpf) {
//     const verificacao =  cpf.split("").every((numero) => numero === cpf.split("")[0])
//     console.log(verificacao)
// }


function verificaNumerosRepetidos(cpf) {
    const numeroRepetidos = [
        "00000000000",
        "11111111111",
        "22222222222",
        "33333333333",
        "44444444444",
        "55555555555",
        "66666666666",
        "77777777777",
        "88888888888",
        "99999999999"]

    return numeroRepetidos.includes(cpf)

 
}

function validaPrimeiroDigitoCpf(cpf) {

    let soma = 0
    let multiplicador = 10

    for(let tamanho = 0; tamanho < 9; tamanho++){
        soma+= cpf[tamanho] * multiplicador;
        multiplicador--
    }

    soma = (soma * 10) % 11

    if(soma == 10 || soma == 11){
        soma= 0
    }
    return soma != cpf[9]

}

function validaSegundoDigitoCpf(cpf) {

    let soma = 0
    let multiplicador = 11

    for(let tamanho = 0; tamanho < 10; tamanho++){
        soma+= cpf[tamanho] * multiplicador;
        multiplicador--
    }

    soma = (soma * 10) % 11

    if(soma == 10 || soma == 11){
        soma= 0
    }
    return soma != cpf[10]

}