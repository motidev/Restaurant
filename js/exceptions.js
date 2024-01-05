// Creamos la excepción base con la que crearemos el resto de excepciones
class BaseException extends Error {
    constructor (message = "", fileName, fileNumber) {
        super(message, fileName, fileNumber);
        this.name = "BaseException";
        if(Error.captureStackTrace) {
            Error.captureStackTrace(this, BaseException);
        }
    }
}

// Excepcion para variables que esten vacias
class EmptyValueException extends BaseException {
    constructor(value, fileName, fileNumber) {
        super(
            `[Error] => The ${value} cannnot be empty`,
            fileName,
            fileNumber
        );
        this.name = "EmptyValueException";
        this.value = value;
    }
}

// Excepcion para indicar que una clase se ha creado de manera incorrecta
class InvalidConstructorException extends BaseException {
    constructor(value, fileName, fileNumber) {
        super(
            `[Error] => The ${value} cannnot be created without the new operator`,
            fileName,
            fileNumber
        );
        this.name = "InvalidConstructorException";
        this.value = value;
    }
}


// Exportamos las excepciones
export { EmptyValueException, InvalidConstructorException };