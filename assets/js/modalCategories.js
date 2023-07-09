
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
            <input type="text" class="form-control" id="recipient-name">
        </div>

        <label for="message-text" class="col-form-label">Type of category:</label>
        <div class="dropdown">
        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Type
        </button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a class="dropdown-item" href="#">Expense</a>
            <a class="dropdown-item" href="#">Income</a>
        </div>
        
        </div>

        </form>
    </div>
    <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
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

function addCategory() {
    // if for future use
    const id = utils.getCurrentUserId();
    console.log("id: ", id);

    var CategoryName = $("#acc-name").val();
    var value = $("#value-name").val();
    var userID = id;

    var category = {
        AccountName: accountName,
        Value: value,
        UserID: userID
    };

    console.log("add modal expense/income: ", account);

    $.ajax({
        url: "rest/add_accounts",
        method: "POST",
        data: JSON.stringify(account),
        contentType: "application/json",
        dataType: "json",
        success: function (response) {
            console.log("Success: ", response);
        },
        error: function (xhr, status, error) {
            console.log("Error: ", error);
        }
    });
}

