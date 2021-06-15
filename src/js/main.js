

function convertBinCode(){
    var binCode = document.querySelector("#binCode");
    document.querySelector("#convertedNumber").innerHTML = bin2dec(binCode.value);
}


function bin2dec(binCode){

    var dec = 0;

    for(var i = binCode.length - 1; i >= 0; i--){
        dec += binCode[i] * (2 ** (binCode.length - 1 - i));
    }

    return dec;

}