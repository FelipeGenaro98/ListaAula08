function validar1(){

    var nomes = new Array();
    for(var i = 0; i < 4; i++){
        nomes[i] = prompt("digite o "+(i+1)+"º nome: ");
    }
    nomes.sort();
    for(var i = 0; i < 4; i++){
        console.log(nomes[i]);
    }
    alert("nomes ordenados no console do navegador");
    
}