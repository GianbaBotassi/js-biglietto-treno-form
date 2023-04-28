// Declare global var
const kmPrice = 0.21;   // Price/km 0,21€
let discount;

// Add event listener to button "See ticket"
const seeTicket = document.getElementById("seeTicket");
seeTicket.addEventListener("click",
    function(){

        // Added class on id "ticket" to show it
        const ticket = document.getElementById("ticket");
        ticket.classList.add("active");

        // Initialize userAge var with input
        const userAge = document.getElementById("userName").value;

        // Initialize distance var with input
        const distance = document.getElementById("distance").value;

        // Initialize discount var with input
        const offers = document.getElementById("inputAge").value;


        if(offers == "<18 years old"){   // if under 18 years old 20% discount
            discount = 0.2;
        }else if(offers == "Over 65 years old"){    // else if over 65 years old 40% discount
            discount = 0.4;
        }else{  // else no discount
            discount = 0;
        }

        //Declare and calculate ticket price with possible discount
        const amount = (distance * kmPrice);
        const sumToPay = amount - (amount * discount);

        // Inner to html details and sum to pay
        document.getElementById("passengerName").innerHTML = userAge;
        document.getElementById("offers").innerHTML = offers;
        document.getElementById("price").innerHTML = sumToPay.toFixed(2);
    }
    )


    // Initialize button reset to remove ticket
    const reset = document.getElementById("reset");
    reset.addEventListener("click",
        function(){
            ticket.classList.remove("active"); 
        }
    )










