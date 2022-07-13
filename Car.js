class Car{
    constructor(marke, kaina, litrazas, 
                bakas, sedyniu_kiekis,
                langai){
        this.marke=marke;
        this.kaina=kaina;
        this.litrazas=litrazas;
        this.bakas=bakas;
        this.sedyniu_kiekis=sedyniu_kiekis;
        this.langai=langai;     
    }

    ijungtiVarykli(){
        return true;
    }

    isjuntiVarykli(){
        return false;
    }

    nuleistiLanga(x, y){
        if(x === 0 && y === 0)
        {
            return 'vairuotojas';
        }
        if(x === 0 && y === 1)
        {
            return 'salia vairuotojo';
        }
        if(x === 1 && y === 0)
        {
            return 'uz vairuotojo';
        }
        if(x === 1 && y === 1)
        {
            return 'tas kitas';
        }
    }

    pakeltiLanga(x, y){
        if(x === 0 && y === 0)
        {
            return 'vairuotojas';
        }
        if(x === 0 && y === 1)
        {
            return 'salia vairuotojo';
        }
        if(x === 1 && y === 0)
        {
            return 'uz vairuotojo';
        }
        if(x === 1 && y === 1)
        {
            return 'tas kitas';
        }
    }
}

export { Car };
