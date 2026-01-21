// Write your code below
let input = +process.argv[2];

if (Number.isNaN(input) || input <= 0 || !Number.isInteger(input) || process.argv[2] === "") {
    
}else{
for (let i = 1; i <= input; i++){
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