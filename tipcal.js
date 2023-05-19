const tip = document.getElementById("range");
const tipp = document.querySelector(".ran");
const tipamt = document.querySelector(".tipamt");
const totalbill = document.querySelector(".bill");
let input = document.getElementById("num");
let tipc = "";
function calculate() {
    
    let amount = parseInt(input.value);
    if(!isNaN(amount)){
        let tamt = parseInt(document.getElementById("range").value);
        if (amount == 0) {
            alert("Amount Required");
        } else {
            tipp.textContent = `${tamt}%`;
            totalbill.textContent = tipCal(amount, tamt);
            tipamt.textContent = `${tipc}`;
        }
    
        function tipCal(amt, tip) {
            tipc = (amt * tip) / 100;
    
            return tipc + amt;
        }
    }else{
        totalbill.textContent = 0;
            tipamt.textContent = 0;
    }
   
}
tip.addEventListener("change", calculate);
input.addEventListener("keyup",calculate)