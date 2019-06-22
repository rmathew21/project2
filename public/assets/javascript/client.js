

$(".submit-btn").on("click", function (event) {
    event.preventDefault();

    unirest.get(`https://apidojo-kayak-v1.p.rapidapi.com/locations/search?where=${city}`) //THIS FINDS THE CITY CODE
        .header("X-RapidAPI-Host", keys.hotelap.id)
        .header("X-RapidAPI-Key", keys.hotelap.secret)
        .end(function (result) {
            const destinationcitycode = result.body[0].ctid; //the numbers
            const destinationportcode = result.body[0].apicode; //the airport code
            console.log(destinationportcode)
            unirest.get(`https://apidojo-kayak-v1.p.rapidapi.com/locations/search?where=${origin}`) //THIS FINDS THE CITY OF ORIGIN CODE
                .header("X-RapidAPI-Host", keys.hotelap.id)
                .header("X-RapidAPI-Key", keys.hotelap.secret)
                .end(function (result) {
                    const originairportcode = result.body[0].apicode;
                    console.log(destinationcitycode)
                    unirest.get(`https://apidojo-kayak-v1.p.rapidapi.com/hotels/create-session?&airportcode=${destinationportcode}&rooms=1&citycode=${destinationcitycode}&checkin=2019-08-12&checkout=2019-08-13&adults=1`)
                        .header("X-RapidAPI-Host", keys.hotelap.id)
                        .header("X-RapidAPI-Key", keys.hotelap.secret)
                        .end(function (resulthotel) {
                            console.log(resulthotel.body.hotelset);
                            unirest.get(`https://apidojo-kayak-v1.p.rapidapi.com/flights/create-session?origin1=${originairportcode}&destination1=${destinationportcode}&departdate1=2019-08-12&cabin=e&currency=USD&adults=1&bags=0`)
                                .header("X-RapidAPI-Host", keys.hotelap.id)
                                .header("X-RapidAPI-Key", keys.hotelap.secret)
                                .end(function (airportresult) {
                                    console.log('-------------------------------------')
                                    console.log('flight api ran"')
                                    console.log(airportresult.body);
                                    const newTrip = {
                                        user_id: this.user_id,
                                        flight_id: airportresult.body.flight_id,
                                        trip_id: airportresult.body.trip_id,
                                        departdate: airportresult.body.departdate,
                                        departure: airportresult.body.departure,
                                        returndate: airportresult.body.returndate,
                                        returntime: airportresult.body.returntime,
                                        budget_price: airportresult.body.budget_price,
                                        actual_price: airportresult.body.actual_price,
                                        id: resulthotel.body.hotelset.id,
                                        location: resulthotel.body.hotelset.location,
                                        hotelbudget_price: resulthotel.body.hotelset.hotelbudget_price,
                                        hotelactual_price: resulthotel.body.hotelset.hotelactual_price,


                                    };
                                    //something to send this to the backend?   $.post("api/newTrip", newTrip)
                                });
                        });
                });
        });
})