// objetos literales {}

const cliente1 = {
  nombre: "Noelia",
  apellido: "Storgato",
  dni: 12345671234,
  numero_cuenta: "098765323456789876543",
  tipo: "CA",
  pin: "1234",
};
cliente1["telefono"] = "12345678";
cliente1.tipo = "CC";
console.log(cliente1);
const cliente2 = {
  nombre: "Lucas",
  apellido: "Lopez",
  dni: 377859367,
  numero_cuenta: "8545678976543456765",
  tipo: "CC",
  pin: "4321",
};

cliente2.email = "lucLopez@mail.com";
console.log(cliente2);

// notacion de punto (.)
console.log(cliente1.nombre);
console.log(cliente1.numero_cuenta);

// notacion de corchetes [atributo]
console.log(cliente2["nombre"]);
console.log(cliente2["numero_cuenta"]);

// funcion constructora
function Cliente(nombre, dni, numero_cuenta) {
  this.nombre = nombre;
  this.dni = dni;
  this.numero_cuenta = numero_cuenta;
  this.mostarDetalle = function () {
    console.log(
      `Nombre Cliente: ${this.nombre}, Numero cuenta: ${this.numero_cuenta} `
    );
  };
}

const cliente3 = new Cliente("Pepe", "345676543", "098765434567876567");

console.log(cliente3.nombre);
cliente3.mostarDetalle();
const cliente4 = new Cliente(
  "MAria",
  "987698765",
  "098768765789765434567876567"
);

console.log(cliente4.nombre);
cliente4.mostarDetalle();
// window.alert("Soy un alert");
