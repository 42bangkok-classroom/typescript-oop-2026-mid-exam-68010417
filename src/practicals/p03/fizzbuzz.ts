// Write your code below
let input = process.argv[2];
let input_2 = Number(input)

if (Number.isNaN(input_2) || input_2 <= 0 || !Number.isInteger(input_2) || process.argv[2] === "") {
    console.log('Invalid Input');
}else{
for (let i = 1; i <= input_2; i++){
  if (i % 7 === 0 && i % 3 === 0){
    console.log('FizzBuzz');
  }else if (i % 3 === 0){
    console.log('Fizz');
  }else if (i % 7 === 0){
    console.log('Buzz');
  }else if (!(i % 3 === 0 || i % 7 === 0)){
    console.log(`${i}`);
  }
}
}