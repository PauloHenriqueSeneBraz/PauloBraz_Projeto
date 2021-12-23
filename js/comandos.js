function carHome() {
    window.location.href = "index.html"
}

function carPes() {
    window.location.href = "pessoal.html"
}

function carForm() {
    window.location.href = "form.html"
}

function validarform() {
    var nome = form.nome.value;
    var email = form.email.value;
    var mensagem = form.mensagem.value;

    if (nome == "") {
        alert("Digite seu nome corretamente");
        form.nome.focus();
        return false;
    }

    if (email == "" || email.indexOf('@') == -1 || email.indexOf('.') == -1) {
        alert("Email obrigatorio!");
        form.email.focus();
        return false;
    }

    if (mensagem == "" || mensagem < 18) {
        alert("Mensagem obrigatoria!");
        form.mensagem.focus();
        return false;
    }

    alert("Mensagem enviada!");

}