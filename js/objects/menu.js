import { EmptyValueException, InvalidConstructorException } from "../exceptions.js";

// Objeto que representa el menu que tendra el restaurante
class Menu {
    #name;
    #description;

    // Constructor que tendra como parametro obligatorio
    // el nombre del menu
    constructor(name) {
        // Comprobamoes si no se introduce ningun valor, lanzamos excepcion
        if (name === undefined || name === "") throw new EmptyValueException("name");

        // Comprobamos que se cree con el operador new
        if (!(new.target === Menu)) throw new InvalidConstructorException("Menu");

        // Declaramos las variables
        this.#name = name;
        this.#description = null;
    }

    // Getters
    get name() {
        return this.#name;
    }

    get description() {
        return this.#description;
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

    // Generamos un string con las propiedades del objeto
    toString() {
        return `Menu [name = ${this.#name}, description = ${this.#description}]`;
    }
}

export { Menu };