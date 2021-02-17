// task 01

function upperCase(str) { 
    RegExp = /^[A-Z]/;
    if (RegExp.test(str)) {
        console.log(`String's not starts with uppercase character`);
    } else { 
        console.log(`String's starts with uppercase character`);
    } 
}

upperCase('regexp');
upperCase('RegExp');
