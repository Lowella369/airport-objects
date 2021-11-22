class Airplane {
    constructor(origin, destination, name, model){
        this.name = name
        this.origin = origin
        this.destination = destination
        this.model = model
        this.passengers = []
        this.crews = []
    }

    addPassenger(passenger){
        this.passengers.push(passenger)
    }

    addCrew(crew){
        this.crews.push(crew)
    }
}

module.exports = Airplane