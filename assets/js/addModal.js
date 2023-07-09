// Modal for adding new expense
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
              <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
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
            <input type="password" class="form-control" id="amount-name-input">
          </div>

          <div class="form-group">
            <label for="expense-income-name" class="col-form-label">${addModalFor ? 'Expenses name:' : 'Income name:'}</label>
            <input type="text" class="form-control" id="expense-income-name-input">
          </div>

        </form>
      </div>

      <div class="modal-footer">
        <button type="button" class="btn btn-secondary close-footer" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary btn-action">Insert${addModalFor ? ' expense' : ' income'}</button>
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

$('.dropdown-toggle').click(function () {
    $('.dropdown-menu').toggle();
});

$("body").on("click", ".dropdown-menu a", function () {
    var selectedCategory = $(this).text();
    $("#dropdownMenuButton").text(selectedCategory);
});


