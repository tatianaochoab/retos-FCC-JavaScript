function telephoneCheck(str) {
    const area = 1;
    let decimal = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    let numNew = "";
    let numNewSymbol = "";
    for (let i = 0; i < str.length; i++) {
        let caracter = str.charAt(i);
        for (let j = 0; j < decimal.length; j++) {
            let decimalNew = decimal[j];
            if (caracter === decimalNew) {
                numNew += caracter;
                numNewSymbol += caracter;
            }
        }
        if (caracter == "(" || caracter == ")") {
            numNewSymbol += caracter;
        }
    }
    if (str.charAt(0) === "-"){
        return false;
    }
    if (numNew.length === 10 && numNewSymbol.length === 10) {
        return true;
    } else if (numNew.length === 11 && numNewSymbol.length === 11) {
        if (numNew.charAt(0) == area) {
            return true;
        }
    } else if (numNew.length === 10 && numNewSymbol.length === 12 && numNewSymbol.charAt(0) === "(" && numNewSymbol.charAt(4) === ")") {
        return true;
    } else if (numNew.length === 11 && numNewSymbol.length === 13) {
        if (numNew.charAt(0) == area && numNewSymbol.charAt(1) === "(" && numNewSymbol.charAt(5) === ")") {
            return true;
        }
    }
    return false;
}

telephoneCheck("555-555-5555");