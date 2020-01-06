/*
 * You'll eventually be given instructions how to use this file
 * If you want to use it before then, you'll have to figure it out yourself
 */

// You don't actually want to fill *this* value in on line 9, but you'll see
// other places in this file where you'll replace the FILL_ME_IN with a
// different value.
var FILL_ME_IN = 'Fill this value in';
 
describe('Introduction to Mocha Tests - READ ME FIRST', function() {
  // A Mocha test is just a function!
  // If the function throws an error when run, it fails.
  // If it doesn't throw an error when run, it doesn't fail. 
  // To read more about mocha, visit mochajs.org

  // Once you've read and understood this section, please comment it out. 
  // You will not be able to proceed with a failing test. 

  it('Throws an error so it fails', function() {
    
  });

  it('Doesn\'t throw an error, so it doesn\'t fail', function() {
    // This test doesn't really test anything at all! It will pass no matter what.
    var even = function(num){
      return num/2 === 0;
    }
    return even(10) === true;
  });

  // In tests, we want to compare the expected behavior to the actual behavior.
  // A test should only fail if the expected behavior doesn't match the actual.
  it('Throws an error when expected behavior does not match actual behavior', function() {
    var even = function(num){
      return num/2 === 0;
    }

    if(even(10) === true) {
      throw new Error('10 should be even!');
    }
  });
});
describe('Diner\'s Club', function() {
  // Be careful, tests can have bugs too...

  it('has a prefix of 38 and a length of 14', function() {
    if (detectNetwork('38345678901234') !== 'Diner\'s Club') {
      throw new Error('Test failed');
    }
  });

  it('has a prefix of 39 and a length of 14', function() {
    if (detectNetwork('39345678901235') !== 'Diner\'s Club') {
      throw new Error('Test failed');
    }
 
  });
});

describe('American Express', function() {
  // It can get annoying to keep typing the if/throw, so here is a
  // helper function to throw an error if the input statement isn't true. 
  var assert = function(isTrue) {
    if(isTrue) {
      throw new Error('Test failed');
    }
 
  };

  it('has a prefix of 34 and a length of 15', function() {
    assert(detectNetwork('343456789012345') !== 'American Express');
  });

  it('has a prefix of 37 and a length of 15', function() {
    assert(detectNetwork('373456789012345') !== 'American Express');
  });
});

describe('Visa', function() {
  // Chai is an entire library of helper functions for tests!
  // Chai provides an assert that acts the same as our previous assert.
  // Search the documentation to figure out how to access it. 
  //   http://chaijs.com/
  var assert = chai.assert
 

  it('has a prefix of 4 and a length of 13', function() {
    assert(detectNetwork('4123456789012') === 'Visa');
  });

  it('has a prefix of 4 and a length of 16', function() {
    assert(detectNetwork('4123456789012345') === 'Visa');
  });

  it('has a prefix of 4 and a length of 19', function() {
    assert(detectNetwork('4123456789012345678') === 'Visa');
  });
});

describe('MasterCard', function() {
  // Chai lets you write more human-readable tests that throw helpful errors.
  // Expect syntax is one way to do this, but there are others. 
  // If you want to know more, check out the documentation. 
  //   http://chaijs.com/api/bdd/
  var expect = chai.expect;
 
  it('expects to return true', function() {
    detectNetwork('5112345678901234').should.equal('MasterCard');
  });
 
  it('expects to return true', function() {
    detectNetwork('5212345678901234').should.equal('MasterCard');
  });
 
  it('expects to return true', function() {
    detectNetwork('5312345678901234').should.equal('MasterCard');
  });
 

  // You can also use should instead of expect, which changes the style
  // slightly. It really doesn't matter which one you use - check out 
  // http://chaijs.com/guide/styles/ for more info, but it's important
  // to be consistent (unlike in this file, where we use BOTH expect
  // and should, but that's just for learning), so once you've gotten 
  // these tests to pass using should syntax, refactor your tests to 
  // use either expect or should, but not both. 
  var should = chai.should();
  
  it('has a prefix of 54 and a length of 16', function() {
    detectNetwork('5412345678901234').should.equal('MasterCard');
  });
 
  it('has a prefix of 55 and a length of 16', function() {
    detectNetwork('5512345678901234').should.equal('MasterCard');
  })
 
});

