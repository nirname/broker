

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

