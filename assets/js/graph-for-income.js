$(document).ready(function() {
    getPieChartDataIncome();
    incomes.getincomes();
});

var jsonfile;
var data = [];
var labels = [];

/* ======================== id for future use ======================== */

let idForFutureUseIncome = utils.getCurrentUserId();
console.log("idForFutureUse income: " + idForFutureUseIncome);
// idForFutureUseExp = 5// <================================= hard coded for now

function getPieChartDataIncome() {
    $.ajax({
        url: 'rest/incomes_for_graph/' + idForFutureUseIncome,
        type: 'GET',
        contentType: "application/json",
        dataType: "json",

        success: function (response) {
            //console.log("response:", response);
            jsonfile = {
                "jsonarray": response.map(function (item) {
                    return {
                        "type": item.CategoryName,
                        "value": item.Amount
                    };
                })
            };

            // Update data and labels arrays
            data = jsonfile.jsonarray.map(function (e) {
                // console.log("e.value test" + e.value);
                return e.value;
            });

            labels = jsonfile.jsonarray.map(function (e) {
                // console.log("e.type test" + e.type);
                return e.type;
            });

            // Create the pie chart after data is updated
            createPieChartIncome();
        },
        error: function (xhr, status, error) {
            console.log("Error:", error);
        }
    });
}

$("#income-header").on("click", function () {
    getPieChartDataIncome();
});

function createPieChartIncome() {
    var config = {
        type: 'pie',
        data: {
            datasets: [{
                data: data,
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
                position: 'top'
            },
            responsive: false
        }
    };
    new Chart($("#chart-area-income"), config);
}
