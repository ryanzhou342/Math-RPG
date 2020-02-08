console.log("hello world");

var playerHealth = 1000;
var enemyHealth = 1000;

generate_equation();

function monster1stats(){
    //establish stats for the first monster
}

function generate_equation() {
    // Picks random numbers for the equation
    var num1 = Math.floor(Math.random() * 100);
    var num2 = Math.floor(Math.random() * 100);
    
    // Array for different types of equations
    var equations = ["add", "subtract", "multiply", "divide"];
    var equation_type = equations[Math.floor(Math.random() * equations.length)];
	
    // Generates an addition question
    if (equation_type == "add") {
	var answer = num1 + num2;
	var equation = num1 + "+" + num2;
    } else if (equation_type == "subtract") {
	var answer = num1 - num2;
	var equation = num1 + "-" + num2;
    } else if (equation_type == "multiply") {
	var answer = Math.floor(num1 / 10) * Math.floor(num2 / 10);
	var equation = num1 + "*" + num2;
    } else {
	product = Math.floor(num1 / 10) * Math.floor(num2 / 10);
	var answer = product / num1;
	var equation = product + "/" + num1
    }
    
    console.log("num1: " + num1);
    console.log("num2: " + num2);
    console.log(equation_type);
    console.log(answer);
    console.log("equation: " + equation);

    // Returns an answer
    return answer
}

function rndSolution(){
    //random answer by enemy
}

function attack(){
    //player solve random equasion
    //success = do damage
}

function defend(){
    //player finds errors in enemie's solution
    //every error found lowers received damage
    // error located by ligne
    //bad answers increase damage
}