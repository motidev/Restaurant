import { InvalidValueException } from "../exceptions.js";

// Objeto para definir las coordenadas.
class Coordinate {
    #latitude;
    #longitude;

    // Creamos el constructor de nuestra clase que tendra
    // como parametros obligatorios la latitud y longitud
    constructor(latitude, longitude) {
        // Comprobamos que el valor introducido es un numero
        // y que esta dentro de los valores correctos
        latitude = typeof latitude !== "undefined" ? Number(latitude).valueOf() : 0;
        longitude = typeof longitude !== "undefined" ? Number(longitude).valueOf() : 0;

        if ((Number.isNaN(latitude) || latitude < -90 || latitude > 90)) throw new InvalidValueException("latitude");
        if ((Number.isNaN(longitude) || longitude < -180 || longitude > 180)) throw new InvalidValueException("longitude");

        // Declaramos las variables
        this.#latitude = latitude;
        this.#longitude = longitude;
    }

    // Getters
    get latitude() {
        return this.#latitude;
    }

    get longitude() {
        return this.#longitude;
    }

    // Setters
    set latitude(value) {
        // Comprobamos que el valor no sea undefined y obtenemos el valor correcto
        // tambien comprobamos que cumpla con los valores correctos
        latitude = typeof latitude !== "undefined" ? Number(latitude).valueOf() : 0;
        if ((Number.isNaN(latitude) || latitude < -90 || latitude > 90)) throw new InvalidValueException("latitude");

        // Añadimos el valor una vez comprobado que es correcto
        this.#latitude = value;
    }

    set longitude(value) {
        // Comprobamos que el valor no sea undefined y obtenemos el valor correcto
        // tambien comprobamos que cumpla con los valores correctos
        longitude = typeof longitude !== "undefined" ? Number(longitude).valueOf() : 0;
        if ((Number.isNaN(longitude) || longitude < -180 || longitude > 180)) throw new InvalidValueException("longitude");

        // Añadimos el valor una vez comprobado que es correcto
        this.#longitude = value;
    }

    // Generamos un string con las propiedades del objeto
    toString() {
        return `Coordinate [latitude = ${this.#latitude}, longitude = ${this.#longitude}]`;
    }
}

export { Coordinate };