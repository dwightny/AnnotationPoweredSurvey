// inspired by https://github.com/joewalnes/jstinytest
// promisified for this project

const green = '#99ff99';

const red =  '#ff9999';

let failures = 0

let testName

function logMessage(msg) {
  document.body.innerHTML += `<div>${msg}</div`
  document.body.style.backgroundColor = red
}

const TinyTest = {

  run: function(tests) {

    testName = 'init'
    tests[testName]()
    .then( () => {
    testName = 'postFirstAnswer'
    tests[testName]()
    .then ( () => {
    testName = 'postSecondAnswer'
    tests[testName]()
    .then ( () => {
    testName = 'postThirdAnswer'
    tests[testName]()
    .then ( () => {
    testName = 'postFourthAnswer'
    tests[testName]()
    .then ( () => {
    testName = 'postFifthAnswer'
    tests[testName]()
    .then ( () => {
    testName = 'postSixthAnswer'
    tests[testName]()
    .then ( () => {
    testName = 'postSeventhAnswer'
    tests[testName]()
    .then ( () => {
    testName = 'postEighthAnswer'
    tests[testName]()
    .then ( () => {
    testName = 'postNinthAnswer'
    tests[testName]()
    .then ( () => {
    testName = 'endRepeat'
    tests[testName]()
    .then ( () => {
    testName = 'cleanup'
    tests[testName]()
    })
    })
    })
    })
    })
    })
    })
    })
    })
    })
    })

  setTimeout(function() { // Give document a chance to complete
    if (window.document && document.body) {
      document.body.style.backgroundColor = green
    }
  }, 0)

 },

  assert: function(value) {
    if (!value) {
      let msg = `${testName}: 'no value'`
      console.error(msg)
      logMessage(msg)
    }
  },

  assertEquals: function(expected, actual) {
    if (expected != actual) {
      let msg = `${testName}: expected ${expected}, actual ${actual}`
      console.error(msg)
      logMessage(msg)
    }
  },
  
};

const fail                = TinyTest.fail,
      assert              = TinyTest.assert,
      assertEquals        = TinyTest.assertEquals,
      eq                  = TinyTest.assertEquals, // alias for assertEquals
      assertStrictEquals  = TinyTest.assertStrictEquals,
      tests               = TinyTest.run;