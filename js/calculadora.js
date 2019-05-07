function getValue() {
  // Obtengo el valor del input
  return document.getElementById('textview').value;
}

function getTextview() {
  // Obtengo el valor del elemento input
  return document.getElementById('textview');
}


function insertar(num) {
  getTextview().value = getValue() + num;
}

function resultado() {
  if(getValue()) {
    getTextview().value = eval(getValue());
  }

}

function limpiar() {
  getTextview().value = "";
}

function eliminar() {
  var exp = getValue();
  getTextview().value = exp.substring(0, exp.length - 1);
}


document.onkeydown = insertarTecla;
function insertarTecla(event) {
    
  // Insertar en textview
  var valoresPermitidos = ['0','1','2','3','4','5','6','7','8','9','+','-','*','/','.'];
  if(valoresPermitidos.includes(event.key)) {
    getTextview().value = getValue() + event.key;
  }

  // Realizar el cálculo
  if(event.key == 'Enter') {
    resultado();
  }

  // Eliminar un caracter
  if(event.key == 'Backspace') {
    eliminar();
  }

  // Limpiar pantalla
  if(event.key == 'Escape') {
    limpiar();
  }


}