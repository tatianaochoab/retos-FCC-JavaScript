function convertToRoman(num) {

    let numberRoman = ["I", "V", "X", "L", "C", "D", "M", "V_", "X_"];
    var cadena = "" + num;
    console.log(cadena);
    var cadRoman = "";
    let j = 0;
    for(let i = cadena.length - 1; i >= 0; i--){
        cadRoman = convertCifra(cadena.charAt(i), numberRoman[j], numberRoman[j + 1], numberRoman[j + 2]) + cadRoman;
        j = j + 2;
    }
    return cadRoman;

}

function convertCifra(cifra, n, m, r, ) {
    var cadRoman = "";
    switch (parseInt(cifra)) {
        case 0:
            cadRoman = "";
            break;
        case 1:
            cadRoman = n;
            break;
        case 2:
            cadRoman = n + n;
            break;
        case 3:
            cadRoman = n + n + n;
            break;
        case 4:
            cadRoman = n + m;
            break;
        case 5:
            cadRoman = m;
            break;
        case 6:
            cadRoman = m + n;
            break;
        case 7:
            cadRoman = m + n + n;
            break;
        case 8:
            cadRoman = m + n + n + n ;
            break;
        case 9:
            cadRoman = n + r;
            break;
        default:
            break;
    };
    return cadRoman;
}

console.log(convertToRoman(323));
console.log(convertToRoman(867));
console.log(convertToRoman(56));
console.log(convertToRoman(712));
