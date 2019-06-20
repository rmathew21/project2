

let currentTrip;

function Trip(tripDetails) {
    this.roundTrip = true;
    this.flyingFrom = tripDetails.flyingFrom;
    this.flyingTo = tripDetails.flyingTo;
    this.departDate = tripDetails.departDate;
    this.returnDate = tripDetails.returnDate;
    this.numOfAdults - tripDetails.numOfAdults;
    this.numOfChidren = tripDetails.numOfChidren;
    this.travelClass = tripDetails.travelClass;
    this.budget = tripDetails.budget;
    this.actual = 0;
}




$(".see-flights-btn").on("click", function(event){

    currentTrip = new Trip()
    event.preventDefault();
    currentTrip.flyingFrom = $(".flying-from").val();
    currentTrip.flyingTo = $(".flying-to").val();
    currentTrip.departing = $(".departing").val();
    currentTrip.returning = $(".returning").val();
    console.log(currentTrip);
    currentTrip.flyingFrom.val("");
    currentTrip.flyingTo.val("");
    currentTrip.departing.val("");
    currentTrip.returning.val("");   
});