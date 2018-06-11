function launchGame() {
  var name = document.getElementById("name").value;
  var age = parseInt(document.getElementById("age").value);
  if (name.length == 0) {
    alert("Introduce un nombre valido");
  } else if (age.length == 0) or (age < 5) {
    alert("La edad minima es de 5 años");
  } else {
    //hace desaparecer el cuadrio #landing
    document.getElementById("landing").style.height = "0px";
    document.getElementById("landing").style.width = "0px";
  }
}
