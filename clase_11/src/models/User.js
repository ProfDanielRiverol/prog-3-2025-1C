export default class User {
  constructor(nombre, email, id = null) {
    this.id = id;
    this.nombre = nombre;
    this.email = email;
  }
  isValid() {
    return (
      typeof this.nombre === "string" &&
      this.nombre.trim().length > 0 &&
      typeof this.email === "string"
    );
  }
  static fromObject(obj) {
    // Convierte un objeto en una instancia de User
    if (!obj) {
      throw new Error("Invalid object");
    }
    const user = new User(obj.nombre, obj.email, obj.id ?? null);
    if (!user.isValid()) {
      throw new Error("Datos inválidos");
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(user.email)) {
      throw new Error("Email inválido " + user.email);
    }
    return user;
  }
}
