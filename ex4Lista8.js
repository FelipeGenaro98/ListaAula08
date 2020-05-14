function validar4(){

    var multa = [10, 15];
    var valor = prompt("digite o valor em R$: ");
    var dias = prompt("digite o atraso em dias: ");

    if(dias > 15){;
        alert("multa: "+multa[1]+"%\nvalor final: R$ "+(+valor + (valor * multa[1]/100)));
    }else if(dias < 15 && dias > 3){
        alert("multa: "+multa[0]+"%\nvalor final: R$ "+(+valor + (valor * multa[1]/100)));
    }else{
        alert("nenhuma multa aplicada. valor final: R$ "+valor);
    }
    
}