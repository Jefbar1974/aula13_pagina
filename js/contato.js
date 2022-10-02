

function validarEEnviarFormulario() {
    const campos = [
        { id: "#nome", valor: document.querySelector("#nome").value },
        { id: "#email", valor: document.querySelector("#email").value },
        { id: "#mensagem", valor: document.querySelector("#mensagem").value }
    ]
    
    const formInvalido = verificarSeFormularioEhInvalido(campos)

    if (!formInvalido) {
        chamarAPI()
    } else {
        marcarFormularioComoInvalido()
    }
}

function verificarSeFormularioEhInvalido(campos) {
    let formularioInvalido = false

    campos.forEach(campo => {
        if (verificarSeCampoEhInvalido(campo))
            formularioInvalido = true
    });

    return formularioInvalido
}

function verificarSeCampoEhInvalido(campo) {
    const ehInvalido = campo.valor == ""

    if (ehInvalido)
        document.querySelector(campo.id).style.border = "dashed red 2px"
    else {
        document.querySelector(campo.id).style.border = "solid white 1px"
    }

    return ehInvalido
}

function chamarAPI() {
    console.log("ENVIANDO ....")
}

function marcarFormularioComoInvalido(){
    document.querySelector("#resultado-form").innerHTML = "Formulário inválido"
    document.querySelector("#resultado-form").style.color = "red"
}