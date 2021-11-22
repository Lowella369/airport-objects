const Crew = require("./crew")

describe('Crew class', () => {

    test('is an instance of a Crew', () => {
        const testCrew = new Crew('Betty', 2, 'ABC123', '1A')
        expect(testCrew instanceof Crew).toBeTruthy()
    })
    
    test('Crew has name', () => {
        const testCrew = new Crew('Tristan')
        expect(testCrew.name).toBe('Tristan')
    })

    test('Crew has id', () => {
        const testCrew = new Crew('Tristan', 2, 'ID123', 'Cabin Crew')
        expect(testCrew.staffNumber).toBe('ID123')
    })

    test('Crew has position', () => {
        const testCrew = new Crew('Tristan', 3, 'ID123', 'Cabin Crew')
        expect(testCrew.position).toBe('Cabin Crew')
    })

    test('Crew has bags', () => {
        const testCrew = new Crew('Tristan')
        testCrew.addBag(3)
        testCrew.addBag(4)
        expect(testCrew.bags).toStrictEqual([3,4])
    })
})