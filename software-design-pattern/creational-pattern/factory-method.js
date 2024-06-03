// creator concreteCreator -> interface <- concreteProduct
// abstract factory 
var Logistics = /** @class */ (function () {
    function Logistics() {
    }
    return Logistics;
}());
//concrete factory creators
var RoadLogistics = /** @class */ (function () {
    function RoadLogistics() {
    }
    RoadLogistics.prototype.createLogistics = function () {
        return new Truck();
    };
    return RoadLogistics;
}());
var WaterLogistics = /** @class */ (function () {
    function WaterLogistics() {
    }
    WaterLogistics.prototype.createLogistics = function () {
        return new Ship();
    };
    return WaterLogistics;
}());
//concrete product
var Ship = /** @class */ (function () {
    function Ship() {
        this.mode = "water ways";
    }
    Ship.prototype.deliver = function () {
        console.log("Ship Deliver method :: ", this.mode);
    };
    return Ship;
}());
var Truck = /** @class */ (function () {
    function Truck() {
        this.mode = "road ways";
    }
    Truck.prototype.deliver = function () {
        console.log("Truck Deliver method :: ", this.mode);
    };
    return Truck;
}());
//client code
function client() {
    var roadMode = new RoadLogistics().createLogistics();
    roadMode.deliver();
    var waterMode = new WaterLogistics().createLogistics();
    waterMode.deliver();
}
client();
