document.addEventListener("DOMContentLoaded", function () {
    document.getElementById('myForm').addEventListener('submit', function (e) {
        e.preventDefault(); // Prevent form submission

        // Generate a random number between 1 and 100
        var randomNumber = Math.floor(Math.random() * 10000) + 1;

        // Display the random number in the result div
        document.getElementById('result').style.display = 'block';
        // document.getElementById('offerHeading').style.display = 'block';
        document.getElementById('offerResult').textContent = randomNumber + " Руб";
    });
});