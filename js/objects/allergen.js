import { EmptyValueException, InvalidConstructorException } from "../exceptions.js";

// Clase que representa los alérgenos que puede tener un determinado plato
class Allergen {
    #name;
    #description;

    // Creamos el constructor de nuestra clase que 
    // unicamente tendra el nombre como obligatorio
    constructor(name) {
        // Comprobamoes si no se introduce ningun valor, lanzamos excepcion
        if (name === undefined || name === "") throw new EmptyValueException("name");

        // Comprobamos que se cree con el operador new
        if (!(new.target === Allergen)) throw new InvalidConstructorException("Category");

        // Declaramos las variables
        this.#name = name;
        this.#description = null;
    }

    // Getters
    get name() {
        return this.#name;
    }

    get description(){
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
        return `Category [name = ${this.#name}, description = ${this.#description}]`;
    }
}

export { Allergen };