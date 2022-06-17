function explain_callback(name, age, task) {
    console.log('Hello', name);
    console.log('Your age', age);
    task();
    
}

function washHand(){
    console.log('wash hand with soap');
}

function takeShower(){
    console.log('Take shower');
}

function scrollingFacebook() {
    console.log('Scrolling facebook but not like any post');
}

explain_callback('Joy', 17, washHand);
explain_callback('Bijoy', 20, takeShower);
explain_callback('Joya', 22, scrollingFacebook);
