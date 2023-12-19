// // 1. Mencari Keliling Persegi Panjang
// // 2. Memasukan nilai panjang dan lebar
// // 3. Menghitung rumus : 2*P + 2*L
// // 4. Menampilkan hasil

// // Memasukan nilai panjang, lebar

// let panjang =  150;
// let lebar = 40;

// // Menghitung rumus

// // let hasil = 2 * panjang + 2 * lebar;

// // Menampilkan hasil

// console.log( "Keliling Persegi Panjang adalah: " + hasil)

// // 2. Luas Lingkaran

// // phi dan r

// let phi = 3.14;
// let r = 10;

// let hasil2 = phi * r * r;

// console.log( "Hasilnya adalah: " + hasil2)

// // 3. Keliling Persegi

// let lp = 64;
// let sisi = Math.sqrt(lp)

// let hasilNya = 4 * sisi;

// console.log (hasilNya)

// // 4. Algoritma KTP 

// // input
// let umur = 15;

// // proses
// if (umur >= 17){
//     result = "Membuat KTP"
// } else {
//     result = "Jangan Jangan Dulu"
// }

// // output
// console.log(result)

// // 5. Kejuruan PPLG (nilai)

// // input 
// let PABP = 86;
// let MTK = 82;
// let DPK = 77;
// let rata = (PABP + MTK + DPK) / 3;

// // proses 
// if (rata >=80 && rata <=100){
//     grade = "A";
// }
// else if (rata >=75 && rata <=80){
//     grade = "B";
// }
// else if (rata >=65 && rata <=75){
//     grade = "C";
// }    
// else if (rata >=45 && rata <=65){
//     grade = "D";
// }  
// else if (rata >=0 && rata <=45){
//     grade = "E";
// }  
// else if (rata >= 0){
//     grade = "K";
// }
// // output
// console.log( "Rata-rata nilai tersebut adalah " + rata)
// console.log( "Grade yang diperoleh adalah " + grade)

// window.alert("Aku Mah Masih Pemula, Ajarin Dong Puh Sepuh");


// paramater 

console.log('Mendeklarasikan Fungsi')
console.log('----------------------')

function penambahan(parameter1, parameter2){
    console.log(parameter1+parameter2)
}

var pertambahan = function (parameter3, parameter4){
    console.log(parameter3 + parameter4)
}

penambahan(10, 2)
pertambahan(13, 2)

// // hoisting 

// console.log('Javascript Hoisting')
// console.log('-------------------')

// sapaSiManusia()

// function sapaSiManusia (){
//     let manusia = {
//         nama : "Haqiqi",
//         pekerjaan : "Guru"
//     }

//     console.log(`Hai ${manusia.nama}, apakah benar anda seorang ${manusia.pekerjaan}?`)
//     console.log(manusia)
// }

// Bilangan Ganjil Genap

let bilangan = 22;

if (bilangan % 2 == 0){
    console.log("bilangan genap")
} else {
    console.log("bilangan ganjil")
}

// luas segitiga

let alas = 12;
let tinggi = 15;

const hasil  = 1/2 * alas * tinggi

console.log(hasil)

// Keliling lingkaran

let phi = 3.14;
let diameter = 20;

const hasil2 = Math.round(phi * diameter)   

console.log(hasil2)

// Luas PP

let panjang = 40;
let lebar = 25;

const hasil3 = panjang * lebar

console.log(hasil3)


// Menghitung umur

let tahunLahir = 2008;
let tahunSekarang = 2023;

const hasil4 = tahunSekarang - tahunLahir

console.log(hasil4 + ` tahun`)

// Jam ke Menit

let jam = 4;

const hasil5 = jam * 3600

console.log(hasil5)

// menentukan angka terbesar

let x = 40;
let y = 30;
let z = 25;

if (x > y && x > z) {
    console.log("bilangan satu terbesar")
} else if ( y > x && y > z ) {
    console.log("bilangan kedua terbesar")
} else if ( z > x && z > y ) {
    console.log("bilangan ketiga terbesar")
} 

// Program untuk memeriksan sebuah angka masukan user, termasuk negatif/positif dan genap/ganjil

let angka = 12;

if (angka >= 0 ) {
    adalah = "bilangan positif"
} else {
    adalah = "bilangan negatif"
}

if (angka %2 == 0) {
    adalah = "bilangan genap"
} else {
    adalah = "bilangan ganjil"
}

console.log(adalah)

// saklar on/off lampu

let saklar = 3;

if ( saklar == 0 ) {
    hasilnya = "OFF"
} else if  (saklar == 1) {
    hasilnya = "ON";
} else {
    hasilnya = "ERROR"
}

console.log(hasilnya)