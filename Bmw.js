import { Car } from "./Car.js";

class Bmw extends Car{
    constructor(){
        super();
        this.marke = 'Bmw';
        this.saugosDirzas = false;
        this.stoteles = 0;
    }

    skintiStotele(){
        this.stoteles++;
    }
}

export { Bmw };