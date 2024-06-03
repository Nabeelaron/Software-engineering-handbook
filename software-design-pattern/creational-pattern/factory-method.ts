`
* You avoid tight coupling between the creator and the concrete products.
* Single Responsibility Principle. You can move the product creation code into one place in the program, making the code easier to support.
* Open/Closed Principle. You can introduce new types of products into the program without breaking existing client code.
`

// abstract factory creator
abstract class Logistics
{
    public abstract createLogistics() : Transporter;  //factory methods returns objects called product
}

//concrete factory creators
class RoadLogistics implements Logistics
{
    public createLogistics() : Transporter
    {
        return new Truck();
    }
}

class WaterLogistics implements Logistics
{
    public createLogistics() : Transporter
    {
        return new Ship();
    }
}


//interface product
interface Transporter 
{
    mode : string;
    deliver();
}


//concrete product
class Ship implements Transporter
{
    mode = "water ways";
    deliver() {
        console.log("Ship Deliver method :: ", this.mode)
    }
}


class Truck implements Transporter
{
    mode = "road ways";
    deliver() {
        console.log("Truck Deliver method :: ", this.mode)
    }
}

//client code
function client() : void
{
    let roadMode  = new RoadLogistics().createLogistics();
    roadMode.deliver();
    let waterMode  = new WaterLogistics().createLogistics();
    waterMode.deliver();
}

client()