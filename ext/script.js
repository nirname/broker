document.addEventListener("DOMContentLoaded", function () {
    let scrapeButton = document.getElementById("scrapeButton");
    scrapeButton.addEventListener("click", function () {
        // Perform the scanning functionality here
        scanCurrentPage();
    }, { passive: true });

    function scanCurrentPage() {
        // Add your code here to scan the current page
        console.log("Scanning the current page...");
    }
});