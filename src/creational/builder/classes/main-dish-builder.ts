import { MealBuilderProtocol } from '../interfaces/meal-builder-contract';
import { MealBox } from './composed-meal';
import { Dessert, Meat, Rice } from './meals';

export class MainDishBuilder implements MealBuilderProtocol {
  private _meal: MealBox = new MealBox();

  reset(): this {
    this._meal = new MealBox();
    return this;
  }

  makeMeat(): this {
    const meat = new Meat('Fraldinha', 29);

    this._meal.add(meat);

    return this;
  }

  makeDessert(): this {
    const dessert = new Dessert('Sorvete', 20);

    this._meal.add(dessert);

    return this;
  }

  makeRice(): this {
    const rice = new Rice('Arroz Arbóreo', 5);

    this._meal.add(rice);

    return this;
  }

  getPrice(): number {
    return this._meal.getPrice();
  }

  getMeal(): MealBox {
    return this._meal;
  }
}
