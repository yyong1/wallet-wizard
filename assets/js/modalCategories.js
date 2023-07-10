
var categoryElement = `<div class="modal fade" id="categoryModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
<div class="modal-dialog" role="document">
    <div class="modal-content">
    <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Make new category</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
        <span aria-hidden="true">&times;</span>
        </button>
    </div>
    <div class="modal-body">
        <form>
        <div class="form-group">
            <label for="recipient-name" class="col-form-label">Category name:</label>
            <input type="text" class="form-control" id="category-name">
        </div>

        <label for="message-text" class="col-form-label">Type of category:</label>
        <div class="dropdown">
        <select class="btn btn-secondary dropdown-toggle expense-income" id="dropdownMenuButton">
            <option value="" disabled selected hidden>Expense / Income</option>
            <option value="expense">Expense</option>
            <option value="income">Income</option>
        </select>
        </div>

        </form>
    </div>
    <div class="modal-footer">
        <button type="button" class="btn btn-secondary close-footer" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary add-category">Add category</button>
    </div>
    </div>
</div>
</div>`

$("body").append(categoryElement);

$("body").on("click", '[data-target="#categoryModal"]', function () {
    $("#categoryModal").modal("show");
});

$("body").on("click", ".close, .close-footer", function () {
    $("#categoryModal").modal("hide");
});

$("body").on("click", ".add-category", function () {
    addCategory();
    $("#categoryModal").modal("hide");
});

$('.expense-income').click(function () {
    $('.dropdown-menu').toggle();
});


function addCategory() {
    // if for future use
    const idCategory = utils.getCurrentUserId();
    console.log("id: ", idCategory);

    var CategoryName = $("#category-name").val();
    var userID = idCategory;
    var dropdown = document.getElementById("dropdownMenuButton");
    var selectedValue = dropdown.value;
    console.log(selectedValue);
    var category;
    if (selectedValue == "expense") {
        console.log("napusi: ", selectedValue);
        category = {
            CategoryName: CategoryName,
            UserID: idCategory,
            Expenses: 1,
        };
    }
    else {
        console.log("kurca: ", selectedValue);
        category = {
            CategoryName: CategoryName,
            UserID: idCategory,
            Income: 1
        };
    }

    console.log("add modal expense/income: ", category);

    $.ajax({
        url: "rest/add_category",
        method: "POST",
        data: JSON.stringify(category),
        contentType: "application/json",
        dataType: "json",
        beforeSend: function (xhr) {
            if (localStorage.getItem("jwt_token")) { // pass token for authorized requests
                xhr.setRequestHeader('Authentication', localStorage.getItem("jwt_token"));
            }
        },
        success: function (response) {
            console.log("Success: ", response);
            categories.getcategories();

        },
        error: function (xhr, status, error) {
            console.log("Error: ", error);
        }
    });
}

