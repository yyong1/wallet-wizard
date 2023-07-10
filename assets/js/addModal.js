// Modal for adding new expense

// if for future use in the 
// const idToAddExpInc = utils.getCurrentUserId();
const idToAddExpInc = 5;
var categories = []; // global variable to choose category from dropdown menu
var accounts = []; // global variable to choose account from dropdown menu

function getCategoryToSelect() {
  $.ajax({
    url: "rest/expenses_by_id/" + idToAddExpInc,
    method: "GET",
    contentType: "application/json",
    dataType: "json",
    success: function (response) {
      console.log("Success: ", response);
      categories = response;
      console.log("categories: ", categories);

      // var dropdown = $("#dropdownMenuButtonToAdd");
      var optionCategroy = "";
      for (var i = 0; i < categories.length; i++) {
        var category = categories[i];
        console.log("category in loop: ", category);
        optionCategroy += `<option class="dropdown-item">${category.CategoryName}</option>`;
      }
      $(".dropdown-menu-category").append(optionCategroy);
    },
    error: function (xhr, status, error) {
      console.log("Error to get category list: ", error);
    }
  });
};

function getAccountToSelect() {
  $.ajax({
    url: "rest/accounts_by_id/" + idToAddExpInc,
    method: "GET",
    contentType: "application/json",
    dataType: "json",
    success: function (response) {
      console.log("Success: ", response);
      accounts = response;
      console.log("accounts array -->: ", accounts);

      // var dropdown = $("#dropdownMenuButtonToAdd");
      var optionAccount = "";
      for (var i = 0; i < accounts.length; i++) {
        var account = accounts[i];
        console.log("account in loop: ", account);
        optionAccount += `<option class="dropdown-item">${account.AccountName}</option>`;
      }
      $(".dropdown-menu-account").append(optionAccount);
    },
    error: function (xhr, status, error) {
      console.log("Error to get account list: ", error);
    }
  });
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
              <button class="btn btn-secondary btn-dropdown-toggle-category" type="button" id="dropdownMenuButtonToAdd" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Choose category
              </button>
              <select class="dropdown-menu-category" aria-labelledby="dropdownMenuButtonToAdd">
                
              </select>
            </div>
          </div>

        <div class="form-group">
          <div class="dropdown">
            <button class="btn btn-secondary btn-dropdown-toggle-account" type="button" id="dropdownMenuButtonToAddAcc" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Choose account
            </button>
            <select class="dropdown-menu-account" aria-labelledby="dropdownMenuButtonToAddAcc">
              
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
        <button type="button" class="btn btn-primary btn-action-add-exp-inc">Insert${addModalFor ? ' expense' : ' income'}</button>
      </div>
    </div>
  </div>
</div>
`;

$("body").append(addModal);

$("body").on("click", ".btn-add-expenses", function () {
  $("#addExpIncModal").modal("show");
  getCategoryToSelect();
  getAccountToSelect();
});

// datepicker try 

// $(function () {
//   $('#datetimepicker1').datetimepicker();
// });

// $(function () {
//   const currentDate = new Date();
//   const currentDateTimeString = currentDate.toISOString().split('T')[0];
//   $('#date-input').val(currentDateTimeString);

//   $('#date-input').datepicker({
//     format: "yyyy-mm-dd",
//     autoclose: true,
//     todayHighlight: true
//   });
// });
// $(function () {
//   $('#date-input').datetimepicker({
//     format: 'YYYY-MM-DD',
//     useCurrent: false
//   });
//   // Set initial date value
//   const currentDate = moment().format('YYYY-MM-DD');
//   $('#date-input').val(currentDate);
// });

$("body").on("click", ".close, .close-footer", function () {
  $("#addExpIncModal").modal("hide");
});

$('.btn-dropdown-toggle-category').click(function () {
  $('.dropdown-menu-category').toggle();
});

$('.btn-dropdown-toggle-account').click(function () {
  $('.dropdown-menu-account').toggle();
});

$("body").on("click", ".btn-action-add-exp-inc", function () {
  addExpense();
  $("#addExpIncModal").modal("hide");
});

// to get value from dropdown
var selectedValueCategory;
var selectedValueAccount;

$('select.dropdown-menu-category').on('change', function () {
  selectedValueCategory = $(this).val();
});

$('select.dropdown-menu-account').on('change', function () {
  selectedValueAccount = $(this).val();
});

function getCategoryIdLoop(catName) {
  for (var i = 0; i < categories.length; i++) {
    if (categories[i].CategoryName === catName) {
      return categories[i].CategoryID;
    }
  }
};

function getAccountIdLoop(accName) {
  for (var i = 0; i < accounts.length; i++) {
    if (accounts[i].AccountName === accName) {
      return accounts[i].AccountID;
    }
  }
};

function addExpense() {
  var expenseIncomeName = $("#expense-income-name-input").val();
  var amount = $("#amount-name-input").val();
  var category = selectedValueCategory;
  var account = selectedValueAccount;
  var subCategoryIdForAdd;
  var catID = getCategoryIdLoop(category);
  var subName = expenseIncomeName;
  var usID = utils.getCurrentUserId()
  var accID= getAccountIdLoop(account);
  var dat=new Date().toISOString().split('T')[0];

  var expenseIncomeData = {
    SubCategoryID: subCategoryIdForAdd,
    Amount: amount,
    UserID: usID,
    CategoryID: catID,
    AccountID: accID,
    CurrencyID: 1,
    Date: dat,
    TimeFrameID: 1
  };

  var subcategoryData = {
    CategoryID: catID,
    SubCategoryName: subName
  };
  
  // Step 1: Add Subcategory
  $.ajax({
    url: 'rest/subcategory_add',
    type: 'POST',
    data: JSON.stringify(subcategoryData),
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
            url: 'rest/add_expense',
            type: 'POST',
            data: JSON.stringify(expenseIncomeData),
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




  //console.log("add modal expense/income: ", expenseIncomeData);

  /*var urls = addModalFor ?
    ['rest/add_expense_name_subcategory', 'rest/add_amount_expense', 'rest/add_subcategory_expense']
    : ['rest/add_income_name', 'rest/add_amount_income', 'rest/add_categor_income'];

  var datatosent = JSON.stringify(expenseIncomeData);

  console.log("data to send: ", datatosent);
  $.each(urls, function (i, url) {
    console.log("url from each ajax: ", url);
    $.ajax({
      url: url,
      type: 'POST',
      data: datatosent,
      contentType: 'application/json',
      dataType: 'json',
      success: function (response) {
        console.log("Success: ", response);
      },
      error: function (xhr, status, error) {
        console.log("Error: ", error);
      }
    });
  });*/

 

