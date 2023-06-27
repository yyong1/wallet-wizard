var UserLogin =  {

init: function () {

    if (localStorage.getItem("token") === null) {
      UserService.showGuestNavbar();
    } else {
      UserService.showUserNavbar();
    }
    $("#register-button").click(function () {
      UserService.validateRegisterForm();
    });
    $("#login-button").click(function () {
      UserService.validateLoginForm();
    });
  },


};