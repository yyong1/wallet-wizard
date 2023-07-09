var categories = {
    getcategories: function () {
        var id = 5;
        $.get('rest/categories/'+id, function (data) {

            const wholeArraySize = Object.keys(data).length;

            // Get the sizes of each subcategories array
            const subcategoriesSizes = {};
            for (const category in data) {
            if (data.hasOwnProperty(category)) {
                subcategoriesSizes[category] = data[category].length;
            }
            }

            //console.log("Size of the whole array: ", wholeArraySize);
            //console.log("Sizes of subcategories arrays: ", subcategoriesSizes);
            
            //console.log(data[0].length);
            var categoriesHtml = "";

            var i=1;
            for (const categoryName of Object.keys(data)) {
                //console.log("Category:", categoryName);
                var list = "";
                list = 
                `<tr>
                    <th scope="row">${i++}</th>
                    <td>${categoryName}</td>
                    <td>`
                    console.log("categoryName:", categoryName);

                // Iterate over subcategories of each category
                const subcategories = data[categoryName];
                for (const subcategory of subcategories) {
                    //console.log("Subcategory:", subcategory);
                    console.log("subcategory length:", subcategories.length);
                    list += `${subcategory},  `;
                    console.log("subcategory:", subcategory);
                }
                list+=`</td>
                </tr>`;
                    categoriesHtml += list;

            }
            $("#categories-list").html(categoriesHtml);
        });
    }

}

/*var categories = {
    getcategories: function () {
        var id = 1;
        $.get('rest/categories/'+id, function (data) {

            const wholeArraySize = Object.keys(data).length;

            // Get the sizes of each subcategories array
            const subcategoriesSizes = {};
            for (const category in data) {
            if (data.hasOwnProperty(category)) {
                subcategoriesSizes[category] = data[category].length;
            }
            }

            //console.log("Size of the whole array: ", wholeArraySize);
            //console.log("Sizes of subcategories arrays: ", subcategoriesSizes);
            
            //console.log(data[0].length);
            var categoriesHtml = "";


            for (const categoryName of Object.keys(data)) {
                //console.log("Category:", categoryName);
                var list = "";
                list = `<li>${categoryName}
                                <ul>`;

                // Iterate over subcategories of each category
                const subcategories = data[categoryName];
                for (const subcategory of subcategories) {
                    //console.log("Subcategory:", subcategory);
                    list += `<li>${subcategory}</li>`;
                }
                list+=`</ul>
                            </li>`;
                    categoriesHtml += list;

            }
        
            /*for (var i = 0; i < wholeArraySize; i++) {
                console.log(data);
                for(var j = 0; j<subcategoriesSizes; j++){
                    
                    var list = "";
                    list = `<li>${data[i].CategoryName}
                                <ul>
                                    
                                </ul>
                            </li>`;
                    categoriesHtml += list;
                }
            }*//*
            $("#categories-list").html(categoriesHtml);
        });
    }

}*/







