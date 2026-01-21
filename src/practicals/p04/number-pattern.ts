// Write your code below
let input_2= +process.argv[2];

if (Number.isNaN(input_2) || input_2 <= 0 || !Number.isInteger(input_2)){

}else{
    for (let i = 1; i <= input_2; i++) {
        let line = '';
        
        for (let s = 1; s <= input_2 - i; s++) { 
          line += ' '; 
        }
        
        for (let j = 1; j <= i; j++) {
          line += j;
        }
        console.log(line);
      }
}