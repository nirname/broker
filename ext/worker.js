// console.log('Worker loaded');

// chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
//     console.log("Broker says: I have got a message", message);
//     if (message.result !== undefined) {
//         // Message received from content script with the calculation result
//         var result = message.result;
//         document.getElementById('result').textContent = result;
//         // Process the result and take actions in your extension
//         // Show the result in your extension UI or perform any other necessary tasks
//     }
// });