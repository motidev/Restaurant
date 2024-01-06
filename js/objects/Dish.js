import { EmptyValueException, InvalidConstructorException, InvalidTypeExecption } from "../exceptions.js";

class Dish {
    // Declaramos los atributos privados de nuestra clase
    #name;
    #description;
    #ingredients
    #image;

    // Creamos el constructor de nuestra clase
    // En este caso como valores iniciales le pasaremos el nombre del plato
    constructor(name) {
        // Comprobamoes si no se introduce ningun valor y lanzamos excepcion
        if (name === undefined || name === "") throw new EmptyValueException("name");

        // Comprobamos que se cree con el operador new
        if (!(new.target === Dish)) throw new InvalidConstructorException("Dish");

        // Declaramos las variables
        this.#name = name;
        this.#description = null;
        this.#ingredients = null;
        this.#image = null;
    }

    // Creamos nuestros Getters 
    get name() {
        return this.#name;
    }

    get description() {
        return this.#description;
    }

    get ingredients () {
        // Recogemos el array de ingredientes
        let ingredientsArray = this.#ingredients;

        return {
            // Objeto iterable que devolveremos
            [Symbol.iterator]: () => {
                // Declaramos el indice para cada iterador
                let nextIndex = 0;
                return {
                    next: () => ({
                        value: ingredientsArray[nextIndex++],
                        done: nextIndex > ingredientsArray.length
                    })
                };
            }
        };
    }

    get image() {
        return this.#image;
    }

    // Creamos los setters de nuestra clase
    set name(value) {
        // Comprobamos si no se ha introducido valor, lanzamos excepción
        if (value === undefined || value === "") throw new EmptyValueException("name");

        this.#name = value;
    }

    set description(value) {
        // Comprobamos si no se ha introducido valor, lanzamos excepción
        if (value === undefined || value === "") throw new EmptyValueException("description");

        this.#description = value;
    }

    set ingredients(value = []) {
        // Comprobamos que el valor que introducimos sea un array
        if(!(Array.isArray(value))) throw new InvalidTypeExecption("ingredients", "array");
        
        this.#ingredients = value;
    }

    set image(value) {
        // Comprobamos si no se ha introducido valor, lanzamos excepción
        if (value === undefined || value === "") throw new EmptyValueException("image");

        this.#image = value;
    }
    // Creamos el toString de nuestra clase
    toString() {
        return `Dish [ name = ${this.#name}, description = ${this.#description}, ingedients = ${this.#ingredients.join()}, image = ${this.#image}]`;
    }
}

// Exportamos la clase dish
export { Dish };