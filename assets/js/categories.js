var categories = {
    getcategories: function () {
        var id = utils.getCurrentUserId();
        console.log("id", id);
        $.get('rest/categories-by-id/'+id, function (data) {
            console.log(data);
            console.log(data.length);
            
            console.log(data[0]);
            var categoriesHtml = "";

            
            for (var i=0;i<data.length;i++) {
                
                var list = "";
                list = 
                `<tr>
                    <th scope="row">${i+1}</th>
                    <td>${data[i].CategoryName}</td>
                    <td>`
                    
                if(data[i].Expenses==1){
                        list+= `Expenses</td>
                    </tr>`;
                }
                else{
                        list+= `Income</td>
                    </tr>`;
                }
                    categoriesHtml += list;

            }
            $("#categories-list").html(categoriesHtml);
        });
    }

}









