// Modal for adding new expense

// if for future use in the 
const idToAddInc = utils.getCurrentUserId();
var categoriesincome = []; // global variable to choose category from dropdown menu
var accountsincome = []; // global variable to choose account from dropdown menu

function CategoryToSelect() {
  $.ajax({
    url: "rest/income_by_id/" + idToAddInc,
    method: "GET",
    contentType: "application/json",
    dataType: "json",
    success: function (response) {
      console.log("Success: ", response);
      categoriesincome = response;
      console.log("categories: ", categoriesincome);

      // var dropdown = $("#dropdownMenuButtonToAdd");
      var optionCategroy = "";
      for (var i = 0; i < categoriesincome.length; i++) {
        var category = categoriesincome[i];
        console.log("category in loop: ", category);
        optionCategroy += `<option class="dropdown-item">${category.CategoryName}</option>`;
      }
      $(".dropdown-menu-category-income").append(optionCategroy);
    },
    error: function (xhr, status, error) {
      console.log("Error to get category list: ", error);
    }
  });
};

function AccountToSelect() {
  $.ajax({
    url: "rest/accounts_by_id/" + idToAddInc,
    method: "GET",
    contentType: "application/json",
    dataType: "json",
    success: function (response) {
      console.log("Success: ", response);
      accountsincome = response;
      console.log("accounts array -->: ", accountsincome);

      // var dropdown = $("#dropdownMenuButtonToAdd");
      var optionAccount = "";
      for (var i = 0; i < accountsincome.length; i++) {
        var account = accountsincome[i];
        console.log("account in loop: ", account);
        optionAccount += `<option class="dropdown-item">${account.AccountName}</option>`;
      }
      $(".dropdown-menu-account-income").append(optionAccount);
    },
    error: function (xhr, status, error) {
      console.log("Error to get account list: ", error);
    }
  });
};



var addModalFor = false;
var addModal = `
<div class="modal fade" id="addIncModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
              <button class="btn btn-secondary btn-dropdown-toggle-category" type="button" id="dropdownMenuButtonToAdd" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Choose category
              </button>
              <select class="dropdown-menu-category-income" aria-labelledby="dropdownMenuButtonToAdd">
                
              </select>
            </div>
          </div>

        <div class="form-group">
          <div class="dropdown">
            <button class="btn btn-secondary btn-dropdown-toggle-account" type="button" id="dropdownMenuButtonToAddAcc" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Choose account
            </button>
            <select class="dropdown-menu-account-income" aria-labelledby="dropdownMenuButtonToAddAcc">
              
            </select>
          </div>
        </div>

          <div class="form-group">
            <label for="amount-name" class="col-form-label">Amount:</label>
            <input type="text" class="form-control" id="amount-name-input-income">
          </div>

          <div class="form-group">
            <label for="expense-income-name" class="col-form-label">${addModalFor ? 'Expense name:' : 'Income name:'}</label>
            <input type="text" class="form-control" id="income-name-input">
          </div>

         <!-- <div class="form-group">
            <label for="date" class="col-form-label">Date:</label>
            <div class='input-group date' id='datetimepicker1'>
              <input type='text' class="form-control" id="date-input" />
              <span class="input-group-text">
                <i class="fas fa-calendar"></i>
              </span>
            </div>
          </div> -->

        </form>
      </div>

      <div class="modal-footer">
        <button type="button" class="btn btn-secondary close-footer" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary btn-action-add-inc">Insert${addModalFor ? ' expense' : ' income'}</button>
      </div>
    </div>
  </div>
</div>
`;

$("body").append(addModal);

$("body").on("click", ".btn-add-income", function () {
  $("#addIncModal").modal("show");
  CategoryToSelect();
  AccountToSelect();
});

$("body").on("click", ".close, .close-footer", function () {
  $("#addIncModal").modal("hide");
});

$('.btn-dropdown-toggle-category').click(function () {
  $('.dropdown-menu-category-income').toggle();
});

$('.btn-dropdown-toggle-account').click(function () {
  $('.dropdown-menu-account-income').toggle();
});

$("body").on("click", ".btn-action-add-inc", function () {
  addIncome();
  $("#addIncModal").modal("hide");
});

// to get value from dropdown
var selectedValueCategory;
var selectedValueAccount;

$('select.dropdown-menu-category-income').on('change', function () {
  selectedValueCategory = $(this).val();
});

$('select.dropdown-menu-account-income').on('change', function () {
  selectedValueAccount = $(this).val();
});

function getCategoryIdLoop(catName) {
  for (var i = 0; i < categoriesincome.length; i++) {
    if (categoriesincome[i].CategoryName === catName) {
      return categoriesincome[i].CategoryID;
    }
  }
};

function getAccountIdLoop(accName) {
  for (var i = 0; i < accountsincome.length; i++) {
    if (accountsincome[i].AccountName === accName) {
      return accountsincome[i].AccountID;
    }
  }
};

function addIncome() {
  var expenseIncomeName = $("#income-name-input").val();
  var amount = $("#amount-name-input-income").val();
  var category = selectedValueCategory;
  var account = selectedValueAccount;
  var subCategoryIdForAdd;
  var catID = getCategoryIdLoop(category);
  var subName = expenseIncomeName;
  var usID = utils.getCurrentUserId()
  var accID= getAccountIdLoop(account);
  var dat=new Date().toISOString().split('T')[0];

  var expenseIncomeDataIncome = {
    SubCategoryID: subCategoryIdForAdd,
    Amount: amount,
    UserID: usID,
    CategoryID: catID,
    AccountID: accID,
    CurrencyID: 1,
    Date: dat,
    TimeFrameID: 1
  };

  var subcategoryDataIncome = {
    CategoryID: catID,
    SubCategoryName: subName
  };

  
  // Step 1: Add Subcategory
  $.ajax({
    url: 'rest/subcategory_add',
    type: 'POST',
    data: JSON.stringify(subcategoryDataIncome),
    contentType: "application/json",
    dataType: "json",
    success: function (response) {
      console.log("SUBCATEGORY ADD: ", response);
      
      // Step 2: Get Subcategory ID
      $.ajax({
        url: 'rest/get_subcategory_id/' + catID + '/' + subName,
        type: 'GET',
        contentType: "application/json",
        dataType: "json",
        success: function (response) {
          subCategoryIdForAdd = response;
          console.log("SUBCATEGORY BY ID: ", response);
          
          // Step 3: Add Expense
          $.ajax({
            url: 'rest/add_income',
            type: 'POST',
            data: JSON.stringify(expenseIncomeDataIncome),
            contentType: "application/json",
            dataType: "json",
            success: function (response) {
              console.log("ADD EXPENSE: ", response);
              
              // Step 4: Update Account Expense
              $.ajax({
                url: 'rest/update_account_expense/' + catID + '/' + amount,
                type: 'PUT',
                contentType: "application/json",
                dataType: "json",
                success: function (response) {
                  console.log("Success: ", response);
                },
                error: function (xhr, status, error) {
                  console.log("Error: ", error);
                }
              });
            },
            error: function (xhr, status, error) {
              console.log("Error: ", error);
            }
          });
        },
        error: function (xhr, status, error) {
          console.log("Error: ", error);
        }
      });
    },
    error: function (xhr, status, error) {
      console.log("Error: ", error);
    }
  });
}

 

