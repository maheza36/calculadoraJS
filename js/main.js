    var recibirvalores = function(){
    var intnum1 = prompt("Ingrese su primer numero");
    var intnum2 = prompt("Ingrese su segundo numero");
    if (isNaN(intnum1) || isNaN(intnum2))
    {
      console.log("no se ingreso un número valido");
    }
    else{
      intnum1 = parseFloat(intnum1);
      intnum2 = parseFloat(intnum2);
      recibiroperador(intnum1,intnum2);
    }
  };

  var recibiroperador=function(intnum1,intnum2){
    var stroperador = prompt("ingrese el operador o identificador de su operación");
    seleccionaroperacion(stroperador,intnum1,intnum2);
  };

  var seleccionaroperacion = function(operador,intnum1,intnum2){
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
      var resultado = restar(intnum1, intnum2);
      console.log(resultado);
      break;
      //dividir
      case "dividir":
      case "/":
      case "divide":
      case "DIVIDIR":
      case "DIVIDE":
      case "division":
      case "DIVISION":
      var resultado = dividir(intnum1,intnum2);
      console.log(resultado);
      break;
    }
    document.write("El resultado es de " + intnum1 + " " + operador + " " + intnum2 + " es: " + resultado);
    javascript:location.reload();

  };

  var restar = function(intv1,intv2){
    return (parseFloat(intv1) - parseFloat(intv2));
  };

  var  dividir = function (intv1, intv2) {
    if(intv2===0)
    {
      return "No se puede dividir entre cero";
    }
    else {
      return (parseFloat(intv1) / parseFloat(intv2));
    }
  };
