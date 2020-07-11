var a;
var b;
var operacion;


function iniciar(){

  var display = document.getElementById("display");
  var on = document.getElementById("on");
  var punto = document.getElementById("punto");
  var suma = document.getElementById("mas");
  var resta = document.getElementById("menos");
  var multiplicar = document.getElementById("por");
  var dividir = document.getElementById("dividido");
  var igual = document.getElementById("igual");
  var signo = document.getElementById("sign");
  var uno = document.getElementById("1");
  var dos = document.getElementById("2");
  var tres = document.getElementById("3");
  var cuatro = document.getElementById("4");
  var cinco = document.getElementById("5");
  var seis = document.getElementById("6");
  var siete = document.getElementById("7");
  var ocho = document.getElementById("8");
  var nueve = document.getElementById("9");
  var cero = document.getElementById("0");
  display.textContent = "";



  uno.addEventListener("mousedown", function(){
    uno.setAttribute("style", "transform:scale(0.95, 0.95)")
  })
  uno.addEventListener("mouseout", function(){
    uno.setAttribute("style", "transform:scale(1,1)")
  })


  dos.addEventListener("mousedown", function(){
    dos.setAttribute("style", "transform:scale(0.95, 0.95)")
  })
  dos.addEventListener("mouseout", function(){
    dos.setAttribute("style", "transform:scale(1,1)")
  })

  tres.addEventListener("mousedown", function(){
    tres.setAttribute("style", "transform:scale(0.95, 0.95)")
  })
  tres.addEventListener("mouseout", function(){
    tres.setAttribute("style", "transform:scale(1,1)")
  })

  cuatro.addEventListener("mousedown", function(){
    cuatro.setAttribute("style", "transform:scale(0.95, 0.95)")
  })
  cuatro.addEventListener("mouseout", function(){
    cuatro.setAttribute("style", "transform:scale(1,1)")
  })

  cinco.addEventListener("mousedown", function(){
    cinco.setAttribute("style", "transform:scale(0.95, 0.95)")
  })
  cinco.addEventListener("mouseout", function(){
    cinco.setAttribute("style", "transform:scale(1,1)")
  })

  seis.addEventListener("mousedown", function(){
    seis.setAttribute("style", "transform:scale(0.95, 0.95)")
  })
  seis.addEventListener("mouseout", function(){
    seis.setAttribute("style", "transform:scale(1,1)")
  })

  siete.addEventListener("mousedown", function(){
    siete.setAttribute("style", "transform:scale(0.95, 0.95)")
  })
  siete.addEventListener("mouseout", function(){
    siete.setAttribute("style", "transform:scale(1,1)")
  })

  ocho.addEventListener("mousedown", function(){
    ocho.setAttribute("style", "transform:scale(0.95, 0.95)")
  })
  ocho.addEventListener("mouseout", function(){
    ocho.setAttribute("style", "transform:scale(1,1)")
  })

  nueve.addEventListener("mousedown", function(){
    nueve.setAttribute("style", "transform:scale(0.95, 0.95)")
  })
  nueve.addEventListener("mouseout", function(){
    nueve.setAttribute("style", "transform:scale(1,1)")
  })

  cero.addEventListener("mousedown", function(){
    cero.setAttribute("style", "transform:scale(0.95, 0.95)")
  })
  cero.addEventListener("mouseout", function(){
    cero.setAttribute("style", "transform:scale(1,1)")
  })

  punto.addEventListener("mousedown", function(){
    punto.setAttribute("style", "transform:scale(0.95, 0.95)")
  })
  punto.addEventListener("mouseout", function(){
    punto.setAttribute("style", "transform:scale(1,1)")
  })

  suma.addEventListener("mousedown", function(){
    suma.setAttribute("style", "transform:scale(0.95, 0.95)")
  })
  suma.addEventListener("mouseout", function(){
    suma.setAttribute("style", "transform:scale(1,1)")
  })

  resta.addEventListener("mousedown", function(){
    resta.setAttribute("style", "transform:scale(0.95, 0.95)")
  })
  resta.addEventListener("mouseout", function(){
    resta.setAttribute("style", "transform:scale(1,1)")
  })

  multiplicar.addEventListener("mousedown", function(){
    multiplicar.setAttribute("style", "transform:scale(0.95, 0.95)")
  })
  multiplicar.addEventListener("mouseout", function(){
    multiplicar.setAttribute("style", "transform:scale(1,1)")
  })

  dividir.addEventListener("mousedown", function(){
    dividir.setAttribute("style", "transform:scale(0.95, 0.95)")
  })
  dividir.addEventListener("mouseout", function(){
    dividir.setAttribute("style", "transform:scale(1,1)")
  })

  signo.addEventListener("mousedown", function(){
    signo.setAttribute("style", "transform:scale(0.95, 0.95)")
  })
  signo.addEventListener("mouseout", function(){
    signo.setAttribute("style", "transform:scale(1,1)")
  })

  igual.addEventListener("mousedown", function(){
    igual.setAttribute("style", "transform:scale(0.95, 0.95)")
  })
  igual.addEventListener("mouseout", function(){
    igual.setAttribute("style", "transform:scale(1,1)")
  })

  on.addEventListener("mousedown", function(){
    on.setAttribute("style", "transform:scale(0.95, 0.95)")
  })
  on.addEventListener("mouseout", function(){
    on.setAttribute("style", "transform:scale(1,1)")
  })

  uno.onclick = function(e){
    if (display.textContent.length < 8) {
      display.textContent = display.textContent + "1";
    }else {
      alert("la cantidad de digitos ingresados debe ser menor o igual a 8 digitos")
    }
  }

  dos.onclick = function(e){
    if (display.textContent.length < 8) {
      display.textContent = display.textContent + "2";
    }else {
      alert("la cantidad de digitos ingresados debe ser menor o igual a 8 digitos")
    }
  }
  tres.onclick = function(e){
    if (display.textContent.length < 8) {
      display.textContent = display.textContent + "3";
    }else {
      alert("la cantidad de digitos ingresados debe ser menor o igual a 8 digitos")
    }
  }
  cuatro.onclick = function(e){
    if (display.textContent.length < 8) {
      display.textContent = display.textContent + "4";
    }else {
      alert("la cantidad de digitos ingresados debe ser menor o igual a 8 digitos")
    }
  }
  cinco.onclick = function(e){
    if (display.textContent.length < 8) {
      display.textContent = display.textContent + "5";
    }else {
      alert("la cantidad de digitos ingresados debe ser menor o igual a 8 digitos")
    }
  }
  seis.onclick = function(e){
    if (display.textContent.length < 8) {
      display.textContent = display.textContent + "6";
    }else {
      alert("la cantidad de digitos ingresados debe ser menor o igual a 8 digitos")
    }
  }
  siete.onclick = function(e){
    if (display.textContent.length < 8) {
      display.textContent = display.textContent + "7";
    }else {
      alert("la cantidad de digitos ingresados debe ser menor o igual a 8 digitos")
    }
  }
  ocho.onclick = function(e){
    if (display.textContent.length < 8) {
      display.textContent = display.textContent + "8";
    }else {
      alert("la cantidad de digitos ingresados debe ser menor o igual a 8 digitos")
    }
  }
  nueve.onclick = function(e){
    if (display.textContent.length < 8) {
      display.textContent = display.textContent + "9";
    }else {
      alert("la cantidad de digitos ingresados debe ser menor o igual a 8 digitos")
    }
  }
  cero.onclick = function(e){
    if (display.textContent.length < 8) {
      display.textContent = display.textContent + "0";
    }else {
      alert("la cantidad de digitos ingresados debe ser menor o igual a 8 digitos")
    }
  }

  punto.onclick = function(e){
    if (display.textContent.indexOf(".") == -1) {
      if (display.textContent == "") {
        display.textContent = display.textContent + "0.";
      }else{

        display.textContent = display.textContent + ".";

      }
    }
  }

  signo.onclick = function(e){
    if (display.textContent != "0") {
      var aux;
      if (display.textContent.charAt(0)=="-") {
      aux = display.textContent.slice(1);
      }else {
        aux = "-" + display.textContent;
      }
      display.textContent = "";
      display.textContent = aux;
    }
  }

  on.onclick = function(e){
    reset();
  }

  suma.onclick = function(e){

    a = display.textContent;
    alert
    operacion = "+";
    borrar();

  }

  resta.onclick = function(e){

    a = display.textContent;
    operacion = "-";
    borrar();

  }
  multiplicar.onclick = function(e){

    a = display.textContent;
    operacion = "*";
    borrar();

  }
  dividir.onclick = function(e){

    a = display.textContent;
    operacion = "/";
    borrar();
  }

  igual.onclick = function(e){

    b = display.textContent;
    resolver();

  }
}


function borrar(){

display.textContent = "";

}

function reset(){

display.textContent = "";
a = 0;
b = 0;
operacion = "";

}

function resolver(){
var result;
switch (operacion) {
  case "+": result = parseFloat(a) + parseFloat(b);
    break;
  case "-": result = parseFloat(a) - parseFloat(b);
    break;
  case "*": result = parseFloat(a) * parseFloat(b);
    break;
  case "/": result = parseFloat(a) / parseFloat(b);
    break;
}
reset();
display.textContent = result;
}

iniciar();
