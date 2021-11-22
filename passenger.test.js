const Passenger = require("./passenger")

describe('Passenger class', () => {

    test('is an instance of a Passenger', () => {
        const betty = new Passenger('Betty', 'ABC123', '1A')
        expect(betty instanceof Passenger).toBeTruthy()
    })
    
    test('passenger has name', () => {
        const testPassenger = new Passenger('Tristan', 2 ,'pn123','seat1')
        expect(testPassenger.name).toBe('Tristan')
    })

    test('passenger has passportNumber', () => {
        const testPassenger = new Passenger('Tristan', 1, 'pn123', 'seat1')
        expect(testPassenger.passportNumber).toBe('pn123')
    })

    test('passenger has seatNumber', () => {
        const testPassenger = new Passenger('Tristan', 3, 'pn123', 'seat1')
        expect(testPassenger.seatNumber).toBe('seat1')
    })
    test('passenger  has bag', () => {
        const testPassenger = new Passenger('Tristan',5, 'pn123', 'seat1')
        testPassenger.addBag(1)
        testPassenger.addBag(2)
        expect(testPassenger.bags).toStrictEqual([1,2])
    })
})