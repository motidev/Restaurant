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
    constructor(fileName, fileNumber) {
        super(
            "[Error] => The value cannnot be empty",
            fileName,
            fileNumber
        );
        this.name = "EmptyValueException";
    }
}


// Exportamos las excepciones
export { EmptyValueException };