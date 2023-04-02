function Here(){
    alert('Você já está aqui!')
}
function Simulador(){
    alert('Em construção!')
}
function Login(){
    var email = email_input.value
    var senha = senha_input.value
    var texto = "Campos inválidos"
    if (email == "aluno@sptech.school" && senha == "123") {
        texto = "Campos válidos"
    }
    alert(texto)
}
function Cadastro(){
    var nome = nome_input.value
    var senha = senha_input.value
    var email = email_input.value
    var confsenha = conf_senha_input.value
    var texto = "Cadastrado com sucesso"
    if (nome == "" || email == "" || senha == "" || confsenha == "") {
        texto = "Campos inválidos"
    }
    alert(texto)
}