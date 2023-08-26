const btnEl = document.getElementById('btn');
const resultEl = document.getElementById('result');
const weightConditionEl = document.getElementById('weightCondition');

const calculateBMI = () => {
    const weightValue = document.getElementById('weight').value / 100;
    const heightValue = document.getElementById('height').value;
    const bmiValue = weightValue / (heightValue * heightValue);
    resultEl.value = bmiValue.toFixed(2);
    if (bmiValue < 18.5) {
        weightConditionEl.innerText = 'Underweight';
    }
    else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
        weightConditionEl.innerText = 'Normal weight';
    }
    else if (bmiValue >= 25 && bmiValue <= 29.9) {
        weightConditionEl.innerText = 'Overweight';
    }
    else if (bmiValue >= 30) {
        weightConditionEl.innerText = 'Obesity';
    }
}

btnEl.addEventListener('click',calculateBMI)