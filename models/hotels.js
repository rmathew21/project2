function Hotels(hotelObj) {
    this.id;
    this.user_id = hotelObj.user_id;
    this.location = hotelObj.location;
    this.budget_price = hotelObj.budget_price;
    this.actual_price = hotelObj.actual_price;
};

module.exports = Hotels;