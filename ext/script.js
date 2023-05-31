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

document.addEventListener("DOMContentLoaded", function () {
    let fillInButton = document.getElementById("fillInButton");
    fillInButton.addEventListener("click", function () {
        // Perform the scanning functionality here

        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            let tab = tabs[0];

            if(!tab) return;
            chrome.scripting.executeScript({
                target: { tabId: tab.id },
                func: () => {
                    function onTabReady() {
                        // Your code here
                        fillInTargetForm();
                    }

                    // Check if the document is ready
                    if (document.readyState === 'complete') {
                        // If the document is already loaded, execute the function immediately
                        onTabReady();
                    } else {
                        // Otherwise, wait for the 'DOMContentLoaded' event to execute the function
                        document.addEventListener('DOMContentLoaded', onTabReady);
                    }
                }
            });
        });

    }, { passive: true });
});

