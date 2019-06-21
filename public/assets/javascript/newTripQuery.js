

let currentTrip;


function Trip() {
    this.roundTrip = true;
}

AirportInput("flying-to-input");
AirportInput("flying-from-input");






$(".submit-btn").on("click", function(event) {
    event.preventDefault();
    currentTrip = new Trip()
    currentTrip.flyingFrom = $(".flying-from").val().substring(0, 3);
    currentTrip.flyingTo = $(".flying-to").val().substring(0, 3);
    currentTrip.departing = $(".departing").val();
    currentTrip.returning = $(".returning").val();
    console.log(currentTrip);
    $(".flying-from").val("");
    $(".flying-to").val("");
    $(".departing").val("");
    $(".returning").val("");

    $.ajax({
        url: `https://apidojo-kayak-v1.p.rapidapi.com/flights/create-session?origin1=${currentTrip.flyingFrom}
        &destination1=${currentTrip.flyingTo}&departdate1=${currentTrip.departing}-04&cabin=e&currency=USD&adults=1&bags=0&departdate2=${currentTrip.returning}`,
        headers: {
            "x-rapidapi-key": "96573d5d79msh44fd23d95baf58fp13dc4cjsn2eaceee950ed",
            "x-rapidapi-host": "apidojo-kayak-v1.p.rapidapi.com"
        },
        type: "GET",

    }
    ).then(function (response) {

        console.log(response);


    });
});




