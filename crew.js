const Person = require('./person')

class Crew extends Person{
    constructor(name, bags, statffNumber, position){
        super(name,bags)
        this.staffNumber = statffNumber
        this.position = position
    }
}

module.exports = Crew