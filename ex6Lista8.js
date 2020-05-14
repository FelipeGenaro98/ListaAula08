function validar6(){

    if(a.value == "" || b.value == "" || c.value == ""){
        alert("informe todos os campos");
    }else{
        var formula = new Array();
        formula[0] = document.getElementById('a').value;
        formula[1] = document.getElementById('b').value;
        formula[2] = document.getElementById('c').value;
        
        var delta = (formula[1]*formula[1]) -4*formula[0]*formula[2];

        if(delta > 0){
            alert("raízes da equação: "+((-formula[1]+Math.sqrt(delta))/2*formula[0])+" e "+((-formula[1]-Math.sqrt(delta))/2*formula[0]));
        }else if(delta == 0){
            alert("raíz da equação: "+((-formula[1])/2*formula[0]));
        }else{
            alert("não existe raíz para essa equação")
        }
        
    }
    
}