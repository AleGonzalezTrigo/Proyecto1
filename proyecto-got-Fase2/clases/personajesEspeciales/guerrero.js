import { Personaje } from "../Personaje.js";

export class Guerrero extends Personaje {
  #arma;

  constructor(nombre, edad, casa, arma) {
    super(nombre, edad, casa);
    this.#arma = arma;
  }

  get arma() {
    return this.#arma;
  }

  set arma(nuevaArma) {
    this.#arma = nuevaArma;
  }

  luchar() {
    // mensaje específico del guerrero
    return `${this.nombre} ataca con su ${this.#arma.nombre}, causando ${this.#arma.daño} puntos de daño.`;
  }

  entrenar() {
    return `${this.nombre} se entrena sin descanso para la próxima batalla.`;
  }
}
