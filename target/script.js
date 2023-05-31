document.addEventListener("DOMContentLoaded", function () {
    let calculationTimeout = null;
    document.getElementById('myForm').addEventListener('submit', function (e) {
        e.preventDefault(); // Prevent form submission
        document.getElementById('result').style.display = 'none';
        
        startCalculations = () => {
            document.getElementById('result').style.display = 'block';
            document.getElementById('offerResult').textContent = "Формируется";
            // simulate calculations
            calculate = () => {
                document.getElementById('result').style.display = 'block';
                var randomNumber = Math.floor(Math.random() * 10000) + 1;
                document.getElementById('offerResult').textContent = randomNumber + " Руб";
            }

            calculationTimeout = setTimeout(calculate, 3000);
        };
        
        startCalculations();
    });

    // Clear the timeout when the tab is closed
    window.addEventListener('beforeunload', function () {
        if (calculationTimeout) {
            clearTimeout(calculationTimeout);
        }
    });
});