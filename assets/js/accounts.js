var accounts = {
    getaccounts: function () {
        var id = 5;
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
                    <td>${account.Value}</td>
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
    }

}