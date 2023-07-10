var accounts = {
    getaccounts: function () {
        var id = utils.getCurrentUserId();
        $.get('rest/accounts/'+id, function (data) {
            console.log("Size of data:", data.length);
            var accountsHtml = "";

            var sum=0;
            for(var i=0; i<data.length; i++){
                var account = data[i];
                sum+=parseFloat(account.Value);
                var list = "";
                list = 
                `<tr>
                    <th scope="row">${i+1}</th>
                    <td>${account.AccountName}</td>
                    <td>${account.Value}$</td>
                </tr>`
                accountsHtml += list;
            }
            sum=sum.toString();
            var totalRow = "";
                totalRow = 
                `<tr>
                    <th scope="row">---</th>
                    <td>TOTAL AMOUNT</td>
                    <td>${sum}$</td>
                </tr>`
            accountsHtml += totalRow;


            $("#accounts-list").html(accountsHtml);
        });



        // FOR MIDDLEWARE
        // $.ajax({
        //     url: "rest/accounts/" + id,
        //     method: "GET",
        //     contentType: "application/json",
        //     dataType: "json",
        //     beforeSend: function (xhr) {
        //         if (localStorage.getItem("jwt_token")) { // pass token for authorized requests
        //             xhr.setRequestHeader('Authentication', localStorage.getItem("jwt_token"));
        //         }
        //     },
        //     success: function (response) {
        //         var accountsHtml = "";

        //     var sum=0;
        //     for(var i=0; i<data.length; i++){
        //         var account = data[i];
        //         sum+=parseFloat(account.Value);
        //         var list = "";
        //         list = 
        //         `<tr>
        //             <th scope="row">${i+1}</th>
        //             <td>${account.AccountName}</td>
        //             <td>${account.Value}$</td>
        //         </tr>`
        //         accountsHtml += list;
        //     }
        //     sum=sum.toString();
        //     var totalRow = "";
        //         totalRow = 
        //         `<tr>
        //             <th scope="row">---</th>
        //             <td>TOTAL AMOUNT</td>
        //             <td>${sum}$</td>
        //         </tr>`
        //     accountsHtml += totalRow;
        //     $("#accounts-list").html(accountsHtml);
        //     },
        //     error: function (xhr, status, error) {
        //         console.log("Error: ", error);
        //     }
        // });




    }
}
// $(document).ready(function () {
//     accounts.getaccounts(); // Invoke the getaccounts function on page load
// });