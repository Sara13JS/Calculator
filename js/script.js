var ans = "";
var clear = false;
var calc = "";
$(document).ready(function() {
  $("button").click(function() {
    var text = $(this).attr("value");
     if(parseInt(text, 10) == text || text === "." || text === "/" || text === "*" || text === "-" || text === "+" || text === "%") {
      if(clear === false) {
        calc += text;
        $(".screen").val(calc);
      } else {
        calc = text;
        $(".screen").val(calc);
        clear = false;
      }
      
    } if(text === "AC") {
      calc = "";
      $(".screen").val("");
    } else if(text === "CE") {
      calc = calc.slice(0, -1);
      $(".screen").val(calc);
    } else if(text === "=") {
      ans = eval(calc);
      $(".screen").val(ans);
      clear = true;
    }else if(text === "And") { 
      calc = $(".screen").val(); 
      $(".screen").val(calc); 
      clear=false;
    }
  });
});
