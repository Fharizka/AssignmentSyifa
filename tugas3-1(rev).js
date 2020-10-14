function cekhari (hari){

switch (hari){
    case "senin" : console.log ("besok hari selasa");
    break;
    case "selasa" : console.log ("besok hari rabu");
    break;
    case "rabu" : console.log ("besok hari kamis");
    break;
    case "kamis" : console.log ("besok hari jumat");
    break;
    case "jumat" : console.log ("besok hari sabtu");
    break;
    case "sabtu" : console.log ("besok hari minggu");
    break;
    case "minggu" : console.log ("besok hari senin");
    break;
}
}

let hari = "minggu"
console.log(cekhari(hari))