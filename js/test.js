import { Category } from "./objects/category.js";
import { Dish } from "./objects/dish.js";

// Creamos nuestra funcion de testeo
function test() {
    console.log("Test fucntion");

    // Testeo dish
    try {
        console.log("--- TESTEANDO CLASE DISH ---");

        // Creamos el objeto dish
        const dish = new Dish("paella");
        dish.description = "Una delicia de arroz valenciano";
        dish.ingredients = ["arroz", "bogabante", "pollo"];

        // Imprimimos el contendio del String
        console.log(dish.toString());

        // Comprobamos la funcionalidad de nuestra clase
        console.log("Dish name -> " + dish.name);
        console.log("Dish description -> " + dish.description);
    } catch (error) {
        console.log(error.message);
    }

    // Testeo Category
    try {
        console.log("--- TESTEANDO CLASE CATEGORY ---");

        // Creamos la categoria
        const category = new Category("Arroces");
        category.description = "Arroces de nuestra carta";

        console.log(category.toString());
    } catch (error) {
        console.log(error.message)
    }
}

// Llamamos a la función de testeo para que se ejecute
test();