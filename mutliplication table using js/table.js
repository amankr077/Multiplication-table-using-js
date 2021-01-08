function multiply(a,b){
    for(var i=1; i<11; i++){
      document.getElementById(b).innerHTML+="<tr><td>"+a+"X"+i+"</td><td>=</td>"+"<td>"+a*i+"</td> </tr>"; 
    }
}
function getInputValue(){
    var x=document.getElementById("myinput").value;
    multiply(x,"multitable")
}