function setResult(value) {
  document.getElementById("result").innerHTML = value;
}
function getResult() {
  return document.getElementById("result").innerHTML;
}
function add(key) {
  var result = getResult();
  if (result != "0" || isNaN(key)) setResult(result + key);
  else setResult(key);
}
function calc() {
  var result = eval(getResult());
  setResult(result);
}
function borradoParcial() {
  var result = getResult();
  result = result.toString().slice(0, -1);
  if (result == "") setResult(0);
  else setResult(result);
}

function del() {
  setResult(0);
}
