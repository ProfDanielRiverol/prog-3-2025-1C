//El cajero automático
//Debemos generar un script para la operación de un cajero automático
/* El mismo tiene que: 
1- Mostrar un mensaje de bienvenida
2- Permitir hasta 3 intentos de ingreso con el PIN del cliente
  2a- Si ingresa correctamente dar mensaje de Bienvenida
  2b- Terminados los intentos informar al cliente que se comunique con el banco
3- Una vez ingresado mostrar las siguientes opciones en pantalla: 
  a- Saldo
  b- Retiro
  c- Depósito
  d- Salir 
4- Al finalizar mostrar mensaje
*/
console.log("Bienvenido al banco");
let pinGuardado = "5701";
let ingreso = false;

for (let i = 3; i >= 1; i--) {
  let pin = prompt("Ingrese su PIN");
  if (pin === pinGuardado) {
    console.log("Bienvenido Ya podes operar");
    ingreso = true;
    break;
  } else {
    console.log("Error intenta nuevamente");
  }
}

//
if (ingreso) {
  console.log("Estas dentro");
} else {
  console.log("Se te acabaron los intentos comunicate con 0800-jaja");
}
