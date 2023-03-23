function tabuada(){
    var num = parseInt(document.getElementById("num").value);
    var resultado = document.getElementById('resultado');
    var tabuada='';
  
    for(var contador=1; contador<=10 ; contador++)
     tabuada += num+" x "+contador+" = "+
                 num*contador+"<br />";
    
    resultado.innerHTML = tabuada;
  }