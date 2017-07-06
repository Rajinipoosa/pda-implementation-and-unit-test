var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')


describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  })
  
  it('it has to test add function',function(){
    calculator.previousTotal = 1;
      calculator.add(5);
    assert.equal(6, calculator.runningTotal)

  } )
  it('it has to test Substract function',function(){
      calculator.previousTotal = 5;
      calculator.subtract(3);
    assert.equal(2, calculator.runningTotal)

  } )

  it('it has to test Multiply function',function(){
     calculator.previousTotal = 5;
     calculator.multiply(3);
    assert.equal(15, calculator.runningTotal)

  } )
 it('it has to test Divide function',function(){
     calculator.previousTotal = 3;
     calculator.divide(3);
   assert.equal(1, calculator.runningTotal)

 } )
 it('it has to test operator add function',function(){
     calculator.previousTotal = 3;
     calculator.previousOperator = '+';
     calculator.operatorClick('-');
    assert.equal(3, calculator.runningTotal)

 })
 it('it has to test clear the total function',function(){
     calculator.runningTotal = 0;
     calculator.clearClick();
    assert.equal(null, calculator.previousTotal)

 })
 

});
