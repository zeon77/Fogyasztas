let szamol = function () {
  let F = document.getElementById('fogyasztas').value;
  let V = document.getElementById('tank').value;
  let Ut = document.getElementById('ut').value;

  let megtehetoUt = V * 100 / F;


  if (megtehetoUt < Ut) {
    document.getElementById('megoldas').innerHTML = "Az út során tankolni kell!";
  } else {
    document.getElementById('megoldas').innerHTML = "Az út megtehető tankolás nélkül."
  }
}

document.getElementById('szamol').addEventListener('click', szamol);
 