export class Reino {
  #nombre;
  #rey;
  #casas;

  constructor(nombre) {
    this.#nombre = nombre;
    this.#rey = null;
    this.#casas = [];
  }

  // Getters
  get nombre() {
    return this.#nombre;
  }

  get rey() {
    return this.#rey;
  }

  get casas() {
    return this.#casas;
  }

  // Métodos
  agregarCasa(casa) {
    this.#casas.push(casa);
    return `La Casa ${casa.nombre} ha sido añadida al Reino de ${this.#nombre}.`;
  }

  proclamarRey(personaje) {
    this.#rey = personaje;
    return `${personaje.nombre} ha sido proclamado rey de ${this.#nombre}.`;
  }

  listarCasas() {
    if (this.#casas.length === 0) return `El Reino ${this.#nombre} no tiene casas.`;
    return `Casas del Reino de ${this.#nombre}:${this.#casas
      .map(c => `\n- Casa ${c.nombre}`)
      .join("")}`;
  }

  mostrarRey() {
    if (this.#rey) {
      return `El rey actual es ${this.#rey.nombre} de la Casa ${this.#rey.casa.nombre}.`;
    }
    return `El Reino ${this.#nombre} aún no tiene rey.`;
  }
}
