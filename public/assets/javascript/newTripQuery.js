// $('.flight-modal').steps({
// btnCancelHtml: 'Cancel',
// btnPreviousHtml: 'previous',
// btnNextHtml: 'next',
// btnLastStepHtml: 'Complete',
// disableNextButton: false,

// });

// $(".flight-modal").steps({
//     headerTag: "p",
//     bodyTag: "section",
//     transitionEffect: "slideLeft",
//     autoFocus: true
// });

let currentTrip;
let currentFlightPrice;
let currentHotelPrice;
let currentTripBudget = 1000;
let currentTotalTripPrice = 0;
let budgetRemaining;

function Trip(tripDetails) {
    this.roundTrip = true;
    // this.flyingFrom = tripDetails.flyingFrom;
    // this.flyingTo = tripDetails.flyingTo;
    // this.departDate = tripDetails.departDate;
    // this.returnDate = tripDetails.returnDate;
    // this.numOfAdults - tripDetails.numOfAdults;
    // this.numOfChidren = tripDetails.numOfChidren;
    // this.travelClass = tripDetails.travelClass;
    // this.budget = tripDetails.budget;
    // this.actual = 0;
};


function Trip() {
    this.roundTrip = true;
}

AirportInput("flying-to-input");
AirportInput("flying-from-input");






$(".submit-btn").on("click", function (event) {
    event.preventDefault();
    currentTrip = new Trip()
    currentTrip.flyingFrom = $(".flying-from").val().substring(0, 3);
    currentTrip.flyingTo = $(".flying-to").val().substring(0, 3);
    currentTrip.departing = $(".departing").val();
    currentTrip.returning = $(".returning").val();
    console.log(currentTrip);
    currentTrip.flyingFrom.val("");
    currentTrip.flyingTo.val("");
    currentTrip.departing.val("");
    currentTrip.returning.val("");


});

$(".flying-from").val("");
$(".flying-to").val("");
$(".departing").val("");
$(".returning").val("");

$.ajax("/find-flights", {

    type: "GET",
    trip: currentTrip

}).then(function (response) {

    console.log(response);


});
});




$(".flight-card").on("click", function (event) {
    event.preventDefault();
    price = $(this).data("price");
    console.log(price);
    currentFlightPrice = parseInt(price);
    currentTotalTripPrice += currentFlightPrice;
    let percentSpent = (currentTotalTripPrice / currentTripBudget) * 100;
    percentSpent += "%";

    console.log(percentSpent);
    $("progress-bar").css("width", percentSpent + "%");
    $(".state1").toggle();
    $(".state2").toggle();
    $(".spent-text").text(currentTotalTripPrice);

});



$(".hotel-card").on("click", function (event) {
    event.preventDefault();
    price = $(this).data("price");
    console.log(price);
    currentHotelPrice = parseInt(price);
    currentTotalTripPrice += currentHotelPrice;
    $(".state2").toggle();
    $(".state3").toggle();
    $(".spent-text").text(currentTotalTripPrice);
});

var options = {
    shouldSort: true,
    threshold: 0.4,
    maxPatternLength: 32,
    keys: [{
        name: 'iata',
        weight: 0.5
    }, {
        name: 'name',
        weight: 0.3
    }, {
        name: 'city',
        weight: 0.2
    }]
};

var fuse = new Fuse(airports, options)


var ac = $('#autocomplete')
    .on('click', function (e) {
        e.stopPropagation();
    })
    .on('focus keyup', search)
    .on('keydown', onKeyDown);

var wrap = $('<div>')
    .addClass('autocomplete-wrapper')
    .insertBefore(ac)
    .append(ac);

var list = $('<div>')
    .addClass('autocomplete-results')
    .on('click', '.autocomplete-result', function (e) {
        e.preventDefault();
        e.stopPropagation();
        selectIndex($(this).data('index'));
    })
    .appendTo(wrap);

$(document)
    .on('mouseover', '.autocomplete-result', function (e) {
        var index = parseInt($(this).data('index'), 10);
        if (!isNaN(index)) {
            list.attr('data-highlight', index);
        }
    })
    .on('click', clearResults);

function clearResults() {
    results = [];
    numResults = 0;
    list.empty();
}

function selectIndex(index) {
    if (results.length >= index + 1) {
        ac.val(results[index].iata);
        clearResults();
    }
}

var results = [];
var numResults = 0;
var selectedIndex = -1;

function search(e) {
    if (e.which === 38 || e.which === 13 || e.which === 40) {
        return;
    }

    if (ac.val().length > 0) {
        results = _.take(fuse.search(ac.val()), 7);
        numResults = results.length;

        var divs = results.map(function (r, i) {
            return '<div class="autocomplete-result" data-index="' + i + '">'
                + '<div><b>' + r.iata + '</b> - ' + r.name + '</div>'
                + '<div class="autocomplete-location">' + r.city + ', ' + r.country + '</div>'
                + '</div>';
        });

        selectedIndex = -1;
        list.html(divs.join(''))
            .attr('data-highlight', selectedIndex);

    } else {
        numResults = 0;
        list.empty();
    }
}

function onKeyDown(e) {
    switch (e.which) {
        case 38: // up
            selectedIndex--;
            if (selectedIndex <= -1) {
                selectedIndex = -1;
            }
            list.attr('data-highlight', selectedIndex);
            break;
        case 13: // enter
            selectIndex(selectedIndex);
            break;
        case 9: // enter
            selectIndex(selectedIndex);
            e.stopPropagation();
            return;
        case 40: // down
            selectedIndex++;
            if (selectedIndex >= numResults) {
                selectedIndex = numResults - 1;
            }
            list.attr('data-highlight', selectedIndex);
            break;

        default: return; // exit this handler for other keys
    }
    e.stopPropagation();
    e.preventDefault(); // prevent the default action (scroll / move caret)
}









// function toggleModalDivs(id) {
//     states = [0, 1, 2];
//     states.foreach(state, id) {
//         if (id === state) {
//             $(".state" + (state + 1)).show();
//         } else {
//             $(".state" + state).hide()
//         };
//     }
// }



// function createCards() {
//     flightCard = $("<div>");
//     flightCard.addClass("")
// }


// $.ajax({
//     url: `https://apidojo-kayak-v1.p.rapidapi.com/flights/create-session?origin1=${currentTrip.flyingFrom}
//     &destination1=${currentTrip.flyingTo}&departdate1=${currentTrip.departing}-04&cabin=e&currency=USD&adults=1&bags=0&departdate2=${currentTrip.returning}`,
//     headers: {
//         "x-rapidapi-key": "96573d5d79msh44fd23d95baf58fp13dc4cjsn2eaceee950ed",
//         "x-rapidapi-host": "apidojo-kayak-v1.p.rapidapi.com"
//     },
//     type: "GET",

// }).then(function (response) {

//     console.log(response);


// });



