export default function maiorDeIdade (campo) {
    const dataDeNascimento  = new Date(campo.value) // new Date para transforma o campo.value numa data que o pc entenda
    validaIdade(dataDeNascimento)

    console.log(validaIdade(dataDeNascimento))
}


function validaIdade (data){
    const dataAtual = new Date()
    const dataMais18 = new Date(data.getUTCFullYear() + 18, data.getUTCMonth(), data.getUTCDate())

    return dataAtual >= dataMais18
}
