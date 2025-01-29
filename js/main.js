// fungsi untuk menghitung BMI
function hitung_BMI (event) {

    // menghentikan submit default dari form (yang biasanya akan mereset halaman)
    event.preventDefault();

    // mengambil nilai dari input berat badan dan tinggi badan
    let berat_badan = parseFloat(document.getElementById('weight').value);
    let tinggi_badan = parseFloat(document.getElementById('height').value);

    // menghitung BMI
    let bmi = berat_badan / (tinggi_badan * tinggi_badan);

    // menentukan kategori BMI berdasarkan nilai BMI
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

    // menampilkan nilai BMI dan kategori BMI
    document.getElementById('bmi').textContent = bmi.toFixed(2);
    document.getElementById('category').textContent = category;
}