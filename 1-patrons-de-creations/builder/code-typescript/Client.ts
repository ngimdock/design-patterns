import { CarBuilder } from "./builders/concreateBuilders/carBuilder.js";
import { Car } from "./entities/car";
import { Director } from "./director/director.js";

const carBuilder: CarBuilder = new CarBuilder();

const director: Director = new Director(carBuilder);
director.buildFullFeaturedProduct();
const car: Car = carBuilder.getResult();

console.log(car);
