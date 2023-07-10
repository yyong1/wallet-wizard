var incomes = {
    getincomes: function () {
        // get current user id
        let idForFutureUseIncomeGetData = utils.getCurrentUserId();
        console.log("current id taken from utils - ", idForFutureUseIncomeGetData);
        // $.get('rest/incomes/' + idForFutureUseIncomeGetData, function (data) {
        //     console.log("data:", data);
        //     var incomesHtml = "";
        //     //this is my new branch incomes
        //     var sum = 0;

        //     for (var i = 0; i < data.length; i++) {
        //         var income = data[i];
        //         sum += parseFloat(income.Amount);
        //         var list = "";
        //         list =
        //         `<div class="media text-muted pt-3">
        //             <svg class="bd-placeholder-img mr-2 rounded" width="32" height="32" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 32x32"><title>Placeholder</title><rect fill="#007bff" width="100%" height="100%"></rect><text fill="#007bff" dy=".3em" x="50%" y="50%">32x32</text></svg>
        //             <div class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
        //                 <div class="d-flex justify-content-between align-items-center w-100">
        //                     <strong class="text-gray-dark">${income.CategoryName}</strong>
        //                     <strong class="text-gray-dark">${income.Amount}$</strong>


        //                 </div>
        //                 <span class="d-block">${income.SubCategoryName}</span>
        //             </div>
        //         </div>`;

        //         incomesHtml += list;
        //     }
        //     $(".card-income").html(incomesHtml);
        //     // $("#incomes-list").html(incomesHtml);
        // });


        $.ajax({
            url: 'rest/incomes/' + idForFutureUseIncomeGetData,
            method: 'GET',
            contentType: "application/json",
            dataType: "json",
            beforeSend: function (xhr) {
                if (localStorage.getItem("jwt_token")) {
                    xhr.setRequestHeader('Authorization', localStorage.getItem("jwt_token"));
                }
            },
            success: function (data) {
                console.log("data:", data);
                var incomesHtml = "";
                var sum = 0;

                for (var i = 0; i < data.length; i++) {
                    var income = data[i];
                    sum += parseFloat(income.Amount);
                    var list = "";
                    list =
                        `<div class="media text-muted pt-3">
                            <svg class="bd-placeholder-img mr-2 rounded" width="32" height="32" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 32x32"><title>Placeholder</title><rect fill="#007bff" width="100%" height="100%"></rect><text fill="#007bff" dy=".3em" x="50%" y="50%">32x32</text></svg>
                            <div class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
                                <div class="d-flex justify-content-between align-items-center w-100">
                                    <strong class="text-gray-dark">${income.CategoryName}</strong>
                                    <strong class="text-gray-dark">${income.Amount}$</strong>
                                </div>
                                <span class="d-block">${income.SubCategoryName}</span>
                            </div>
                        </div>`;

                    incomesHtml += list;
                }
                $(".card-income").html(incomesHtml);
                // Additional code logic after successful AJAX request
            },
            error: function (xhr, status, error) {
                // Error handling logic
            }
        });

    }
}