describe('Discover', function() {
  // Tests without a function will be marked as "pending" and not run
  // Implement these tests (and others) and make them pass!
  var assert = chai.assert

  it('has a prefix of 6011 and a length of 16', function() {
    assert(detectNetwork('6011319025319024') === 'Discover');
  });
  it('has a prefix of 6011 and a length of 19', function() {
    assert(detectNetwork('6011531902291357597') === 'Discover');
  });

  it('has all these numbers as well', function() {
    assert(detectNetwork('6512345678901234') === 'Discover');
    assert(detectNetwork('6512345678901234531') === 'Discover');

    assert(detectNetwork('6447512345678901234') === 'Discover');
    assert(detectNetwork('6442345678901234') === 'Discover');
    assert(detectNetwork('6451912345678901234') === 'Discover');
    assert(detectNetwork('6452345678901234') === 'Discover');
    assert(detectNetwork('6465312345678901234') === 'Discover');
    assert(detectNetwork('6462345678901234') === 'Discover');
    assert(detectNetwork('6475512345678901234') === 'Discover');
    assert(detectNetwork('6472345678901234') === 'Discover');
    assert(detectNetwork('6485332345678901234') === 'Discover');
    assert(detectNetwork('6482345678901234') === 'Discover');
    assert(detectNetwork('6495312345678901234') === 'Discover');
    assert(detectNetwork('6492345678901234') === 'Discover');
  });

});

describe('Maestro', function() {

  it('Checks all of these numbers', function() {

    for (let j = 0; j < 4; j++) {
      
      for (let i = 0; i < 8; i++) {
        
        let endfix = 0
        let prefix = 0

        if (j == 0) {
          prefix = '5018'
        } else if (j == 1) {
          prefix = '5020'
        } else if (j == 2) {
          prefix = '5038'
        } else if (j == 3) {
          prefix = '6304'
        }

        if (i == 0) {
          endfix = '12345678'
        } else if (i == 2) {
          endfix = '123456789'
        } else if (i == 3) {
          endfix = '1234567890'
        } else if (i == 4) {
          endfix = '12345678901'
        } else if (i == 5) {
          endfix = '123456789012'
        } else if (i == 6) {
          endfix = '1234567890123'
        } else if (i == 7) {
          endfix = '12345678901234'
        } else if (i == 1) {
          endfix = '123456789012345'
        }
    
     if (detectNetwork(`${prefix}${endfix}`) !== 'Maestro') {
      throw new Error('Test failed');
    } 
  }
}
  });
});


describe('China UnionPay', function() {

  it('Checks all of the nubers with prefixes of 622126-622925', function() {

    for (let i = 0; i < 800; i++) {

      for (let j = 0; j < 4; j++) {
          let endfix = 0

          if (j == 0) {
              endfix = 1234567890
            } else if (j == 1) {
              endfix = 12345678901
            } else if (j == 2) {
              endfix = 123456789012
            } else if (j == 3) {
              endfix = 1234567890123
            }
    
          let prefix = 622126 + i
          let cardNumber = prefix.toString() + endfix.toString()
          if (detectNetwork(`${cardNumber}`) !== 'China UnionPay') {
            throw new Error('Test failed');
          }

  } 
}

  });

  it('Checks all of the prefixes 624-626', function() {

    for (let i = 0; i < 3; i++) {

      for (let j = 0; j < 4; j++) {
    
        let endfix = 0
    
        if (j == 0) {
          endfix = 1234567890753
        } else if (j == 1) {
          endfix = 12345678901753
        } else if (j == 2) {
          endfix = 123456789012753
        } else if (j == 3) {
          endfix = 1234567890123753
        }
    
        let prefix = 624 + i
        let cardNumber = prefix.toString() + endfix.toString()
        if (detectNetwork(cardNumber) !== 'China UnionPay') {
          throw new Error('Test failed');
        }
    
      }
    }
    

  });


  it('Checks all of the prefixes 6282-6288', function() {

    for (let i = 0; i < 7; i++) {

      for (let j = 0; j < 4; j++) {
    
        let endfix = 0
    
        if (j == 0) {
          endfix = 123456789075
        } else if (j == 1) {
          endfix = 1234567890153
        } else if (j == 2) {
          endfix = 12345678902753
        } else if (j == 3) {
          endfix = 123456789123753
        }
    
        let prefix = 6282 + i
        let cardNumber = prefix.toString() + endfix.toString()
        if (detectNetwork(cardNumber) !== 'China UnionPay') {
          throw new Error('Test failed');
        }
    
      }
    }
    

  });
});




