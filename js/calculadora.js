var calculator ={
  res : null,
  operator : null,
  check_input : function(){
    var self = calculator;
    console.log("Check Input");
    var input = document.getElementById("input");
    var input_text = input.value;
    var errors = document.querySelector("#error");
    var input_number = Number(input_text);
    if(Number.isNaN(input_number)){
      input.value="";
    }
  },
  set_number: function(button){
    return function(){
      var input = document.getElementById("input");
      input.value = "" + input.value  + button.textContent;
    };
  },
  set_operator: function(button){
    var self = calculator;
    return function(){
      if(self.res === null){
        self.res = input.value;
      }
      self.operators = button.textContent;
    };
  },
  clear: function(){
    var self = calculator;
    self.res=null;
    self.operators = null;
    var input = document.getElementById("input");
    input.value ="";
  },
};

document.addEventListener("DOMContentLoaded",function(event){
  //una vez la página ha cargado
  var output = document.getElementById("output");
  var controlpad = document.getElementById("controlpad");
  var buttons_operators = controlpad.querySelectorAll("#operators button");
  var i;
  for(i=0; i<buttons_operators.length;i++){
    buttons_operators[i].addEventListener("click",calculator.check_input);
  }
  var button_numbers = controlpad.querySelectorAll("#numbers button");
  for(i=0;i<button_numbers.length;i++){
    console.log(button_numbers[i]);
    button_numbers[i].addEventListener(
      "click",
      calculator.set_number(button_numbers[i])
    );//cierra el for de button_numbers

  }
  var button_clear = controlpad.querySelector("#clear");
  button_clear.addEventListener("click",calculator.clear);
  console.log("Initialited");
});
