import { Personaje } from "../Personaje.js";

export class Consejero extends Personaje {
  #especialidad;

  constructor(nombre, edad, casa, especialidad) {
    super(nombre, edad, casa);
    this.#especialidad = especialidad;
  }

  get especialidad() {
    return this.#especialidad;
  }

  set especialidad(nuevaEspecialidad) {
    this.#especialidad = nuevaEspecialidad;
  }

  luchar() {
    return `${this.nombre} no lucha con armas, sino con palabras e inteligencia.`;
  }

  aconsejar(rey) {
    return `${this.nombre} aconseja a ${rey.nombre} sobre ${this.#especialidad}.`;
  }
}
