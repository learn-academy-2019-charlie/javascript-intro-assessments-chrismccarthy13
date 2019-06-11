// Intro to Javascript Assessments

// Consider this variable:

var mantra = "Be the dev";

// 1. Write the code that returns 'B' from mantra.
console.log(mantra[0])

// 2. Write the code that determines if there is a 'x' in mantra.
var letterX = mantra.indexOf("x", 0)
if(letterX !== true){
  console.log("Does not contain the letter x")
}

// 3. Write the code that determines if there is a 'v' in mantra.
for(i=0; i<mantra.length; i++){
    if(mantra.indexOf("v") !== -1){
        console.log("Contains the letter V");
        break;
    } else {
        console.log("Does not contain the letter")
        break;
    }
}

// Stretch: Write the code that returns the position of 'v' in mantra.
var findV = "v"
var findIndex = mantra.indexOf(findV)

console.log("The index of letter V is " + findIndex)

// Consider the following statement:

var codingIsEasy
var imBored

if (codingIsEasy && imBored) {
    console.log("I need more!")
} else {
    console.log("Steady as she goes")
}

// 4. Update the codingIsEasy and imBored variables above the statement to the values required to log "I need more!"
var codingIsEasy = true
var imBored = true

if (codingIsEasy && imBored) {
    console.log("I need more!")
} else {
    console.log("Steady as she goes")
}

// Consider the following statement:

var imLost
var imFrustrated

if (imLost || imFrustrated) {
    console.log('Break time!')
} else {
    console.log('Keep coding!')
}

// 5. Update the imLost and imFrustated variables above the statement to the values required to log "Keep coding!"
var imLost = false
var imFrustrated = false

if (imLost || imFrustrated) {
    console.log('Break time!')
} else {
    console.log('Keep coding!')
}

// 6a. Recall the mantra variable from the first question. Write the code that logs each letter of mantra using a for loop.
for (let i=0; i<mantra.length; i++){
  console.log(mantra[i])
}

// Stretch: Using a while loop.
var i = 0

while (mantra[i]) {
  console.log(mantra[i])
  i++
}

// Super Stretch: Using forEach().


// Consider the following variable:
var message = "thisisateststring"

// 7. Write a function that takes a string like message as an argument and returns the string without vowels.
function deleteVowels(letters){
  var vowels = ["a", "e", "i", "o", "u"]
  let newString = []

  for(let i=0; i<letters.length; i++){
    if(vowels.indexOf(letters[i]) === -1){
      newString.push(letters[i])
    }
  }
  return newString
}

console.log(deleteVowels(message))

// Stretch: Update your function to throw an exception if the argument is not a string.
var newMessage=123;

function deleteVowels(letters){
  var vowels = ["a", "e", "i", "o", "u"]
  let newString = []

  for(let i=0; i<letters.length; i++){
    if(vowels.indexOf(letters[i]) === -1){
      newString.push(letters[i])
    } else {
      throw new letters("Parameter is not a string!")
    }
  }
  return newString
}

console.log(deleteVowels(newMessage))

// Super Duper Stretch: Update your function to throw a TypeError if the argument is not a string.

// Consider the following variable:

var toonimals = [ {name: 'Itchy', animal: 'mouse'}, {name: 'Stimpy', animal: 'cat'}, {name: 'Daffy', animal: 'duck'}, {name: 'Scratchy', animal: 'cat'}, {name: 'Ren', animal: 'dog'}, {name: 'Felix', animal: 'cat'}]

// 8. Write a function that takes an array like toonimals and returns an array with only the toons that are cats.

searchCats = (cat) => {
  var newCats = []
  for(let i=0; i<cat.length; i++){
    if(cat[i].animal === 'cat'){
      newCats.push(cat[i])
    }
  }
  return newCats
}

console.log(searchCats(toonimals))
