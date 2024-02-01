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

const oven = new Oven(100);
oven.maxTemperature = 15;
console.log(oven.maxTemperature);