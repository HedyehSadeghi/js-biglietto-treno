let userAge = parseInt(prompt("quanti anni hai?"));
let userKm= parseFloat(prompt("Quanti km per il viaggio che vuoi fare?"));

if (isNaN(userAge) || isNaN(userKm)) {
    alert("Mi dispiace non hai inserito entrambi dei numeri!")
} else {
    let ticketPriceStandard= userKm * 0.21;

    document.getElementById("age").innerHTML=userAge;
    document.getElementById("km").innerHTML=userKm;

    if (userAge<18) {
        let ticketPriceMinor=  ticketPriceStandard-((ticketPriceStandard*20)/100);
        ticketPriceMinor=parseFloat(ticketPriceMinor.toFixed(2));
        document.getElementById("finalPrice").innerHTML=ticketPriceMinor;


    } else if (userAge>65){

        let ticketPriceElder= ticketPriceStandard-((ticketPriceStandard*40)/100);
        ticketPriceElder=parseFloat(ticketPriceElder.toFixed(2));
        document.getElementById("finalPrice").innerHTML=ticketPriceElder;
    }
    else{
        ticketPriceStandard=parseFloat(ticketPriceStandard.toFixed(2));
        document.getElementById("finalPrice").innerHTML=ticketPriceStandard;

    }

}






