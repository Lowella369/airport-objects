const Passenger = require("./passenger")

describe('Passenger class', () => {
    
    test('passenger has name', () => {
        const testPassenger = new Passenger('Tristan', 'pn123','seat1')
        expect(testPassenger.name).toBe('Tristan')
    })

    test('passenger has passportNumber', () => {
        const testPassenger = new Passenger('Tristan', 'pn123', 'seat1')
        expect(testPassenger.passportNumber).toBe('pn123')
    })

    test('passenger has seatNumber', () => {
        const testPassenger = new Passenger('Tristan', 'pn123', 'seat1')
        expect(testPassenger.seatNumber).toBe('seat1')
    })
    test('passenger  has bag', () => {
        const testPassenger = new Passenger('Tristan', 'pn123', 'seat1')
        testPassenger.addBag(1)
        testPassenger.addBag(2)
        expect(testPassenger.bags[0]).toBe(1)
        expect(testPassenger.bags[1]).toBe(2)
    })
})