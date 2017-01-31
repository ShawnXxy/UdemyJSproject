
var calculate =function(){
    var amount=document.getElementById("amount").value;
    var percentage;
        if(document.getElementById("percentage").value<1){
            percentage=document.getElementById("percentage").value;
        }else{
            percentage=Number(document.getElementById("percentage").value)/100;
        }
  
    var tip= amount * percentage;
    var total= Number(amount) + tip*1;
    
    document.getElementById("tip").innerHTML=tip;
    document.getElementById("total").innerHTML=total;
}