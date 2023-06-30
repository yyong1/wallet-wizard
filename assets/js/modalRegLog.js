var modalElement = `
  <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Registration</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <form>
            <div class="form-group">
              <label for="user-name" class="col-form-label">Name:</label>
              <input type="text" class="form-control" id="user-name">
            </div>
            <div class="form-group">
              <label for="email-name" class="col-form-label">Email:</label>
              <input type="text" class="form-control" id="email-name">
            </div>
            <div class="form-group">
              <label for="password-name" class="col-form-label">Password:</label>
              <input type="password" class="form-control" id="password-name"> <!-- Изменено на type="password" -->
            </div>
            <div class="form-group">
              <label for="repeat-password-name" class="col-form-label">Repeat password:</label>
              <input type="password" class="form-control" id="repeat-password-name"> <!-- Изменено на type="password" -->
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary close-footer" data-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary btn-registration">Register</button>
        </div>
      </div>
    </div>
  </div>
`;

$("body").append(modalElement);

$("body").on("click", ".home-btn-start", function () {
  $("#exampleModal").modal("show");
});

$("body").on("click", ".close, .close-footer", function () {
  $("#exampleModal").modal("hide");
});

function registerUser(name, email, password) {
  $.ajax({
    url: "rest/register",
    type: "POST",
    contentType: "application/json",
    dataType: "json",
    data: {
      name: name,
      email: email,
      password: password
    },
    success: function(response) {
      var token = response.jwt_token;

      localStorage.setItem("jwt_token", token);

      window.location.href = "#expenses";

      console.log(response, 'success register user');
    },
    error: function(xhr, status, error) {
      console.error(xhr, status, error);
    }
  });
}

$("body").on("click", ".btn-registration", function () {
  var name = $("#user-name").val();
  var email = $("#email-name").val();
  var password = $("#password-name").val();
  console.log(name, email, password);
  registerUser(name, email, password);
});
