const Airplane = require("./airplane")

describe('Airplane class',  () => {

    test('Airplane has name', () => {
        const testAirplane = new Airplane('DFW', 'CBU-PHILS','Eagle','DELTA77')
        expect(testAirplane.name).toBe('Eagle')
    })
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
        expect(testAirplane.name).toStrictEqual(['Melissa', 'Foxy'])
    })

   test('Airplane has model', () => {
       const testAirplane = new Airplane('DFW', 'CBU-PHILS', 'Tristan', 'DELTA77')
       expect(testAirplane.model).toBe('DELTA77')
   })

   test('Airplane has passengers', () => {
       const testAirplane = new Airplane('DFW')
       testAirplane.addPassenger('Lucille')
       testAirplane.addPassenger('Melissa')
       expect(testAirplane.passengers).toStrictEqual(['Lucille', 'Melissa'])
   })

   test('Airplane has crews', () => {
       const testAirplane = new Airplane('DFW')
       testAirplane.addCrew('Jessie')
       testAirplane.addCrew('Nadela')
       expect(testAirplane.crews).toStrictEqual(['Jessie', 'Nadela'])
   })
})