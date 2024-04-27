document.addEventListener("DOMContentLoaded", function() {
  // Find the button
  var submitButton = document.querySelector("#registrationForm input[type='submit']");
  if (submitButton) {
      submitButton.addEventListener("click", function(event) {
          event.preventDefault(); // Prevent form submission

          // Retrieve input
          var username = document.querySelector("#username").value;
          var email = document.querySelector("#email").value;
          var password = document.querySelector("#password").value;

          // Create JavaScript object
          var userData = {
              username: username,
              email: email,
              password: password
          };

          // Convert to JSON
          var jsonData = JSON.stringify(userData);

          // Save JSON data
          console.log(jsonData);

      });
  } else {
      console.error("Submit button not found within the registration form.");
  }
});
