// graph code

////////////////////////////////////////////////////////////////////////////
///////////////////////////////// JSON DATA ////////////////////////////////
////////////////////////////////////////////////////////////////////////////

//Data for the line chart
var jsonData =
    {
        cols: [{ label: 'Date', type: 'date' },
        { label: 'Amount', type: 'number' },
        { label: 'title1', type: 'string' },
        { label: 'text1', type: 'string' },
        { label: 'Count', type: 'number' },
        { label: 'title2', type: 'string' }
        ],
        rows: [
            { c: [{ v: new Date(2017, 1, 1) }, { v:  30000 }, , , { v:   40645 }] },
            { c: [{ v: new Date(2017, 1, 2) }, { v:  14045 }, , , { v:   20374 }] },
            { c: [{ v: new Date(2017, 1, 3) }, { v:  55022 }, , , { v:   50766 }] },
            { c: [{ v: new Date(2017, 1, 4) }, { v:  75284 }, , , { v:   14334 }] },
            { c: [{ v: new Date(2017, 1, 5) }, { v:  41476 }, , , { v:   66467 }] },
            { c: [{ v: new Date(2017, 1, 6) }, { v:  33322 }, , , { v:   39463 }] },
            { c: [{ v: new Date(2017, 1, 7) }, { v:  75284 }, , , { v:   45334 }] },
            { c: [{ v: new Date(2017, 1, 8) }, { v:  61476 }, , , { v:   56467 }] },
            { c: [{ v: new Date(2017, 1, 9) }, { v:  93322 }, , , { v:   69463 }] },
            { c: [{ v: new Date(2017, 1, 10) }, { v: 53322 }, , , { v:   89463 }] },
            { c: [{ v: new Date(2017, 1, 11) }, { v: 65284 }, , , { v:   95334 }] },
            { c: [{ v: new Date(2017, 1, 12) }, { v: 71476 }, , , { v:   116467 }] },
            { c: [{ v: new Date(2017, 1, 13) }, { v: 103322 }, , , { v:  144630 }] },
            { c: [{ v: new Date(2017, 1, 14) }, { v: 113322 }, , , { v:  159463 }] },
            { c: [{ v: new Date(2017, 1, 15) }, { v: 125284 }, , , { v:  153342 }] },
            { c: [{ v: new Date(2017, 1, 16) }, { v: 131476 }, , , { v:  101646 }] },
            { c: [{ v: new Date(2017, 1, 17) }, { v: 140332 }, , , { v: 140463 }] }
        ]
    };



//Data for the pie chart colours
//'rgba(255, 99, 132, 0.2)'
var chartColors = [
    'rgba(128,0,0,0.2)',
    'rgba(240,128,128,0.2)',
    'rgba(233,150,122,0.2)',
    'rgba(250,128,114,0.2)',
    'rgba(255,160,122,0.2)',
    'rgba(255,69,0,0.2)',
    'rgba(255,140,0,0.2)',
    'rgba(255,165,0,0.2)',
    'rgba(255,215,0,0.2)',
    'rgba(184,134,11,0.2)',
    'rgba(218,165,32,0.2)',
    'rgba(238,232,170,0.2)',
    'rgba(189,183,107,0.2)',
    'rgba(240,230,140,0.2)',
    'rgba(128,128,0,0.2)',
    'rgba(255,255,0,0.2)',
    'rgba(154,205,50,0.2)',
    'rgba(85,107,47,0.2)',
    'rgba(107,142,35,0.2)',
    'rgba(124,252,0,0.2)',
    'rgba(144,238,144,0.2)',
    'rgba(152,251,152,0.2)',
    'rgba(143,188,143,0.2)',
    'rgba(0,250,154,0.2)',
    'rgba(0,255,127,0.2)',
    'rgba(46,139,87,0.2)',
    'rgba(102,205,170,0.2)',
    'rgba(60,179,113,0.2)',
    'rgba(32,178,170,0.2)',
    'rgba(0,128,128,0.2)',
    'rgba(0,139,139,0.2)',
    'rgba(0,255,255,0.2)',
    'rgba(0,255,255,0.2)',
    'rgba(224,255,255,0.2)',
    'rgba(0,206,209,0.2)',
    'rgba(64,224,208,0.2)',
    'rgba(72,209,204,0.2)',
    'rgba(175,238,238,0.2)',
    'rgba(127,255,212,0.2)',
    'rgba(176,224,230,0.2)',
    'rgba(95,158,160,0.2)',
    'rgba(70,130,180,0.2)',
    'rgba(100,149,237,0.2)',
    'rgba(0,191,255,0.2)',
    'rgba(30,144,255,0.2)',
    'rgba(173,216,230,0.2)',
    'rgba(135,206,235,0.2)',
    'rgba(135,206,250,0.2)',
    'rgba(0,0,205,0.2)',
    'rgba(0,0,255,0.2)',
    'rgba(65,105,225,0.2)',
    'rgba(138,43,226,0.2)',
    'rgba(75,0,130,0.2)',
    'rgba(72,61,139,0.2)',
    'rgba(106,90,205,0.2)',
    'rgba(123,104,238,0.2)',
    'rgba(147,112,219,0.2)',
    'rgba(139,0,139,0.2)',
    'rgba(148,0,211,0.2)',
    'rgba(153,50,204,0.2)',
    'rgba(186,85,211,0.2)',
    'rgba(128,0,128,0.2)',
    'rgba(216,191,216,0.2)',
    'rgba(221,160,221,0.2)',
    'rgba(238,130,238,0.2)',
    'rgba(250,235,215,0.2)',
    'rgba(245,245,220,0.2)',
    'rgba(255,228,196,0.2)',
    'rgba(255,235,205,0.2)',
    'rgba(245,222,179,0.2)',
    'rgba(255,248,220,0.2)',
    'rgba(255,250,205,0.2)',
    'rgba(250,250,210,0.2)',
    'rgba(255,255,224,0.2)',
    'rgba(139,69,19,0.2)',
    'rgba(160,82,45,0.2)',
    'rgba(210,105,30,0.2)',
    'rgba(205,133,63,0.2)',
    'rgba(244,164,96,0.2)',
    'rgba(222,184,135,0.2)',
    'rgba(210,180,140,0.2)',
    'rgba(188,143,143,0.2)',
    'rgba(255,228,181,0.2)',
    'rgba(255,222,173,0.2)',
    'rgba(255,218,185,0.2)',
    'rgba(255,228,225,0.2)',
    'rgba(255,240,245,0.2)',
    'rgba(250,240,230,0.2)',
    'rgba(253,245,230,0.2)',
    'rgba(255,239,213,0.2)',
    'rgba(255,245,238,0.2)',
    'rgba(112,128,144,0.2)',
    'rgba(119,136,153,0.2)',
    'rgba(176,196,222,0.2)',
    'rgba(230,230,250,0.2)',
    'rgba(255,250,240,0.2)',
];

