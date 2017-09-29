

function tester() {

    // document.getElementById("output1").innerHTML = sleep_in(true, true);
    // document.getElementById("output1").innerHTML = sleep_in(true, false);
    // document.getElementById("output1").innerHTML = sleep_in(false, true);
    // document.getElementById("output1").innerHTML = sleep_in(false, false);
    //document.getElementById("output2").innerHTML = monkey_trouble(true, true);
    //document.getElementById("output2").innerHTML = monkey_trouble(true, false);
    //document.getElementById("output2").innerHTML = monkey_trouble(false, true);
    //document.getElementById("output2").innerHTML = monkey_trouble(false, false);
    document.getElementById("output3").innerHTML = string_times('bro', 4);
    document.getElementById("output3").innerHTML = string_times('o', 20);
    document.getElementById("output3").innerHTML = string_times('dude', 2);



//    document.getElementById("output").innerHTML = nextOne(true, false);
    //test third method, etc
}

function sleep_in(weekday,vacation){
    if (weekday == true && vacation == true ){
        return true;
    }
    if (weekday == true && vacation == false ){
        return false;
    }
    if (weekday == false && vacation == true ){
        return true;
    }
    if (weekday == false && vacation == false ){
        return true;
    }
}

function monkey_trouble(a_smile, b_smile){

    if(typeof a_smile != "boolean") {
        return false;
    }
    if(a_smile == true && b_smile == true){
        return true;
    }
    if(a_smile == false && b_smile == false){
        return true;
    }
    if(a_smile == true && b_smile == false){
        return false;
    }
    if(a_smile == false && b_smile == true ){
        return false;
    }
}

function string_times(word, number){
    var sum= "";
    for(var i=0; i<number; i++){

        sum += word
    }
    return sum;
}

function front_times(string,n){
    var sum = "";
    var str = string.substring(0,3) ;
    for (var i=0; i<n; i++){
        sum += str;
    }
    return sum;
}

function string_bits(string, n ){
    var i=0;
    var str = "";
    while(string.length > i){
       str += string[i];
        i += 2;
    }
    return str;
}

function caughtSpeeding(speed, birthday){
    if(birthday ==true){
        speed = speed - 5;
    }

    if (speed <= 60){
        return 0;
    }
    if(speed>60 && speed<=80){
        return 1;
    }
    if(speed>80){
        return 2;
    }
}

function fizz_buzz(i){
    if(i%3==0 && i%5==0){
        return "FizzBuzz";
    }
    if (i%5 == 0){
        return "Buzz";
    }
    if(i%3 == 0){
        return "Fizz";
    }

    return i + "!";
}

function teaParty(tea, candy){
    if(tea < 5 || candy < 5){
        return 0;
    }
    if(tea >= 2 * candy || candy >= 2 * tea){
        return 2;
    }
    if(tea >= 5 && candy >= 5){
        return 1;
    }
}

function blackjack(n,i){
    if(n == 21 || i == 21){
        return 21;
    }
    if(n > 21 && i > 21){
        return 0;
    }
    if(n > 21){
        return i;
    }
    if(i > 21){
        return n;
    }
    if(n < 21 && i < 21){
        if(n > i ){
            return n;
        }else{
            return i;
        }
    }
}

function loneSum(a, b, c){
    if(a == b && a == c){
        return 0;
    }
    if(a == b){
        return c;
    }
    if(b == c){
        return a;
    }
    if(a == c){
        return b;
    }
    if(a != b != c){
        return a + b + c;
    }
}