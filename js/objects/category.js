import { EmptyValueException, InvalidConstructorException } from "../exceptions";

// Objeto con el que podemos crear la estructura de las categorias
class Category { 
    #name;
    #description;

    // Creamos el constructor que tendra 
    // como parametro obligatorio el nombre
    constructor(name) {
        // Comprobamoes si no se introduce ningun valor, lanzamos excepcion
        if (name === undefined || name === "") throw new EmptyValueException("name");

        // Comprobamos que se cree con el operador new
        if (!(new.target === Category)) throw new InvalidConstructorException("Category");
        
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

    // Imprimimos por pantalla las propiedades del objeto category
    toString() {
        return `Category [name = ${this.#name}, description = ${this.#description}]`;
    }
}

export { Category };