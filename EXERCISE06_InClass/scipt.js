// 1. Declare a variable age. Assign it the value 25.
// 2. Declare a variable height. Assign it the value 5.
// 3. Log each variable to the console and hit the "Run" button in the
// console panel. Example: console.log(age)

var age = 25;
console.log(age);

var height = 5
console.log(height);

// 1. If a person is less than 8 years old, recommend the merry-go-round.
// console.log("Check out the Merry-Go-Round. You'll love it!");
// 2. Otherwise if a person is more than 8 years old AND less than 65
// years old AND more than 4.5 feet tall, recommend the roller
// coaster.
// console.log("Check out the Roller Coaster. It's awesome!");
// 3. Otherwise recommend the lazy river
// console.log('Why not enjoy a float down the Lazy River?');

let age = 20;
let height = 4;

if (age < 8){
    console.log("Check out the Merry-Go-Round. You'll love it!");
}
else if (age >= 8 && age < 65 && height > 4.5){
    console.log("Check out the Roller Coaster. It's awesome!");
}
else {
    console.log('Why not enjoy a float down the Lazy River?');
}

// 1. Create three variables called noun verb and adjective and store one
// of each type.
// 2. Choose a short one sentence poem that includes the following
// variables:
//  —  Sample sentence: `My ${noun} leaps ${adjective} when I ${verb}
// a rainbow in the sky:`
// 3. Create five different versions of this sentence with different
// variables.
// 4. Style the HTML pages.

let noun = 'cat';
let verb = 'poop';
let adjective = 'aggresively';

let sentence = `My ${noun} leaps ${adjective} when I ${verb} a rainbow in the sky:`

