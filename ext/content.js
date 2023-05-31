function fillInTargetForm() {
    // Function to fill in the form fields
    var nameInput = document.getElementById('name');
    var emailInput = document.getElementById('email');
    var messageInput = document.getElementById('message');

    // Set the desired values for the form fields
    nameInput.value = 'John Doe';
    emailInput.value = 'johndoe@example.com';

    var submitButton = document.querySelector('#myForm button[type="submit"]');

    // Trigger a click event on the submit button
    var event = new MouseEvent('click', {
        view: window,
        bubbles: true,
        cancelable: true
    });
    submitButton.dispatchEvent(event);
}