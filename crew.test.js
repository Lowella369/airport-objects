const Crew = require("./crew")

describe('Crew class', () => {
    
    test('Crew has name', () => {
        const testCrew = new Crew('Tristan')
        expect(testCrew.name).toBe('Tristan')
    })

    test('Crew has id', () => {
        const testCrew = new Crew('Tristan', 'ID123', 'Cabin Crew')
        expect(testCrew.id).toBe('ID123')
    })

    test('Crew has position', () => {
        const testCrew = new Crew('Tristan', 'ID123', 'Cabin Crew')
        expect(testCrew.position).toBe('Cabin Crew')
    })
})