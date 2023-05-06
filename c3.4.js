function HomeTechics(name, voltage) {
    this.name = name;
    this.voltage = voltage;
    this.works = false;
};

HomeTechics.prototype.turnOn = function() {
    console.log(this.name + ' turned on')
    this.works = true;
};

HomeTechics.prototype.turnOff = function() {
    console.log(this.name + ' turned off')
    this.works = false;
};


function Tv(name, voltage) {
    this.name = name;
    this.power = voltage;
    this.works = true;
}


function Acoustics(name, voltage) {
    this.name = name;
    this.power = voltage;
    this.works = false;
}


Tv.prototype = new HomeTechics();
Acoustics.prototype = new HomeTechics();


const tv1 = new Tv("samsung", 100);
const mus1 = new Acoustics("edifier", 30);


tv1.turnOn();
mus1.turnOff();


console.log(tv1);
console.log(mus1);