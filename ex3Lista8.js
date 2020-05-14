function validar3(){

    var n = new Array();
    var media, max = -1, min = 9999, total = 0;
    for(var i = 0; i < 10; i++){
        n[i] = prompt("digite o "+(i+1)+"º número: ");
        total+=parseInt(n[i]);
    }
    for(var j = 0; j < 10; j++){
        if(max < n[j]){
            max = n[j];
        }
        if(min > n[j]){
            min = n[j];
        }
    }
    alert("maior: " + max + "\nmenor: "+ min + "\nmedia: "+(total/10)+"\nvalores: "+n.sort(function(a, b){return b-a}));
}