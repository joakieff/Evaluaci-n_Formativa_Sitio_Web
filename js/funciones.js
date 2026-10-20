function apagarAmpolleta() {
            document.getElementById("imgApagada").style.display = "block";
            document.getElementById("imgPrendida").style.display = "none";
        }

        function encenderAmpolleta() {
            document.getElementById("imgApagada").style.display = "none";
            document.getElementById("imgPrendida").style.display = "block";
        }
function sumaDosNumeros(){
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let suma = num1 + num2;
    document.getElementById("resultado").innerText = suma;
    return suma;
}

function restaDosNumeros(){
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let resta = num1 - num2;
    document.getElementById("resultado").innerText = resta;
    return resta;
}

function multiplicaDosNumeros(){
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let multiplicacion = num1 * num2;
    document.getElementById("resultado").innerText = multiplicacion;
    return multiplicacion;
}

function divideDosNumeros(){
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let division = num1 / num2;
    document.getElementById("resultado").innerText = division;
    return division;
}

