import { Volvo } from './Volvo.js';
import { Bmw } from './Bmw.js';
import { Lada } from './Lada.js';

const v = new Volvo();
const b = new Bmw();
const l = new Lada();

console.log(v.marke);
console.log(b.marke);
console.log(l.marke);

console.log(v.ijungtiVarykli());
console.log(v.nuleistiLanga(0, 0));

v.uzsegtiDirza()
console.log(v.saugosDirzas);

console.log(b.stoteles);
b.skintiStotele();
console.log(b.stoteles);