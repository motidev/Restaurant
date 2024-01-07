import { InvalidTypeExecption } from "../exceptions.js";
import { Coordinate } from "./coordinate.js";

// Objeto que representa un recurso restaurante para formar parte de la cadena de restaurantes
class Restaurant {
    #name;
    #description;
    #location;

    // Creamos el constructor de nuestra clase que tendra como
    // parametro obligatorio el nombre del restaurante
    constructor(name) {
        // Comprobamoes si no se introduce ningun valor, lanzamos excepcion
        if (name === undefined || name === "") throw new EmptyValueException("name");

        // Comprobamos que se cree con el operador new
        if (!(new.target === Restaurant)) throw new InvalidConstructorException("Restaurant");

        // Declaramos las variables
        this.#name = name;
        this.#description = null;
        this.#location = null;
    }

    // Getters
    get name() {
        return this.#name;
    } 

    get description() {
        return this.#description;
    }

    get location() {
        return this.#location;
    }

    // Setters
    set name(value) {
        // Comprobamoes si no se introduce ningun valor, lanzamos excepcion
        if (value === undefined || value === "") throw new EmptyValueException("name");

        this.#name = value;
    }

    set description(value) {
        // Comprobamoes si no se introduce ningun valor, lanzamos excepcion
        if (value === undefined || value === "") throw new EmptyValueException("description");

        this.#description = value;
    }

    set location(value) {
        // Comprobamoes si no se introduce ningun valor, lanzamos excepcion
        if (value === undefined || value === null) throw new EmptyValueException("location");

        // Comprobamos que el valor sea un objeto Coordinate
        if (!(value instanceof Coordinate)) throw new InvalidTypeExecption(value, "Coordinate");

        this.#location = value;
    }

    // Generamos un string con las propiedades del objeto
    toString() {
        return `Restaurant [name = ${this.#name}, description = ${this.#description}, location = ${this.#location}]`;
    }
}

export { Restaurant };