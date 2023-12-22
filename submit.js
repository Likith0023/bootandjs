document.getElementById('orderForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevents the default form submission

    // Get form data
    const formData = new FormData(this);

    // Convert form data to an object
    const formObject = {};
    formData.forEach(function (value, key) {
        formObject[key] = value;
    });

    // Send the form data to the server using fetch (POST request)
    fetch('submit.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formObject)
    })
        .then(response => {
            // Handle the response from the server
            console.log(response);
            // Redirect or show a success message to the user
        })
        .catch(error => {
            // Handle any errors that occur during the fetch operation
            console.error('Error:', error);
        });
});
