class Oven {
    constructor(maxTemperature) {
        this._maxTemperature = maxTemperature;
    }

    get maxTemperature() {
        return this._maxTemperature;
    }

    set maxTemperature(value) {
        this._maxTemperature = value;
    }
}

class SuperOven extends Oven {
    _temperature = 0;

    turnOn() {
        console.log('Плита включена');
        this._increaseTemperature();
    }

    turnOff() {
        console.log('Печь выключена');
        this._reduceTemperature();
    }

    _increaseTemperature() {
        setTimeout(() => {
            if (this._temperature < this._maxTemperature) {
                this._temperature++;
                this._increaseTemperature();
            } else {
                console.log('Достигнута максимальная температура');
                this.turnOff();
            }
        }, 500);
    }

    _reduceTemperature() {
        setTimeout(() => {
            if (this._temperature > 0) {
                this._temperature--;
                this._reduceTemperature();
            } else {
                console.log('Печь остыла');
            }
        }, 500);
    }
}

const oven = new SuperOven(15);
console.log(oven.maxTemperature);
oven.turnOn();