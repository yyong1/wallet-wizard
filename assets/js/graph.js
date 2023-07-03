// graph code

google.charts.load('current', { 'packages': ['annotatedtimeline'] }).then(function () {
    console.log("Google Charts loaded");
    // Your code for drawing the chart or performing other operations
  }).catch(function (error) {
    console.log("Error loading Google Charts:", error);
  });

////////////////////////////////////////////////////////////////////
//////////////// Chart.js PIE chart ////////////////////////////////
////////////////////////////////////////////////////////////////////

function getPieChartData() {

    //TODO ajax get json pie data

}

//Current used data structure for the piechart
var jsonfile = {
    "jsonarray": [{
        "type": "Declined",
        "value": 124
    }, {
        "type": "Authorisation approved",
        "value": 143
    }, {
        "type": "Authorisation declined",
        "value": 172
    }, {
        "type": "Capture approved",
        "value": 180
    }, {
        "type": "Capture declined",
        "value": 100
    }, {
        "type": "Payment approved",
        "value": 160
    }, {
        "type": "Payment declined",
        "value": 50
    }, {
        "type": "Payment requested approved",
        "value": 60
    }, {
        "type": "Payment requested declined",
        "value": 50
    }
    ]
};

var labels = jsonfile.jsonarray.map(function (e) {
    console.log("e.type test" + e.type);
    return e.type;
});
var data = jsonfile.jsonarray.map(function (e) {
    console.log("e.value test" + e.value);
    return e.value;
});

var config = {
    type: 'pie',
    data: {
        datasets: [{
            data: data,
            // backgroundColor: [chartColors],
            backgroundColor: [
                'rgba(217,83,79,1)',
                'rgba(91,192,222,1)',
                'rgba(92,184,92,1)',
                'rgba(66,139,202,1)',
                'rgba(202,200,255,1)',
                'rgba(159,224,255,1)',
                'rgba(119,189,253,1)',
                'rgba(93,144,253,1)',
                'rgba(0,10,255,1)',

            ],
            label: 'TransactionData1'
        }],

        labels: labels

    },
    options: {
        legend: {
            position: 'left'
        },
        responsive: false
    }
};

//Creates the piechart
window.onload = function () {
    var ctx = document.getElementById("chart-area").getContext("2d");
    window.myPie = new Chart(ctx, config);
};
