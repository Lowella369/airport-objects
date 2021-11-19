const Airplane = require("./airplane")

describe('Airplane class',  () => {

    test('Airplane has origin', () => {
        const testAirplane = new Airplane('DFW', 'CBU-PHILS','Tristan','DELTA77')
        expect(testAirplane.origin).toBe('DFW')
    })

    test('Airplane has destination', () => {
        const testAirplane = new Airplane('DFW', 'CBU-PHILS', 'Tristan', 'DELTA777')
        expect(testAirplane.destination).toBe('CBU-PHILS')
    })

    test('Airplane has passengers', () => {
        const testAirplane = new Airplane('DFW', 'CBU-PHILS', ['Melissa', 'Foxy'], 'DELTA77')
        //expect(testAirplane.passengers[0]).toBe('Melissa')
        //expect(testAirplane.passengers[1]).toBe('Foxy')
        expect(testAirplane.passengers).toStrictEqual(['Melissa', 'Foxy'])
    })

   test('Airplane has model', () => {
       const testAirplane = new Airplane('DFW', 'CBU-PHILS', 'Tristan', 'DELTA77')
       expect(testAirplane.model).toBe('DELTA77')
   })
})