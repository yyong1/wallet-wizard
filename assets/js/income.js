var income = {
    getincome: function () {
        var token = localStorage.getItem('jwt_token');
        var decodedToken = jwt_decode(token);
        var id = decodedToken.UserId;
        $.get('rest/incomes/' + id, function (data) {
            console.log("Size of data:", data.length);
            var incomeHtml = "";
            //this is my new branch expenses
            var sum = 0;
            for (var i = 0; i < data.length; i++) {
                var income = data[i];
                sum += parseFloat(income.Amount);
                var list = "";
                list =`
                    <tr>
                        <th scope="row">${income.CategoryName}</th>
                        <td>${income.SubCategoryName}</td>
                        <td>${income.Amount}$</td>
                    </tr>`
                incomeHtml += list;
            }
            sum = sum.toString();
            var totalRow = "";
            totalRow =
                `<tr>
                    <th scope="row">---</th>
                    <td>TOTAL AMOUNT</td>
                    <td>${sum}$</td>
                </tr>`
            incomeHtml += totalRow;


            $("#income-list").html(incomeHtml);
        });
    }

}