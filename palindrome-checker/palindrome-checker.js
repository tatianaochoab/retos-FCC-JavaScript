function palindrome(str) {
    str = str.toLowerCase();
    var newStr = "";
    var letter = "";
    var ascii = 0;
    for (var i = 0; i < str.length; i++) {
        letter = str.charAt(i);
        ascii = str.charCodeAt(i);

        if ((ascii >= 97 && ascii <= 122) || (ascii >= 48 && ascii <= 57)) {
            newStr += letter;

        }
    }
    for (var i = 0; i < str.length; i++) {
        if (newStr.charAt(i) !== newStr.charAt(newStr.length - 1 - i)) {
            return false;
        }
    }
    return true;
}

alert (palindrome("1 eye for of 1 eye." ));
