function ceknilai (nilai){

    if (nilai >100){
        console.log("Aduh km salah input nih");
    } else if (nilai >=90){
        console.log("nilai Anda adalah A");
    } else if (nilai >=75){
        console.log("nilai Anda adalah B");
    } else if (nilai >=60){
        console.log("nilai Anda adalah C");
    } else if (nilai >=50){
        console.log("nilai Anda adalah D");
    } else if (nilai < 50){
        console.log("yah km ga lulus");
    } else { return ("masukan nilai kamu");
    }

}

let nilai = "72"
console.log(ceknilai(nilai))