export class Personaje {
  #nombre;
  #edad;
  #vivo;
  #casa;
  #arma;

  constructor(nombre, edad, casa) {
    this.#nombre = nombre;
    this.#edad = edad;
    this.#vivo = true;
    this.#casa = casa;
    this.#arma = null;
  }

  // Getters
  get nombre() {
    return this.#nombre;
  }

  get edad() {
    return this.#edad;
  }

  get vivo() {
    return this.#vivo;
  }

  get casa() {
    return this.#casa;
  }

  get arma() {
    return this.#arma;
  }

  // Setters
  set casa(nuevaCasa) {
    this.#casa = nuevaCasa;
  }

  set arma(nuevaArma) {
    this.#arma = nuevaArma;
  }

  // Métodos
  equiparArma(arma) {
    this.#arma = arma;
    return `${this.#nombre} ha equipado el arma ${arma.nombre}.`;
  }

  presentarse() {
    return `Soy ${this.#nombre} de la Casa ${this.#casa.nombre}.`;
  }

  morir() {
    this.#vivo = false;
    return `${this.#nombre} ha muerto.`;
  }
}
