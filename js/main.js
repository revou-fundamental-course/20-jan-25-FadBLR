function hitung_BMI (event) {

    event.preventDefault();

    let berat_badan = parseFloat(document.getElementById('weight').value);
    let tinggi_badan = parseFloat(document.getElementById('height').value);

    let bmi = berat_badan / (tinggi_badan * tinggi_badan);

    let category = '';

    if (bmi < 18) {
        category = 'Kurus';
    } else if (bmi >= 18 && bmi < 25) {
        category = 'Normal';
    } else if (bmi >= 25 && bmi < 27) { 
        category = 'Gemuk';
    } else {
        category = 'Obesitas';
    } 

    document.getElementById('bmi').textContent = bmi.toFixed(2);
    document.getElementById('category').textContent = category;

}