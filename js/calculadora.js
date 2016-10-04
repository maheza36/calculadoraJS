calculator ={
  op1 : null,
  op2 : null,
  operator : null,
  check_input : function(){
    var input = document.getElementById("input");
    var input_text = input.textcontent;
    var errors = document.querySelector("#error");
    var input_number = Number(input_text);
    if(input_number!== NaN){
      if(this.op1 === null){
        this.op1 = input_number;
      }
      else {
        this.op2 = input_number;
      }
    }
  }
};

document.addEventListener("DOMContentLoaded",function(event){
  var output = document.getElementById("output");
  var controlpad = document.getElementById("controlpad");
  var buttons_operators = document.querySelectorAll("#operators button");
  var i=0;
  
  for(i=0; i<buttons_operators.length;i++){
    buttons_operators[i].addEventListener("click",calculator.check_input);
  }
});
