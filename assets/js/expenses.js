var expenses = {
    getexpenses: function () {
        var id = 5;
        $.get('rest/expenses/'+id, function (data) {
            console.log("Size of data:", data.length);
            var expensesHtml = "";
            //this is my new branch expenses
            var sum=0;
            for(var i=0; i<data.length; i++){
                var expense = data[i];
                sum+=parseFloat(expense.Amount);
                var list = "";
                list = 
                <tr>
                    <th scope="row">${expense.CategoryName}</th>
                    <td>${expense.SubCategoryName}</td>
                    <td>${expense.Amount}$</td>
                </tr>
                expensesHtml += list;
            }
            sum=sum.toString();
            var totalRow = "";
                totalRow = 
                <tr>
                    <th scope="row">---</th>
                    <td>TOTAL AMOUNT</td>
                    <td>${sum}$</td>
                </tr>
            expensesHtml += totalRow;


            $("#expenses-list").html(expensesHtml);
        });
    }

}