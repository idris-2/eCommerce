$("document").ready(function() {
    function submitForm() {
        var username = $("#username").val();
        var password = $("#password").val();

        var formData = {
            username: username,
            password: password
        };

        // Send the data to the server using AJAX
        $.ajax({
            type: "POST",
            url: "json/users.json", 
            data: JSON.stringify(formData),
            contentType: "application/json",
            success: function(response) {
                console.log("Data saved successfully:", response);

            },
            error: function(xhr, status, error) {
                console.error("Error saving data:", error);
                
            }
        });
    }

    $(".button").click(submitForm);
});
