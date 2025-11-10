export class Arma {
  #nombre;
  #daño;
  #tipo;

  constructor(nombre, daño, tipo) {
    this.#nombre = nombre;
    this.#daño = daño;
    this.#tipo = tipo;
  }

  // Getters
  get nombre() {
    return this.#nombre;
  }

  get daño() {
    return this.#daño;
  }

  get tipo() {
    return this.#tipo;
  }

  // Setters
  set nombre(nuevoNombre) {
    this.#nombre = nuevoNombre;
  }

  set daño(nuevoDaño) {
    this.#daño = nuevoDaño;
  }

  set tipo(nuevoTipo) {
    this.#tipo = nuevoTipo;
  }

  // Métodos
  descripcion() {
    return `${this.#nombre} (${this.#tipo}) - daño: ${this.#daño}`;
  }
}
