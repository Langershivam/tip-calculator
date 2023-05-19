const tip=document.getElementById("range");
const tipp=document.querySelector(".ran");
const tipamt=document.querySelector(".tipamt");
const totalbill=document.querySelector(".bill");
let tipc="";
tip.addEventListener("change",function(e){
    let input=document.getElementById("num").value;
    let amount = parseInt(input);
    let tamt=parseInt(e.target.value);
    if(input.length == 0){
        alert("Amount Required");
    }else{
        tipp.textContent=`${tamt}%`;
        totalbill.textContent=tipCal(amount,tamt);
        tipamt.textContent=`${tipc}`;
    }
    
    function tipCal(amt,tip){
         tipc=(amt*tip)/100;

        return tipc+amt;
    }
});