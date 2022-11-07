let age = 32;
let userName = "max";
let hobbies = ['Sports', 'Reading', 'Searching'];
let job = {
  title: 'Developer',
  place: 'New York',
  salary: 50000,
};

let totalAdultYears;

function calculateAdultYears(userAge) {
  let result;
  result = userAge - 18;
  return result;
}

totalAdultYears = calculateAdultYears(age);
alert(totalAdultYears);

age = 45;
totalAdultYears = calculateAdultYears(age);

alert(totalAdultYears);
