function Vehicle(){
    this.hasEngine = true;
}

function Car(){
    Vehicle.call(this);
    this.hasWindShield = true;
}

/**
 * i.e Car.prototype.__proto__ stores address of Vehicle.prototype
 */

Object.setPrototypeOf(Car.prototype,Vehicle.prototype);

Car.prototype.start=function(){
    console.log('Engine starting..!!');
}
function Manufacturer(){
    Car.call(this);
    this.brand = "XYZ";
}
/**
 * Manufacturer.prototype.__proto__ stores address of Car.prototype
 */
Object.setPrototypeOf(Manufacturer.prototype,Car.prototype);

/**
 * temp.__proto__ stores address of Manufacturer.prototype
 */
var temp = new Manufacturer();
console.log(temp.hasEngine,temp.hasWindShield,temp.brand,temp.start());