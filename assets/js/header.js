function updateNavbar() {
  var navbar;
  if (isUserLoggedIn()) {
    navbar = `
      <ul class="primary-menu">
          <li><a href="#expenses" onclick="expenses.getexpenses()"    class="">Expenses</a></li>
          <li><a href="#income" onclick="income.getincome()"    class="">Income</a></li>
          <li><a href="#categories" onclick="categories.getcategories()"   class="">Categories</a></li>
          <li><a href="#accounts" onclick="accounts.getaccounts()"    class="">Accounts</a></li>
          <button type="button" class="btn btn-secondary btn-header-logout">Log out</button>
      </ul>
    `;
  } else {
    navbar = `
      <ul class="primary-menu">
          <li><a href="#home" class="active">Home</a></li>
          <button type="button" class="btn btn-primary btn-header-login">Log in</button>
          <button type="button" class="btn btn-secondary btn-header-signup">Sign up</button>
      </ul>
    `;
  }
  $('#navbar').html(navbar);
}

$("body").on("click", ".btn-header-logout", function () {
  localStorage.removeItem("jwt_token");
  updateNavbar();
  window.location.href = "#home";
});

function isUserLoggedIn() {
  var token = localStorage.getItem("jwt_token");
  return token !== null && token !== undefined;
}

updateNavbar();
