const { test, expect } = require("@jest/globals")
const { setFlagsFromString } = require("v8")
const Bag = require("./bag")

describe('Bag class', () => {
    
    test('bag needs a weight', () => {
        const testBag = new Bag(16)
        expect(testBag.weight).toBe(16)
    })

    test('bag has valid_weight', () => {
        const testBag = new Bag(3)
        expect(testBag.valid_weight()).toBe(true)
    })

    test('bag has valid_weight', () => {
        const testBag = new Bag(0)
        expect(testBag.valid_weight()).toBe(false)
    })
})