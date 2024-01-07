import { Allergen } from "./objects/allergen.js";
import { Category } from "./objects/category.js";
import { Coordinate } from "./objects/coordinate.js";
import { Dish } from "./objects/dish.js";
import { Menu } from "./objects/menu.js";
import { Restaurant } from "./objects/restaurant.js";

// Creamos nuestra funcion de testeo
function testObjects() {
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
        console.error(error.message);
    }

    // Testeo Category
    try {
        console.log("--- TESTEANDO CLASE CATEGORY ---");

        // Creamos la categoria
        const category = new Category("Arroces");
        category.description = "Arroces de nuestra carta";

        console.log(category.toString());
    } catch (error) {
        console.error(error.message)
    }

    // Testeo Allergen
    try {
        console.log("--- TESTEANDO CLASE ALLERGEN ---");
        
        // Creamos el alergeno
        const allergen = new Allergen("Alérgeno");
        allergen.description = "Descripción del alérgeno";

        console.log(allergen.toString());
    } catch (error) {
        console.error(error.message);
    }

    // Testeo Menu
    try {
        console.log("--- TESTEANDO CLASE MENU ---");

        // Creamos el menu
        const menu = new Menu("Menú");
        menu.description = "Descripción del menu";

        console.log(menu.toString());
    } catch (error) {
        console.error(error.message);
    }

    // Testeo restaurant & coordinate
    try {
        console.log("--- TESTEANDO RESTAURANT & COORDINATE ---");

        // Creamos el restaurante y las coordenadas
        const coords = new Coordinate(75, 129);
        const restaurant = new Restaurant("Doña croqueta");

        restaurant.description = "Restaurante especializado en croquetas";
        restaurant.location = coords;

        console.log(coords.toString());
        console.log(restaurant.toString());
    } catch (error) {
        console.error(error.message);
    }
}

// Llamamos a la función de testeo para que se ejecute
testObjects();