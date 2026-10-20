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

$(document).ready(function() {
        $("#miFormulario").submit(function(event) {
            var esValido = true;
            
           
            $(".error-msg").hide();
            
        
            if ($("#nombre").val().trim() === "") {
                $("#error-nombre").show();
                esValido = false;
            } 
            if ($("#apellido").val().trim() === "") {
                $("#error-apellido").show();
                esValido = false;
            } 
            if ($("#email").val().trim() === "") {
                $("#error-email").show();
                esValido = false;
            }
            if ($("#telefono").val().trim() === "") {
                $("#error-telefono").show();
                esValido = false;
            }
            if ($("#fecha").val() === "") {
                $("#error-fecha").show();
                esValido = false;
            }
            if ($("#mensaje_u_observaciones").val().trim() === "") {
                $("#error-mensaje").show();
                esValido = false;
            }

           
            if ($("#region").val() === "") {
                $("#error-region").show();
                esValido = false;
            }
            if ($("#carrera").val() === "") {
                $("#error-carrera").show();
                esValido = false;
            }

       
            if (!$("input[name='nivel_educacional']:checked").val()) {
                $("#error-nivel").show();
                esValido = false;
            }

         
            if ($("input[name='areas_interes']:checked").length === 0) {
                $("#error-areas").show();
                esValido = false;
            }

            if (esValido === false) {
                event.preventDefault();
            }
        });
    });