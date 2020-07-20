const matematika = 80;
const bahasaIndonesia = 90;
const bahasaInggris = 89;
const ipa = 69;

if(matematika, bahasaIndonesia, bahasaInggris, ipa === '') {
    console.log('Semua nilai harus diisi')
} else {

    let average = (matematika + bahasaIndonesia + bahasaInggris + ipa) / 4;
    console.log(`Rata-rata = ${average}`);
    
    let grade = "";
    if(average >= 90) grade = "A"
    else if(average >= 80) grade = "B"
    else if(average >= 70) grade = "C"
    else if(average >= 60) grade = "D"
    else grade = "E";
    console.log(`Grade = ${grade}`);
}
