  document.getElementById("bmiForm").addEventListener("submit", function(event) {
        event.preventDefault();

        const height = parseFloat(document.getElementById("Height").value);
        const weight = parseFloat(document.getElementById("Weight").value);
        const result = document.getElementById("result");

        if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
            result.innerHTML = "Please enter valid positive numbers for height and weight.";
            result.style.color = "red";
            return;
        }

        const heightInMeters = height / 100;
        const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(2);

        let message = `Your BMI is: ${bmi}<br>`;
        if (bmi < 18.6) {
            message += "You are Underweight.";
        } else if (bmi >= 18.6 && bmi <= 24.9) {
            message += "You have Normal weight.";
        } else {
            message += "You are Overweight.";
        }

        result.innerHTML = `<h3>${message}</h3>`;
        result.style.color = "#333";
    });
