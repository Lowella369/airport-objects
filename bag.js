class Bag {
    constructor(weight){
        this.weight = weight
        this.valid_weight = function() {
            if(this.weight > 0 && this.weight <= 30){
                return true
            }
            else {
                return false
            }
        }

        }
    }
    
//const bag = new Bag(16)
//console.log(bag.weight) // 16

module.exports = Bag