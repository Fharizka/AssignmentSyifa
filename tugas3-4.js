var nomor = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

let genap = [];
let ganjil = [];

let i = 0;

for (i; i <nomor.length; i++){
    if (nomor[i] %2 == 0){
        genap.push(nomor[i]);
    } else {ganjil.push(nomor[i]);
    }
}

console.log("output ganjil adalah " + ganjil)