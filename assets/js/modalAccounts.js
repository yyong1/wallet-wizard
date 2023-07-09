
var accountElement = `<div class="modal fade" id="accountModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
            <label for="recipient-name" class="col-form-label">Account name:</label>
            <input type="text" class="form-control" id="acc-name">
        </div>

        <div class="form-group">
            <label for="recipient-name" class="col-form-label">Value:</label>
            <input type="number" class="form-control" id="value-name">
        </div>

        </form>
    </div>
    <div class="modal-footer">
        <button type="button" class="btn btn-secondary close-footer" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary add-account">Add account</button>
    </div>
    </div>
</div>
</div>`

$("body").append(accountElement);

$("body").on("click", '[data-target="#accountModal"]', function () {
    $("#accountModal").modal("show");
});

$("body").on("click", ".close, .close-footer", function () {
  $("#accountModal").modal("hide");
});


$("body").on("click", ".add-account", function () {
    addAccount();
    $("#accountModal").modal("hide");
});

function addAccount() {
    // if for future use
    const id = utils.getCurrentUserId();
    console.log("id: ", id);

    var accountName = $("#acc-name").val();
    var value = $("#value-name").val();
    var userID = id;

    var account = {
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
