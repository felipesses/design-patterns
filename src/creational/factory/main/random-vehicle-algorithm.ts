import { BikeFactory } from '../factories/bike-factory';
import { CarFactory } from '../factories/car-factory';
import { randomNumbers } from '../utils/random-numbers';
import { Vehicle } from '../vehicle/vehicle';

export function randomVehicleAlgorithm(): Vehicle {
  const carFactory = new CarFactory();
  const bikeFactory = new BikeFactory();

  const car1 = carFactory.getVehicle('Fusca');
  const car2 = carFactory.getVehicle('Celta');

  const bike = bikeFactory.getVehicle('Caloi');

  const vehicles = [car1, car2, bike];

  return vehicles[randomNumbers(vehicles.length)];
}
