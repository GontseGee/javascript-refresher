/*exercise1:Temperature Check */
let temperature = 30;

if (temperature <0 ){
    console.log("it's freezing!");
} else if (temperature <= 15) {
    console.log("it's cold.");
} else if (temperature <= 25){
    console.log("it's mild.");
}else {
    console.log("it's warm.");
}

switch (true) 
{
    case temperature < 0:
        console.log("it's freezing!");
        break;
        case temperature <= 15:
            console.log("it's cold.");
            break;
        case temperature <= 25:
        console.log("it's mild.");
        break;
        default:
            console.log("it's warm.")     
}

/* exercise 2 :divisibility check */
let num = 20 ;
if (num % 2 === 0 && num % 3 === 0){
    console.log("the number is divisible by both 2 and 3.");
}
    else if(num % 2 === 0){
        console.log("the number is divisible by only 2");
    } 
    else if (num % 3 === 0) {
        console.log("the number is divisible by only 3");
    }
    else{
        console.log("the number is not divisible by 2 or 3.");

    }
let numb= 20;
switch (true) {
    case (numb % 2 === 0 && numb % 3 === 0):
    console.log("the number is Divisible by both 2 and 3.");
    break;
  case (numb % 2 === 0):
    console.log("the number is Divisible by only 2.");
    break;
  case (numb % 3 === 0):
    console.log("the number is Divisible by only 3.");
    break;
  default:
    console.log("the number is Not divisible by 2 or 3.")
}


    /* exercise 3: For Loops */ 
    for(let x = 1 ; x <= 10; x++){
        console.log(x);
    }
for (let x=2 ; x <=20 ; x +=2){
    console.log(x);
}

let sum = 0; 
for (let x=1; x<=100; x++ )
    {
        let sum = 0; 
        for (let x=1; x<=100; x++ )
            {
                sum += x;
        
            }
        console.log("the sum of the numbers from 1 to 100 is:" ,sum);
        
        const num1 = [1,2,3,4,5];
        for(let num of num1){
            console.log(num);
        }
        
        const num2 = [3,7,2,5,10,6];
        for(let num of num2);
        let largest = num2[0];{ 
        if(num > largest){
            largest = num ;
        }
        }
        console.log("the largest number in the array is:" , largest);
        
        /*exercise 4 : while loops */
        let x = 1
        while (x <= 10){
            console.log(x);
            x++;
        }
        
        x = 2
        while( x <=20){
            console.log(x);
            i 
            +=2 ;
        
        }
        
        x = 1;
        let Sum = 0;
        while (x <= 100){
            Sum += x;
            x++
        }
        console.log ("the sum of numbers from 1 to 100 is :" , Sum);
        
        x =1;
        while(x < 50){
            if(x % 5 === 0){
                console.log(x);
            }
            x++;
        }
        
        /* exercise 5: do while loops */
        let z = 20;
        do {
            console.log(z);
            z++;
        } while (z <= 30);
        
        z = 1;
        let total= 0;
        do {
            total += z ;
            z++;
        } while ( z <= 100);
        console.log("The total of numbers from 1 to 100 is:" , total);
        
        let number;
        do{
            number = parseInt(prompt("Enter a number greater than 10:"));
        } while (number <= 10 && !
            isNaN(number));

console.log("you entered:", number);


/*guessing game */

let hiddenNumber = Math.floor(Math.random () * 10) + 1;
let guessTries = 0;
 do {
    let guess = parseInt (prompt("try guessing a number between 1 and 10:"));
    guessTries++;
    
    if (guess === hiddenNumber){
        console.log("well done you!! the number was guessed in",guessTries, "tries.")
    } else if (guess < hiddenNumber){
        console.log("Sorry!! your guess was too low ,give it another try!!!");
        
    } else {
        console.log("sorry!! your guess was too high, give it another try!!!");
 }
}while (guess !== hiddenNumber);
}
