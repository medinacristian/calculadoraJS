function insertar(num) {
  document.form.textview.value = document.form.textview.value + num;
}

function resultado() {
  var exp = document.form.textview.value;
  if(exp) {
    document.form.textview.value = eval(exp);
  }

}

function limpiar() {
  document.form.textview.value = "";
}

function eliminar() {
  var exp = document.form.textview.value;

  document.form.textview.value = exp.substring(0, exp.length - 1);
}

// TODO: Usar teclado numérico para capturar datos