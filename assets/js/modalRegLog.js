var isSignUp = true;

var modalElement = `
<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">${isSignUp ? 'Registration' : 'Login'}</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <form>
          ${isSignUp ? `
          <div class="form-group">
            <label for="user-name" class="col-form-label">Name:</label>
            <input type="text" class="form-control" id="user-name">
          </div>
          ` : ''}
          <div class="form-group">
            <label for="email-name" class="col-form-label">Email:</label>
            <input type="text" class="form-control" id="email-name">
          </div>
          <div class="form-group">
            <label for="password-name" class="col-form-label">Password:</label>
            <input type="password" class="form-control" id="password-name">
          </div>
          ${isSignUp ? `
          <div class="form-group">
            <label for="repeat-password-name" class="col-form-label">Repeat password:</label>
            <input type="password" class="form-control" id="repeat-password-name">
          </div>
          ` : ''}
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary close-footer" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary btn-action">${isSignUp ? `Register` : `Login`}</button>
      </div>
    </div>
  </div>
</div>
`;

$("body").append(modalElement);

function updateModalContent() {
  var modalTitle = isSignUp ? 'Registration' : 'Login';
  var modalButton = isSignUp ? 'Register' : 'Login';

  $("#exampleModalLabel").text(modalTitle);
  $(".btn-action").text(modalButton);

  if (isSignUp) {
    $("#user-name").parent().show();
    $("#repeat-password-name").parent().show();
  } else {
    $("#user-name").parent().hide();
    $("#repeat-password-name").parent().hide();
  }
}

$("body").on("click", ".home-btn-start, .btn-header-signup", function () {
  isSignUp = true;
  updateModalContent();
  $("#exampleModal").modal("show");
});

$("body").on("click", ".btn-header-login", function () {
  isSignUp = false;
  updateModalContent();
  $("#exampleModal").modal("show");
});

$("body").on("click", ".close, .close-footer", function () {
  $("#exampleModal").modal("hide");
});

function performAction() {
  var name = $("#user-name").val();
  var email = $("#email-name").val();
  var password = $("#password-name").val();

  if (isSignUp) {
    var repeatPassword = $("#repeat-password-name").val();

    if (password !== repeatPassword) {
      alert("Passwords do not match");
      return;
    }

    registerUser(name, email, password);
  } else {
    loginUser(email, password);
  }
}

function registerUser(name, email, password) {
  var favoriteEntity = {
    Username: "" + name,
    Email: "" + email,
    Password: "" + password
  };
  var dataToSend = JSON.stringify(favoriteEntity);

  console.log(dataToSend);
  $.ajax({
    url: "rest/register",
    type: "POST",
    contentType: "application/json",
    dataType: "json",
    data: dataToSend,
    success: function (response) {
      var token = response.jwt_token;

      localStorage.setItem("jwt_token", token);
      updateNavbar();
      window.location.href = "#income";
      $("#exampleModal").modal("hide"); 
      toastr.success("Reg");
      console.log(response, "success register user");
    },
    error: function (xhr, status, error) {
      if (xhr.status === 401) {
        toastr.error("Validation failed: Invalid input");
      } else {
        console.log("reg fail");
        console.error(error);
      }
    }
  });
}

function loginUser(email, password) {
  var favoriteEntity = {
    Email: "" + email,
    Password: "" + password
  };
  var dataToSend = JSON.stringify(favoriteEntity);

  console.log(dataToSend);
  $.ajax({
    url: "rest/login",
    type: "POST",
    contentType: "application/json",
    dataType: "json",
    data: dataToSend,
    success: function (response) {
      var token = response.jwt_token;

      localStorage.setItem("jwt_token", token);
      updateNavbar();
      window.location.href = "#income";
      $("#exampleModal").modal("hide");
      toastr.success("Reg");
      console.log(response, "success login user");
    },
    error: function (xhr, status, error) {
      if (xhr.status === 401) {
        toastr.error("Validation failed: Invalid input");
      } else {
        console.log("login fail");
        console.error(error);
      }
    }
  });
}

$("body").on("click", ".btn-action", function () {
  performAction();
});
