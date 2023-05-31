function fillInTargetForm() {
    // Function to fill in the form fields
    let nameInput = document.getElementById('name');
    let emailInput = document.getElementById('email');
    let messageInput = document.getElementById('message');

    // Set the desired values for the form fields
    nameInput.value = 'John Doe';
    emailInput.value = 'johndoe@example.com';

    let submitButton = document.querySelector('#myForm button[type="submit"]');

    // Trigger a click event on the submit button
    let event = new MouseEvent('click', {
        view: window,
        bubbles: true,
        cancelable: true
    });
    submitButton.dispatchEvent(event);
}

function waitForResult() {
    console.log("WAIT FOR RESULT");

    let observer = new MutationObserver(function (mutationsList) {
        console.log("MUTATIONS DETECTED");
        for (let mutation of mutationsList) {
            result = document.querySelector('#result > p');
            value = result.textContent;
            // notify extension about changes
            chrome.runtime.sendMessage({ result: value });
        }
    });
    observer.observe(document.querySelector('body'), {
        childList: true, // Observe direct child nodes
        subtree: true, // Observe all descendant nodes
        attributes: true, // Observe attribute changes
        characterData: true, // Observe text content changes
    });
    
    // let observerTimeout = setTimeout(() => observer.disconnect(), 60000);
    window.addEventListener('beforeunload', function () {
        // if (observerTimeout) {
        //     clearTimeout(observerTimeout);
        // }
        if (observer) {
            observer.disconnect();
        }
    });
}