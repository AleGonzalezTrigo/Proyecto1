import { Arma } from "./clases/Arma.js";
import { Casa } from "./clases/Casa.js";
import { Reino } from "./clases/Reino.js";
import { Guerrero } from "./clases/personajesEspeciales/guerrero.js";
import { Consejero } from "./clases/personajesEspeciales/consejero.js";
import { Rey } from "./clases/personajesEspeciales/rey.js";

// Crear armas
const garra = new Arma("Garra", 25, "espada");

// Crear casas
const stark = new Casa("Stark", "Se acerca el invierno");
const lannister = new Casa("Lannister", "Oye mi rugido");

// Crear reino
const poniente = new Reino("Poniente");

// Crear personajes especiales
const jon = new Guerrero("Jon Snow", 25, stark, garra);
const tyrion = new Consejero("Tyrion Lannister", 32, lannister, "liderazgo");
const robert = new Rey("Robert Baratheon", 40, lannister, 15);

// (Opcional) Añadimos miembros a las casas
stark.agregarMiembro(jon);
lannister.agregarMiembro(tyrion);
lannister.agregarMiembro(robert);

// Mostrar resultados (salida esperada)
console.log(jon.presentarse());
console.log(jon.luchar());
console.log(jon.entrenar());

console.log(tyrion.presentarse());
console.log(tyrion.luchar());
console.log(tyrion.aconsejar(robert));

console.log(robert.presentarse());
console.log(robert.gobernar());
console.log(robert.luchar());
