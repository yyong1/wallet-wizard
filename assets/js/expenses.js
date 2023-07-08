var expenses = {
    getexpenses: function () {
        // get current user id
        let idForFutureUse = utils.getCurrentUserId();
        console.log("current id taken from utils - ", idForFutureUse);
        var id = 5;

        $.get('rest/expenses/' + id, function (data) {
            //console.log("data:", data);
            var expensesHtml = "";
            //this is my new branch expenses
            var sum = 0;

            for (var i = 0; i < data.length; i++) {
                var expense = data[i];
                sum += parseFloat(expense.Amount);
                var list = "";
                list =
                `<div class="media text-muted pt-3">
                    <svg class="bd-placeholder-img mr-2 rounded" width="32" height="32" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 32x32"><title>Placeholder</title><rect fill="#007bff" width="100%" height="100%"></rect><text fill="#007bff" dy=".3em" x="50%" y="50%">32x32</text></svg>
                    <div class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
                        <div class="d-flex justify-content-between align-items-center w-100">
                            <strong class="text-gray-dark">${expense.CategoryName}</strong>
                            <strong class="text-gray-dark">${expense.Amount}$</strong>
                
                            
                        </div>
                        <span class="d-block">${expense.SubCategoryName}</span>
                    </div>
                </div>`;

                expensesHtml += list;
            }

            $(".card-for-data").html(expensesHtml);
            // $("#expenses-list").html(expensesHtml);
        });
    }

}