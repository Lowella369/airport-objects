const Airport = require("./airport")

describe('Airport class', () => {

    test('airport has name', () => {
        const testAirport = new Airport('DFW-TX', 'Dallas Texas')
        expect(testAirport.name).toBe('DFW-TX')
    })

    test('airport has location', () => {
        const testAirport = new Airport('DFW-TX', 'Dalass Texas')
        expect(testAirport.location).toBe('Dalass Texas')
    })
})