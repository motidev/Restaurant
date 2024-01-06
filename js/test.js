import { Dish } from "./Dish.js";

// Creamos nuestra funcion de testeo
function test() {
    console.log("Test fucntion");

    // Comprobamos la funcionalidad de nuestro objeto Dish
    try {
        const dish = new Dish("paella");

        console.log(dish);

        // Añadimos informacion
        dish.description = "Una delicia de arroz valenciano";
        dish.ingredients = ["arroz", "bogabante", "judias"];

        // Comprobamos la funcionalidad de nuestra clase
        console.log("Dish name -> " + dish.name);
        console.log("Dish description -> " + dish.description);
        

    } catch (error) {
        console.log(error);
    }
}

// Llamamos a la función de testeo para que se ejecute
test();