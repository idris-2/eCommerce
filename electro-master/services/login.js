document.addEventListener("DOMContentLoaded", function() {
    // Find the login form
    var loginForm = document.getElementById("loginForm");
    if (loginForm) {
        // Find the submit button within the login form
        var loginButton = loginForm.querySelector(".button");
        if (loginButton) {
            loginButton.addEventListener("click", function(event) {
                event.preventDefault(); // Prevent form submission

                // Retrieve input values
                var username = loginForm.querySelector("#user").value;
                var password = loginForm.querySelector("#pass").value;

                // Load the JSON data from a file
                fetch("json/users.json")
                    .then(response => response.json())
                    .then(data => {
                        // Check if the entered username and password match any entries
                        var found = data.users.find(user => user.username === username && user.password === password);
                        if (found) {
                            console.log("Login successful.");
                            window.location.href = "index.html";
                        } else {
                            console.log("Invalid username or password.");
                        }
                    })
                    .catch(error => console.error("Error loading JSON:", error));
            });
        } else {
            console.error("Login button not found within the login form.");
        }
    } else {
        console.error("Login form not found.");
    }
});
