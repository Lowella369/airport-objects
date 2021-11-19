class Passenger {
    constructor(name, passportNumber, seatNumber){
        this.name = name
        this.passportNumber =  passportNumber
        this.seatNumber = seatNumber
        this.bags = []
    }

    addBag(bag) {
        this.bags.push(bag)
    }
}

//const passenger = new Passenger('Tristan', 'pn123','seat1')
//passenger.addBag(1)
//passenger.addBag(3)

//console.log(passenger.bags)
//console.log(passenger.name) // 16

module.exports = Passenger