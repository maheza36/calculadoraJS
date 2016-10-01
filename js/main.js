function myFunction() {
    document.readyState;
    recibirvalores();
}

    var recibirvalores = function(){
      var intnum1,intnum2;
      do{
        intnum1 = prompt("Ingrese su primer numero");
        if(isNaN(intnum1) || intnum1 === ""){
          console.log("no se ingreso un número valido");
        }
      }while(isNaN(intnum1) || intnum1 === "");

      do{
        intnum2 = prompt("Ingrese su segundo numero");
        if(isNaN(intnum2) || intnum2 === ""){
          console.log("no se ingreso un número valido");
        }
      }while(isNaN(intnum2) || intnum2 === "");

      intnum1 = parseFloat(intnum1);
      intnum2 = parseFloat(intnum2);
      recibiroperador(intnum1,intnum2);
  };

  var recibiroperador=function(intnum1,intnum2){
    var stroperador = prompt("ingrese el operador o identificador de su operación");
    seleccionaroperacion(stroperador,intnum1,intnum2);
  };

  var seleccionaroperacion = function(operador,intnum1,intnum2){
    var resultado;
      switch(operador) {
        //restar
        case "restar":
        case "less":
        case "LESS":
        case 'RESTAR':
        case '-':
        case 'menos':
        case 'MENOS':
        case 'res':
        case 'RES':
          resultado = restar(intnum1, intnum2);
        break;

        //dividir
        case "dividir":
        case "/":
        case "divide":
        case "DIVIDIR":
        case "DIVIDE":
        case "division":
        case "DIVISION":
          resultado = dividir(intnum1,intnum2);
        break;

        //sumar
        case "sumar":
        case "add":
        case "ADD":
        case 'SUMAR':
        case '+':
        case 'mas':
        case 'MAS':
          resultado = sumar(intnum1, intnum2);
        break;

        //multiplicar
        case "multiplicar":
        case "multiply":
        case "MULTIPLY":
        case 'MULTIPLICAR':
        case '*':
        case 'por':
        case 'POR':
        case 'mult':
        case 'MULT':
          resultado = multiplicar(intnum1, intnum2);
        break;
        default:
          resultado = "Signo no definido";
    }while(resultado === "Signo no definido");

    console.log(resultado);
    document.getElementById("demo").innerHTML = "El resultado es de " + intnum1 + " " + operador + " " + intnum2 + " es: " + resultado;
    //javascript:location.reload();

  };

  var restar = function(intv1,intv2){
    operador = "-";
    return (parseFloat(intv1) - parseFloat(intv2));
  };

  var  dividir = function (intv1, intv2) {
    if(intv2===0)
    {
      return "No se puede dividir entre cero";
    }
    else {
      operador = "/";
      return (parseFloat(intv1) / parseFloat(intv2));
    }
  };

  var sumar = function(intv1,intv2){
    operador = "+";
    return (parseFloat(intv1) + parseFloat(intv2));
  };

  var  multiplicar = function (intv1, intv2) {
    operador = "*";
    return (parseFloat(intv1) * parseFloat(intv2));
  };
