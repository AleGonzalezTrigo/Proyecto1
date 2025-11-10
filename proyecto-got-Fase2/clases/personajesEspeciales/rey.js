import { Personaje } from "../Personaje.js";

export class Rey extends Personaje {
  #añosReinado;

  constructor(nombre, edad, casa, añosReinado) {
    super(nombre, edad, casa);
    this.#añosReinado = añosReinado;
  }

  get añosReinado() {
    return this.#añosReinado;
  }

  set añosReinado(nuevosAños) {
    this.#añosReinado = nuevosAños;
  }

  gobernar() {
    return `${this.nombre} gobierna con sabiduría desde hace ${this.#añosReinado} años.`;
  }

  luchar() {
    return `${this.nombre} lidera la batalla y anima a sus tropas.`;
  }
}
