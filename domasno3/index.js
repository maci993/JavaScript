//Задача 1.
//а.
//let fruits = ['pear', 'peach', 'plum'];
//let fruitsLength = fruits.length
//console.log(fruitsLength)

//1.
//let firstElementOfFruits = fruits[1]
//console.log(firstElementOfFruits)

//2.
//fruits.push('orange');
//console.log(fruits)

//б.
//let person = {
   // name: 'Marina Stojanovic',
   // age: 29,
   // city: 'Skopje',
//}
//1.
//console.log(person.city)

//2.
//person.age = 30;
//console.log(person)

//Задача 2.
//a.
//for (let i = 0; i <= 10; i++) {
   // console.log(i);
//}

//б.
//let start = 3;
//let end = 10;
//let sum1 = 0;

//for(let i=start; i<=end; i++) {
   // if (i % 2 === 0)
   // sum1 += i;
//}
//console.log(sum)

//в.
//let person1 = {
    //name: 'Marina Stojanovic',
    //age: 29,
    //city: 'Skopje',
//}
//for (let property in person1) {
  // console.log(property + ':' + person1[property]);
//}

//г.
//let colors = ['blue', 'pink', 'purple']
//for (let color of colors) {
   // console.log(color);
//}

//Задача 3.
//a.
let count = 5;

while (count >= 1 ) {
    console.log(count);
    count-- ;
}


// б.
let randomNum = 10;
do { console.log(randomNum)
  randomNum--
} while (randomNum >= 5)


//Задача 4.
//а.
//let multiply = (x, y) => x * y;
//let product = multiply(4, 5);
//console.log(product)


//б.
//let divide = (x, y) => x / y;
//let product1 = divide(25, 5)
//let result1 = 0;
//console.log(product1)

//в.
//let arrowFunction = (a, b) => a * b;
//let product2 = arrowFunction(6, 8);
//let result2 = 0;
//console.log(product2)

//Задача 5.
//function calculateArraySum(num1, num2, num3) {
   // let sum = num1 + num2 + num3;
    //return sum;
//}
//let result4 = calculateArraySum(6, 5, 2);
//console.log(result4)

//Задача 6.????
//let students = {
  //  name: 'Mario',
    //surname: 'Petkovski',
    //age: 24,
    //addess: {
      //  city: 'Skopje',
        //street: {
          //  name1: 'Dimo Hadzi Dimov',
            //number: 90,
           // zipCode: '1000'
        //}
    //}
//}
//console.log(students.addess.city);
//console.log(students["name1"])

//Задача 7.
//a.

  //   let number = 15;
    // if (number % 3 == 0) {
      //  console.log("Fizz")
     //}
     //if (number % 5 == 0  && !number % 3 == 0 ) {
       // console.log("Buzz")
     //}
     //if (number % 5 == 0 && number % 3 == 0) {
      //  console.log("FizzBuzz")
     //}

//б.

let month = "January";
switch (month) {
    case "January":
        console.log("31");
       break;

    case "February":
       console.log("28");
        break;

    case "March":
        console.log("31");
        break;

    case "April":
       console.log("30");
        break;
    
    case "May":
       console.log("31");
        break;
    
    case"June":
        console.log("30");
        break;

    case "July":
        console.log("31");
        break;

    case "August":
       console.log("31")
        break;

    case "September":
        console.log("30")
        break;
    
    case "October":
        console.log("31")
        break;

    case "November":
        console.log("30")
        break;

    case "December":
        console.log("31")
        break;
    default:
        console.log("Invalid input")
}

//Задача 8.

//а.
//let book = {
  //  name: "The Hunger Games",
    //author: "Suzanne Collins",
    //country: { 
      //  name: "United States",
       // language: "English",
        //year: "2008"
    //}

//}
//console.log(book)

//б.

//let car = {
  //  name: "Citroen C4",
    //production: {
      //  year: "2004",
        //country: "France",
        //automaker: "PSA Group",
    //},
//chronology: {
  //  Predecesor: "Citroen Xsara",
    //Successor: "DS 4"
//},
//class: "Smaal family car"
//} 
    
//console.log(car)

//в.
//let student = {
  //  name: "Jane",
    //surname: "Austen",
    //faculty: {
      //  name: "Faculty of Philosophy",
        //department: "Psychology",
        //year: "3rd"
    //},
    //city: "Washington DC",
    //zipCode: "20003"

//}
//console.log(student)

//Задача 9.
//а.
for (let i = 0; i <= 100; i++ {
   if ( i % 2 === 0)
console.log(i)
}


////б.
//for (let i = 1; i <=100; i++) {
  //  if ( i % 2 !==0)
    //console.log(i)
//}

















