import { MainDishBuilder } from './classes/main-dish-builder';

const mainDishBuilder = new MainDishBuilder();

mainDishBuilder.makeDessert().makeRice().makeMeat();

console.log(mainDishBuilder.getMeal());
console.log(mainDishBuilder.getPrice());

mainDishBuilder.reset();

const meal2 = mainDishBuilder.makeDessert().getMeal();

console.log(meal2);
