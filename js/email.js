function enviar(){
    let nome = document.getElementById("nomeid").value;
    let email = document.getElementById("emailid").value;
    let fone = document.getElementById("foneid").value;
    let comentario = document.getElementById("comentarioid").value;
    if(nome == "" || nome == undefined ||
    email == "" || email == undefined ||
    fone == "" || fone == undefined ||
    comentario == "" || comentario == undefined
    ){
        alert("Preencha todos os campos.");
        return;
    }
   
    alert("Olá " + nome + ", agradecemos seu contato.");
    location.href = 'index.html';
}
