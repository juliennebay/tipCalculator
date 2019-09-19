//custom function
function calculateTip(){

    //store the data of inputs
    const billAmount = document.getElementById("bill").value
    const serviceQuality = document.getElementById("serviceQuality").value
    let numPeople = document.getElementById("people").value 

    //make sure the form is filled out
    if (billAmount === "" || serviceQuality === 0){
        window.alert("Make sure to enter some values to calculate your tip!");
        return;
    }

    //check to see how many people are splitting the bill
    if (numPeople === "" || numPeople <= 1){
        numPeople = 1;
    
        document.getElementById("each").style.display = "none";
    } else {
        document.getElementById("each").style.display = "block";
    }

    //math - calculate tip
    let total = (billAmount * serviceQuality) / numPeople
    total = Math.round(total * 100) / 100;
    total = total.toFixed(2)

    //display the tip
    document.getElementById("total-tip").style.display = "block";
    document.getElementById("tip").innerHTML = total;

}

function loadScript(){

    //hide the tip amount on load
    document.getElementById("total-tip").style.display = "none";
    document.getElementById("each").style.display = "none";

    //clicking the button calls the custom function
    document.getElementById("calculate").addEventListener("click", calculateTip)
}
document.addEventListener("DOMContentLoaded", loadScript)