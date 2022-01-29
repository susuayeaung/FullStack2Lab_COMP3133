const assert = require('chai').assert
const calculator = require('../app/calculator.js')

describe('Calculator', () => {
    describe('Add', () => {
        it('Expected result 7 PASS', function(){
            let result = calculator.add(5,2)
            assert.equal(result, 7)
        })
        it('Expected result 8 FAIL', function(){
            let result = calculator.add(5,2)
            assert.equal(result, 8)
        })
    })

    describe('Sub', () => {
        it('Expected result 3 PASS', function(){
            let result = calculator.sub(5, 2)
            assert.equal(result, 3)
        })
        it('Expected result 5 FAIL', function(){
            let result = calculator.sub(5, 2)
            assert.equal(result, 5)
        })
    })

    describe('Mul', () => {
        it('Expected result 10 PASS', function(){
            let result = calculator.mul(5, 2)
            assert.equal(result, 10)
        })
        it('Expected result 12 FAIL', function(){
            let result = calculator.mul(5, 2)
            assert.equal(result, 12)
        })
    })

    describe('Div', () => {
        it('Expected result 5 PASS', function(){
            let result = calculator.div(10, 2)
            assert.equal(result, 5)
        })
        it('Expected result 2 FAIL', function(){
            let result = calculator.div(10, 2)
            assert.equal(result, 2)
        })
    })
})
