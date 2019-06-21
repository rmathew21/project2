function Flight(flightObj) {
    this.id;
    this.user_id = flightObj.user_id;
    this.trip_id = flightObj.trip_id;
    this.departdate = flightObj.departdate;
    this.departure = flightObj.departure;
    this.returndate = flightObj.returndate;
    this.returntime = flightObj.returntime;
    this.budget_price = flightObj.budget_price;
    this.actual_price = flightObj.actual_price;
};
module.exports = Flight;