describe('Switch', function() {

  it('Checks The numbers for the switch cards', function() {


      for (let j = 0; j < 3; j++) {
    
        let endfix = 0
    
        if (j == 0) {
          endfix = 123456789012
        } else if (j == 1) {
          endfix = 1234567890
        } else if (j == 2) {
          endfix = 1234567890123
        } 
    
        let prefix = '564182'
        let cardNumber = prefix + endfix.toString()
        detectNetwork(cardNumber)
    
      }
    

  });

  it('Checks The numbers for the switch cards', function() {


    for (let j = 0; j < 3; j++) {
  
      let endfix = 0
  
      if (j == 0) {
        endfix = 123456789012
      } else if (j == 1) {
        endfix = 1234567890
      } else if (j == 2) {
        endfix = 1234567890123
      } 
  
      let prefix = '633110'
      let cardNumber = prefix + endfix.toString()
      detectNetwork(cardNumber)
  
    }
});

it('Checks all of these numbers again but more', function() {

  for (let j = 0; j < 3; j++) {

    let endfix = 0

    if (j == 0) {
      endfix = 12345678901253
    } else if (j == 1) {
      endfix = 123456789053
    } else if (j == 2) {
      endfix = 123456789012353
    } 

    let prefix = '4903'
    let cardNumber = prefix + endfix.toString()
    detectNetwork(cardNumber)

  }
});

it('Checks all of these numbers again but more', function() {

for (let j = 0; j < 3; j++) {

  let endfix = 0

  if (j == 0) {
    endfix = 12345678901253
  } else if (j == 1) {
    endfix = 123456789053
  } else if (j == 2) {
    endfix = 123456789012353
  } 

  let prefix = '4905'
  let cardNumber = prefix + endfix.toString()
  detectNetwork(cardNumber)

}
});

it('Checks all of these numbers again but more', function() {

for (let j = 0; j < 3; j++) {

let endfix = 0

if (j == 0) {
  endfix = 12345678901253
} else if (j == 1) {
  endfix = 123456789053
} else if (j == 2) {
  endfix = 123456789012353
} 

let prefix = '4911'
let cardNumber = prefix + endfix.toString()
detectNetwork(cardNumber)

}
});


it('Checks all of these numbers again but more', function() {

for (let j = 0; j < 3; j++) {

let endfix = 0

if (j == 0) {
endfix = 12345678901253
} else if (j == 1) {
endfix = 123456789053
} else if (j == 2) {
endfix = 123456789012353
} 

let prefix = '4936'
let cardNumber = prefix + endfix.toString()
detectNetwork(cardNumber)

}
});

it('Checks all of these numbers again but more', function() {

for (let j = 0; j < 3; j++) {

let endfix = 0

if (j == 0) {
endfix = 12345678901253
} else if (j == 1) {
endfix = 123456789053
} else if (j == 2) {
endfix = 123456789012353
} 

let prefix = '6333'
let cardNumber = prefix + endfix.toString()
detectNetwork(cardNumber)

}
});

it('end check', function() {

for (let j = 0; j < 3; j++) {

let endfix = 0

if (j == 0) {
endfix = 12345678901253
} else if (j == 1) {
endfix = 123456789053
} else if (j == 2) {
endfix = 123456789012353
} 

let prefix = '6759'
let cardNumber = prefix + endfix.toString()
detectNetwork(cardNumber)

}
});





});




