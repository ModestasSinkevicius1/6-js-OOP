import { Car } from "./Car.js";

class Volvo extends Car{
    constructor(){
        super();
        this.marke = 'Volvo';
        this.saugosDirzas = false;
    }

    uzsegtiDirza(){
        this.saugosDirzas = true;
    }

    atsegtiDirza(){
        this.saugosDirzas = false;
    }
}

export { Volvo };