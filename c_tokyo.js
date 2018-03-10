function boxes(){

  var all_boxes = '';

  var letters = ['A','B','C','D','E','F','G','H','I','J','K','L'];
    for (var i = 0; i < letters.length; i++) {
      all_boxes += "<div class='box'>" + letters[i] + "</div>";
      console.log(letters[i]);
    }

  document.getElementById("box_container").innerHTML = all_boxes;
}

function saludo(){
  saludo = '';
  saludo = '<H1>Hola!!</H1>'

  document.getElementById("saludo_container").innerHTML = saludo;
}
