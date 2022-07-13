import { Car } from "./Car.js";

class Lada extends Car{
    constructor(){
        super();
        this.marke = 'Lada';
    }
}

export { Lada };