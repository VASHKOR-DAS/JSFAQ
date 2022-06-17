/**
function addNumbers(num1, num2) {
    console.log(arguments);

    
    //arguments holo (array like object) function er vitorer parameter er value gulo access kora (position show kora)

    //like array er moto position show kora
    


    return num1 + num2;
}

var result = addNumbers(3, 5, 8, 15, 29);
//

console.log(result);
*/

function addNumbers(num1, num2){

    //Jodi parameter er besi value niye kaj korte hoy tobe, arguments likhe sob value access kora hoy, er jonno loop likhte hoy

    var sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        const num = arguments[i];
        sum = sum + num;
    }
    return sum;
}

var result = addNumbers(3, 5, 8, 4, 50);
//parameter er besi value, tobuo loop r arguments er jonno kaj kortese

console.log(result);

