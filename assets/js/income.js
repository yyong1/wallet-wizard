var incomes = {
    parseJwt: function(token){
        if (token) {
            var base64Url = token.split(".")[1];
            var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
            var jsonPayload = decodeURIComponent(
                atob(base64)
                    .split("")
                    .map(function (c) {
                        return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
                    })
                    .join("")
            );
            return JSON.parse(jsonPayload);
        } else {
            return null;
        }
    },

    getCurrentUserId: function(){
        var token = localStorage.getItem("jwt_token");
        var user = incomes.parseJwt(token);
        return parseInt(user[0].UserID);
    },

    getincomes: function () {
        console.log("token in log", incomes.getCurrentUserId());
        // need to replace to get current user id
        var id = 5;

        $.get('rest/incomes/' + id, function (data) {
            //console.log("data:", data);
            var incomesHtml = "";
            //this is my new branch incomes
            var sum = 0;

            for (var i = 0; i < data.length; i++) {
                var income = data[i];
                sum += parseFloat(income.Amount);
                var list = "";
                list =
                    // <tr>
                    //     <th scope="row">${expense.CategoryName}</th>
                    //     <td>${expense.SubCategoryName}</td>
                    //     <td>${expense.Amount}$</td>
                    // </tr>

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
            // sum = sum.toString();
            // var totalRow = "";
            // totalRow =
            //     <tr>
            //         <th scope="row">---</th>
            //         <td>TOTAL AMOUNT</td>
            //         <td>${sum}$</td>
            //     </tr>
            // incomesHtml += totalRow;

            $(".card-income").html(incomesHtml);
            // $("#incomes-list").html(incomesHtml);
        });
    }

}