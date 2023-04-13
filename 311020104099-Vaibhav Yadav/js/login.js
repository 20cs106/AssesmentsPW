$(document).ready(function() {
    $('form').submit(function(event) {
        // Prevent the form from submitting normally
        event.preventDefault();

        // Get the username and password from the form
        var username = $('input[name=username]').val();
        var password = $('input[name=password]').val();

        // Send an AJAX request to the backend to validate the credentials
        $.ajax({
            type: 'POST',
            url: 'login.php',
            data: {
                username: username,
                password: password
            },
            success: function(response) {
                // If the credentials are valid, redirect the user to the home page
                if (response === 'valid') {
                    window.location.href = 'index.html';
                } else {
                    // Otherwise, display an error message
                    $('.error-message').text('Invalid username or password');
                }
            },
            error: function() {
                // If there's an error, display an error message
                $('.error-message').text('An error occurred. Please try again later.');
            }
        });
    });
});
