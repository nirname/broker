document.addEventListener("DOMContentLoaded", function () {
    let fillInButton = document.getElementById("fillInButton");
    fillInButton.addEventListener("click", function () {
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            let tab = tabs[0];

            if(!tab) return;
            chrome.scripting.executeScript({
                target: { tabId: tab.id },
                func: () => {
                    function onTabReady() {
                        // Your code here
                        fillInTargetForm();
                        waitForResult();
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

chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
    console.log("Broker says: I have got a message", message);
    if (message.result !== undefined) {
        // Message received from content script with the calculation result
        var result = message.result;
        document.getElementById('result').textContent = result;
        // Process the result and take actions in your extension
        // Show the result in your extension UI or perform any other necessary tasks
    }
});

console.log("Loaded");
