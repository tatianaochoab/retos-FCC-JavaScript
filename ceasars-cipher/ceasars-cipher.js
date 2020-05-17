function rot13(str) {
    str = str.toUpperCase();
    let texto = "";
    for (let i = 0; i < str.length; i++) {
        var letra = str.charAt(i);
        var ascii = str.charCodeAt(i);
        if (ascii >= 65 && ascii <= 90) {
            if (ascii + 13 > 90) {
                ascii = (((ascii + 13) - 90) + 64);
                texto += String.fromCharCode(ascii);
            } else {
                texto += String.fromCharCode(ascii + 13);
            }
        } else {
            texto += letra;
        }
    }
    return texto;
}

rot13("SERR PBQR PNZC");