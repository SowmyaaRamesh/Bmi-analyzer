$(document).ready(function() {
    $('.result-container').hide();
});
$(document).ready(function() {
    $('#tips').hide();
});


function calculateBMI() {
    const height = Number(document.getElementById("height").value) / 100;
    const weight = Number(document.getElementById("weight").value);
    const bmi_value = document.getElementById("bmi-value");
    const bmi_category = document.getElementById("bmi-category");
    const suggestion = document.getElementById("suggestion");
    const submit = document.getElementById("submit");

    const bmi = Math.round((weight / (height * height)) * 10) / 10;

    let result = "";
    let tips = "";

    if (bmi < 16) {
        result = "Severely underweight a.k.a 'Stick' ";
        tips = "Being underweight can be a sign of underlying health issues. See your doctor or dietician for an evaluation. Add dairy products, carbohydrates and healthy fats into your diet."
    } else if (bmi < 18.5) {
        result = "Underweight a.k.a 'Pencil' ";
        tips = "You may not be eating enough healthy foods with key nutrients to fuel your body. This can cause malnutrition.You need to take in more carbs and healthy fats. Make an appointment with your primary doctor or dietician. "
    } else if (bmi < 25) {
        result = "Healthy Weight (Please don't try any diets)";
        tips = "Yay! You're healthy. Add more fruits and vegetables in your diet if you aren't doing it already. Incorporate exercise into your daily routine to stay fit."
    } else if (bmi < 30) {
        result = "Overweight a.k.a 'chubby' ";
        tips = "Mmm, now that's a concern. You have to make changes to your eating habits and be more physically active.Cut down on processed foods and eat more fruits and vegetables. It's also advisable to consult your physician to see if there are any underlying health issues."
    } else {
        result = "Obese a.k.a ' a lil too chubby' ";
        tips = "Uh-oh, looks like we have a problem here. But not to worry. It's never too late to start a healthy journey. Don't try crash diets. They do more harm than good. Focus on gradually changing your eating habits and make sure to add exercise into your routine."
    }
    const value = `Your BMI is: ${bmi}`;
    const category = `${result}`

    bmi_value.firstElementChild.innerHTML = value;
    bmi_category.firstElementChild.innerHTML = result;
    suggestion.firstElementChild.innerHTML = tips;
    $(document).ready(function() {
        $('.result-container').show();
    });
    $(document).ready(function() {
        $('#tips').show();
    });

    setTimeout(() => { document.getElementById('results').scrollIntoView() }, 200);
}


submit.addEventListener("click", calculateBMI);