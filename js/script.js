/**
 * Ejercicio #4:
 *
 * Validar el formulario
 *
 * ¿Como funciona?:
 * 1. La validacion se hace cuando el usuario presiona el boton "Enviar" para enviar el forom
 * 2. Solo se validan los campos con el * (tienen la clase requerido)
 * 3. Al hacer click en "enviar"
 *     3.1. Los campos invalidos deben ponerse con un borde rojo
 *     3.2. Se debe mostrar un aviso con un titulo de: "Ocurrio un error, verifica
 *     los siguientes campos" y seguido un listado con los campos invalidos. El aviso
 *     debe tener border rojo y fondo rojo claro
 *     3.3. Si todos los camppos son validos, debe mostrar un mensaje abajo del boton enviar
 *     que dice: "Su formulario fue enviado". El aviso debe tener borde verde con fondo verde claro
 *
 * ¿Donde empiezo?:
 *
 * ¿Que voy a evaluar?
 * 1. Que funcione
 * 2. Buenas practicas (incluyendo buenas practicas pasadas)
 *
 */

// BOILERPLATE
const form = document.querySelector("form");
const inputs = document.querySelectorAll('.requerido');
const RedTitle = document.createElement('h1');
const script = document.querySelector('script');
const Parent = form.parentElement;
const GreenTitle = document.createElement('h2');
let redText = '';
let greenText = '';
form.addEventListener("submit", function(e) {
  e.preventDefault();
  inputs.forEach(input => {
    if(input.value != ''){
      input.style.border = '2px solid black';
      redText = '';
      greenText = 'Su formulario ha sido enviado';
      input.value = ''
      GreenTitle.style.backgroundColor = 'rgb(83, 141, 83)';
      GreenTitle.style.border = ' 2px solid green';
      RedTitle.style.backgroundColor = 'transparent';
      RedTitle.style.border = 'none';
    }else{
      input.style.border = '2px solid red';
      greenText = '';
      redText = 'Ocurrio un error, verifica los siguientes campos';
      input.value = ''
      RedTitle.style.backgroundColor = 'rgb(233, 56, 56)';
      RedTitle.style.border = ' 2px solid red';
      GreenTitle.style.backgroundColor = 'transparent';
      GreenTitle.style.border = 'none';
    }
  });
  RedTitle.innerHTML = redText;
  GreenTitle.innerHTML = greenText;
  Parent.insertBefore(RedTitle, form)
  Parent.insertBefore(GreenTitle, script)
  console.log("FORMULA RIO ENVIADO");
});
