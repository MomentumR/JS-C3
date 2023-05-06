class HomeTechics {
    constructor (name, voltage) {
        this.name = name;
        this.voltage = voltage;
        this.works = false;
    };

    turnOn () {
        console.log(this.name + ' turned on')
        this.works = true;
    };

    turnOff () {
        console.log(this.name + ' turned off')
        this.works = false;
    };
}


class Tv extends (HomeTechics) {
    constructor (name, voltage) {
        super(name, voltage);
        this.category = 'Tv';
    };
}


class Acoustics extends (HomeTechics) {
    constructor (name, voltage) {
        super(name, voltage);
        this.category = 'Acoustics';
    };
}


const tv1 = new Tv('samsung', 100);
const mus1 = new Acoustics('edifier', 30);

tv1.turnOn();
mus1.turnOff();

console.log(tv1);
console.log(mus1);