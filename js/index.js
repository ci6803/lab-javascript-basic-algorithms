console.log("I'm ready!");
// Iteration 1: Names and Input

// 1.1 & 1.2
let hacker1 = "Hsinju";
console.log(`The driver's name is ${hacker1}.`);

// 1.3 & 1.4
let hacker2 = "Yu";
console.log(`The navigator's name is ${hacker2}.`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters.`
  );
} else if (hacker1.length < hacker2.length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length} characters`
  );
} else {
  console.log(
    `Wow, you both have equally long names, ${hacker2.length} characters!`
  );
}

// Iteration 3
// 3.1
let newHacker1 = "";

for (i = 0; i < hacker1.length; i++) {
  newHacker1 += hacker1[i] + " ";
}
newHacker1 = newHacker1.toUpperCase();

console.log(newHacker1);

//3.2
let newHacker2 = "";
for (i = hacker2.length - 1; i >= 0; i--) {
  newHacker2 += hacker2[i];
}
console.log(newHacker2);

//3.3
if (hacker1 < hacker2) {
  console.log(`The driver's name goes first.`);
} else if (hacker2 < hacker1) {
  console.log("Yo, the navigator goes first definitely.");
} else {
  console.log("What?! You both have the same name?");
}

// Bonus 1
let para1 =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

let words = 1;
for (i = 0; i < para1.length; i++) {
  if (para1[i] === " ") {
    words++;
  }
}
console.log(words);

let etNumber = 0;
for (i = 0; i < para1.length; i++) {
  if (para1[i] === "e" && para1[i + 1] === "t") {
    if (para1[i - 1] === " " && para1[i + 2] === " ") {
      etNumber++;
    }
  }
}
console.log(etNumber);

// Bonus 2
function phraseCheck(phrase) {
  let len = phrase.length;

  for (let i = 0; i < len / 2; i++) {
    if (phrase[i] === phrase[len - 1 - i]) {
      return "This is a palindrome.";
    } else {
      return "This is not a palindrome.";
    }
  }
}

console.log(phraseCheck("stack cats"));

/* This is the best I can do by using only for loop and if statement but cannot function well if there are non-alphabatical characters.