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
              <input type="text" class="form-control" id="password-name">
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
    url: "your_registration_endpoint",
    type: "POST",
    dataType: "json",
    data: {
      name: name,
      email: email,
      password: password
    },
    success: function(response) {
      // Generate JWT token
      // Assuming the token is returned in the response
      var token = response.token; 

      localStorage.setItem("jwt_token", token);

      // Redirect the user to the expenses page
      window.location.href = "#expenses";
    },
    error: function(xhr, status, error) {
      // Registration failed
      console.error(error);
    }
  });
}

$("body").on("click", ".btn-registration", function () {
  var name = $("#user-name").val();
  var email = $("#email-name").val();
  var password = $("#password-name").val();

  // Call the registerUser function with the registration data
  registerUser(name, email, password);
});
