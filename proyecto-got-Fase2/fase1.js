import { Arma } from "./clases/Arma.js";
import { Casa } from "./clases/Casa.js";
import { Personaje } from "./clases/Personaje.js";
import { Reino } from "./clases/Reino.js";

// Crear armas
const garra = new Arma("Garra", 25, "espada");
const aguja = new Arma("Aguja", 15, "espada");

// Crear casas
const stark = new Casa("Stark", "Se acerca el invierno");
const lannister = new Casa("Lannister", "Oye mi rugido");

// Crear personajes
const jon = new Personaje("Jon Snow", 25, stark);
const arya = new Personaje("Arya Stark", 18, stark);
const jaime = new Personaje("Jaime Lannister", 35, lannister);

// Crear reino
const poniente = new Reino("Poniente");

// Mostrar resultados paso a paso
console.log(poniente.agregarCasa(stark));
console.log(poniente.agregarCasa(lannister));

console.log(jon.equiparArma(garra));
console.log(arya.equiparArma(aguja));

console.log(stark.agregarMiembro(jon));
console.log(stark.agregarMiembro(arya));
console.log(lannister.agregarMiembro(jaime));

console.log(poniente.proclamarRey(jaime));

console.log(poniente.listarCasas());
console.log("Rey actual:");
console.log(poniente.mostrarRey());

console.log(stark.listarMiembros());

console.log("Presentaciones:");
console.log(jon.presentarse());
console.log(arya.presentarse());
console.log(jaime.presentarse());

console.log("Armas:");
console.log(garra.descripcion());
console.log(aguja.descripcion());
