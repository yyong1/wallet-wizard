// Modal for adding new expense


function getCategoryToSelect() {
    // get current user id and take data from backend
};


var addModalFor = true;
var addModal = `
<div class="modal fade" id="addExpIncModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">${addModalFor ? 'Expenses' : 'Income'}</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <form>
          <div class="form-group">
            <div class="dropdown">
              <button class="btn btn-secondary btn-dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Choose category
              </button>
              <select class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <option class="dropdown-item" href="#">Action</option>
                <option class="dropdown-item" href="#">Another action</option>
                <option class="dropdown-item" href="#">Something else here</option>
              </select>
            </div>
          </div>

          <div class="form-group">
            <label for="amount-name" class="col-form-label">Amount:</label>
            <input type="text" class="form-control" id="amount-name-input">
          </div>

          <div class="form-group">
            <label for="expense-income-name" class="col-form-label">${addModalFor ? 'Expense name:' : 'Income name:'}</label>
            <input type="text" class="form-control" id="expense-income-name-input">
          </div>

        </form>
      </div>

      <div class="modal-footer">
        <button type="button" class="btn btn-secondary close-footer" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary btn-action-add-exp-inc">Insert${addModalFor ? ' expense' : ' income'}</button>
      </div>
    </div>
  </div>
</div>
`;

$("body").append(addModal);

$("body").on("click", ".btn-add-expenses", function () {
    $("#addExpIncModal").modal("show");
});

$("body").on("click", ".close, .close-footer", function () {
    $("#addExpIncModal").modal("hide");
});

$('.btn-dropdown-toggle').click(function () {
    $('.dropdown-menu').toggle();
});

$("body").on("click", ".btn-action-add-exp-inc", function () {
    addExpense();
    $("#addExpIncModal").modal("hide");
});

// to get value from dropdown
var selectedValueCategory;
$('select').on('change', function() {
    selectedValueCategory = $(this).val();
    console.log(selectedValueCategory);
  });

function addExpense() {
    // if for future use
    // const id = utils.getCurrentUserId();
    const id = 5;

    var expenseName = $("#expense-income-name-input").val();
    var amount = $("#amount-name-input").val();
    var category = selectedValueCategory;

    var expense = {
        expenseName: expenseName,
        amount: amount,
        category: category
    };

    console.log("add modal expense/income: ", expense);

    $.ajax({
        url: "/add_expenses/" + id,
        method: "POST",
        data: JSON.stringify(expense),
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

