export default class User {
  constructor(nombre, email) {
    this.nombre = nombre;
    this.email = email;
  }
  static fromObject(obj) {
    return new User(obj.nombre, obj.email, obj.id ?? null);
  }
}