///////////////////////////////////////////////////////////////////////////
////////////////////////// General scripts ////////////////////////////////
///////////////////////////////////////////////////////////////////////////


// // To adjust the line chart to the screen width, as it can't be adjusted except on window refresh
// var w = $('.col-md-12').width();
// $('.lineChart').css('width', w);

// console.log(w);






///////////////////////////////////////////////////////////////////////////
///////////////////////////Google timeline chart //////////////////////////
///////////////////////////////////////////////////////////////////////////

function getTimelineData(){
    
        //TODO ajax get json timeLineData data
    
    }


google.charts.load('current', { 'packages': ['annotatedtimeline'] });
// google.charts.setOnLoadCallback(drawChart);
// function drawChart() {

//     var data = new google.visualization.DataTable(jsonData);

//     // var data = new google.visualization.DataTable();
//     //   data.addColumn('date', 'Date');
//     //   data.addColumn('number', 'Amount');
//     //   data.addColumn('string', 'title1');
//     //   data.addColumn('string', 'text1');
//     //   data.addColumn('number', 'Count');
//     //   data.addColumn('string', 'title2');
//     //   data.addColumn('string', 'text2');
//     //   data.addRows([
//     //     [new Date(2008, 1 ,1), 30000, undefined, undefined, 40645, undefined, undefined],
//     //     [new Date(2008, 1 ,2), 14045, undefined, undefined, 20374, undefined, undefined],
//     //     [new Date(2008, 1 ,3), 55022, undefined, undefined, 50766, undefined, undefined],
//     //     [new Date(2008, 1 ,4), 75284, undefined, undefined, 14334, 'Event1','Event2'],
//     //     [new Date(2008, 1 ,5), 41476, 'Event3','Event4', 66467, undefined, undefined],
//     //   ]);


//     var options = {
     
//         // 'width':400,
//         // 'height':300,
        
//         // textStyle: {
//         //     fontName: 'Arial',
//         //     auraColor: 'none'
//         // },
        
//         // chartArea: {
//         //     backgroundColor: {
//         //         stroke: '#fff',
//         //         strokeWidth: 10
//         //     }
//         // },
//         // backgroundColor: {
//         //     stroke: '#fff',
//         //     strokeWidth: 10
//         // },
      
        
//     };

//     var chart = new google.visualization.AnnotatedTimeLine(document.getElementById('chart_div'));
//     chart.draw(data, options);
// }

////////////////////////////////////////////////////////////////////
//////////////// Chart.js PIE chart ////////////////////////////////
////////////////////////////////////////////////////////////////////

function getPieChartData(){

    //TODO ajax get json pie data

}


var randomColorGenerator = function (data) {
    //Empty json object which the

    var colorsBase = {};
    var newColors = {};

    // aliceblue: "#f0f8ff",
    // antiquewhite: "#faebd7",

    console.log(data);
    for (var index = 0; index < data.length; ++index) {
        var randomColorGen = '#' + (Math.random().toString(16) + '0000000').slice(2, 8);
        console.log("Test");
        //  randsomColors.push(
        //      {index: randomColorGen}
        //  );


    }
    console.log(randsomColors);
    return randsomColors;
};


var randomScalingFactor = function () {
    return Math.round(Math.random() * 100);
};


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
    }
    , {
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
});;


 

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

var colorNames = Object.keys(window.chartColors);

//Creates the piechart
window.onload = function () {
    var ctx = document.getElementById("chart-area").getContext("2d");
    var dataset = {
        backgroundColor: [],
        data: [],
        label: 'New dataset ' + config.data.datasets.length,
    };


    window.myPie = new Chart(ctx, config);
    

};

function chartColourFix() {
    var newDataset = {
        backgroundColor: [],
        data: [],
        label: 'New dataset ' + config.data.datasets.length,
    };

    for (var index = 0; index < config.data.labels.length; ++index) {
        newDataset.data.push(randomScalingFactor());

        var colorName = colorNames[index % colorNames.length];;
        var newColor = window.chartColors[colorName];
        newDataset.backgroundColor.push(newColor);
    }
    //config.data.datasets.push(newDataset);
    window.myPie.update();
}

function updatePieChart() {
    window.myPie.update();
}

