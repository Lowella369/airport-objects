const Person = require('./person')

describe('Person', () => {
    const testPerson = new Person("Joe")

    test('has a name', () => {
        expect(testPerson.name).toBe("Joe")
    })

    test('has bags', () => {
        testPerson.addBag(3)
        testPerson.addBag(6)
        expect(testPerson.bags[0]).toBe(3)
        expect(testPerson.bags[1]).toBe(6)
    })

})