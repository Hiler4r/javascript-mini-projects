function calculateBMI() {
    let weight = document.getElementById("weight").value;
    let height = document.getElementById("height").value;

    if (weight === "" || height === "" || weight <= 0 || height <= 0) {
        alert("Please enter valid values for weight and height!");
        return;
    }

    height = height / 100;
    let bmi = weight / (height * height);
    bmi = bmi.toFixed(1);

    let status = "";
    let recommendation = "";

    if (bmi < 18.5) {
        status = "Underweight";
        recommendation = "You should eat more balanced meals and gain some healthy weight.";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        status = "Normal";
        recommendation = "Great job! Maintain your healthy lifestyle.";
    } else if (bmi >= 25 && bmi <= 29.9) {
        status = "Overweight";
        recommendation = "Consider regular exercise and watch your diet.";
    } else {
        status = "Obese";
        recommendation = "Consult a healthcenter  for a proper health plan.";
    }

    document.getElementById("bmiResult").innerText = `BMI Result: ${bmi}`;
    document.getElementById("bmiStatus").innerText = `Status: ${status}`;
    document.getElementById("bmiRecommendation").innerText = `Recommendation: ${recommendation}`;
}