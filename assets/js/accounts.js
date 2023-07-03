var accounts = {
    getaccounts: function () {
        var id = 5;
        $.get('rest/accounts/'+id, function (data) {
            console.log("Size of data:", data.length);
            var accountsHtml = "";


            for(var i=0; i<data.length; i++){
                var account = data[i];
                var list = "";
                list = 
                <tr>
                    <th scope="row">${i+1}</th>
                    <td>${account.AccountName}</td>
                    <td>${account.Value}</td>
                </tr>
                accountsHtml += list;
            }


            $("#accounts-list").html(accountsHtml);
        });
    }

}