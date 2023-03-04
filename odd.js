var number = 0;

//loop
while (number <= 10) {

    //conditon for odd number
    if (number % 2 == 1) {
        console.log(number);
    }
    number++;
}

//alternative
console.log('Alternative');

var number = 1;
//loop
while (number <= 10) {
    console.log(number);

    //add 2 to the recent value
    number = number + 2;
}