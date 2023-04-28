    // Declare global var
    const kmPrice = 0.21;   // Price/km 0,21€
    let discount;
    



    // Add event listener to button "See ticket"
const sendForm = document.getElementById("seeTicket");
sendForm.addEventListener("click",
    function(){

        // Added class on id "ticket" to show it
        const ticket = document.getElementById("ticket");
        ticket.classList.add("active");

        // Initialize userAge var with input
        const userAge = document.getElementById("userName").value;

        // Initialize distance var with input
        const distance = document.getElementById("distance").value;

        // Initialize discount var with input
        const offers = document.getElementById("offers").value;


        if(offers == "<18 years old"){   // if under 18 years old 20% discount
            discount = 0.2;
        }else if(offers == "Over 65 years old"){    // else if over 65 years old 40% discount
            discount = 0.4;
        }else{  // else no discount
            discount = 0;
        }
        console.log(discount);

        const amount = (distance * kmPrice);
        const sumToPay = amount - (amount * discount);

        document.getElementById("passengerName").innerHTML = userAge;
    }
    )










//Declare and calculate ticket price with possible discount

// Inner to html details and sum to pay

// document.getElementById("ticket_price").innerHTML = sumToPay.toFixed(2);