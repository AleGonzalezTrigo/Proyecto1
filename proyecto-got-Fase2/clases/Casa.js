export class Casa {
  #nombre;
  #lema;
  #miembros;

  constructor(nombre, lema) {
    this.#nombre = nombre;
    this.#lema = lema;
    this.#miembros = [];
  }

  // Getters
  get nombre() {
    return this.#nombre;
  }

  get lema() {
    return this.#lema;
  }

  get miembros() {
    return this.#miembros;
  }

  // Setters
  set nombre(nuevoNombre) {
    this.#nombre = nuevoNombre;
  }

  set lema(nuevoLema) {
    this.#lema = nuevoLema;
  }

  // Métodos
  agregarMiembro(personaje) {
    this.#miembros.push(personaje);
    return `${personaje.nombre} ha sido añadido a la Casa ${this.#nombre}.`;
  }

  listarMiembros() {
    if (this.#miembros.length === 0) {
      return `La Casa ${this.#nombre} aún no tiene miembros.`;
    }
    return `Miembros de la Casa ${this.#nombre}: ${this.#miembros
      .map(m => `\n- ${m.nombre}`)
      .join("")}`;
  }
}
