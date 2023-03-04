//difference between while loop and for loop

var roastGiven = 0
//while loop
//you have increase variable value otherwise it will be infinite loop
while (roastGiven < 8) {
    console.log('here is the roast');
    console.log(roastGiven);

    //variable value increase
    roastGiven++;
}


//for loop 
for (var roastgiven2 = 0; roastgiven2 <= 12; roastgiven2++) {
    console.log('roast den abar', roastgiven2);
    // console.log(roastgiven2);
}

console.log('simple version of for loop');

for (var i = 0; i < 12; i++) {
    console.log(i)
}