function validar2(){

    var logins = [['joao', '123456'],['paulo', 'a1b2c3'],['maria', '676767']];

    var found = false;
    var login = new Array();
    var nome = prompt("digite o nome: ");
    var senha = prompt("digite a senha: ");

    for(var i = 0; i < 3; i++){
        if(nome == logins[i][0] && senha == logins[i][1]){
            found = true;
        }
    }

    if(found == false){
        alert("Usuário e senha inválidos");
    }else{
        alert("Usuário e senha validado. Bem vindo a aplicação");
    }
        
}