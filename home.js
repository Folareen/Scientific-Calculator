// ELEMENTS SELECTION
const OUTPUT = document.querySelector('.output');
const OPERATION = document.querySelector('.operation');
const RESULT = document.querySelector(".result")
const SIN_BUTTON = document.querySelector('.sin');
const COS_BUTTON = document.querySelector('.cos');
const TAN_BUTTON = document.querySelector('.tan');
const E_BUTTON = document.querySelector('.e');
const ASIN_BUTTON = document.querySelector('.asin');
const ACOS_BUTTON = document.querySelector('.acos');
const ATAN_BUTTON = document.querySelector('.atan');
const PI_BUTTON = document.querySelector('.pi');
const RAD_BUTTON = document.querySelector('.rad');
const DEG_BUTTON = document.querySelector('.deg');
const SQUARE_BUTTON = document.querySelector('.square');
const SQUARE_ROOT_BUTTON = document.querySelector('.square-root');
const FACTORIAL_BUTTON = document.querySelector('.factorial');
const NATURAL_LOGARITHM_BUTTON = document.querySelector('.natural-logarithm');
const LOG_BUTTON = document.querySelector('.log');
const EXPONENTIAL_BUTTON = document.querySelector('.exponential');
const NINE_BUTTON = document.querySelector('.nine');
const EIGHT_BUTTON = document.querySelector('.eight');
const SEVEN_BUTTON = document.querySelector('.seven');
const SIX_BUTTON = document.querySelector('.six');
const FIVE_BUTTON = document.querySelector('.five');
const FOUR_BUTTON = document.querySelector('.four');
const THREE_BUTTON = document.querySelector('.three');
const TWO_BUTTON = document.querySelector('.two');
const ONE_BUTTON = document.querySelector('.one');
const COMMA_BUTTON = document.querySelector('.comma');
const ZERO_BUTTON = document.querySelector('.zero');
const DECIMAL_BUTTON = document.querySelector('.decimal');
const ANSWER_BUTTON = document.querySelector('.answer');
const CLEAR_BUTTON  = document.querySelector('.clear');
const DELETE  = document.querySelector('.delete');
const ADD_BUTTON = document.querySelector('.add');
const SUBTRACT_BUTTON = document.querySelector('.subtract');
const MULTIPLY_BUTTON = document.querySelector('.multiply');
const DIVIDE_BUTTON = document.querySelector('.divide');
const LEFT_BRACKET_BUTTON = document.querySelector('.left-bracket');
const RIGHT_BRACKET_BUTTON = document.querySelector('.right-bracket');
const SOLUTION_BUTTON = document.querySelector('.solution');
const HELP_BUTTON = document.querySelector('.help');
const HELP_CONTAINER = document.querySelector('.help-container');
const CLOSE_BUTTON = document.querySelector('.close');


// BUTTON CLASS
class Button{
    constructor(selector){
        this.selector = selector;
    };
    click(){
        let event_q = this.selector;
        event_q.addEventListener('click', this.output);
    };
    output(){
        if(OPERATION.innerText.length < 80){
            OPERATION.innerText += this.innerText;
        }
        else{
            alert(`${OPERATION.innerText.length}:max!!!`)
        }
    }
};


// FUNCTION BUTTONS
let sinButton = new Button(SIN_BUTTON);
sinButton.click();
let cosButton = new Button(COS_BUTTON);
cosButton.click();
let tanButton = new Button(TAN_BUTTON);
tanButton.click();
let eButton = new Button(E_BUTTON);
eButton.click();
let asinButton = new Button(ASIN_BUTTON);
asinButton.click();
let acosButton = new Button(ACOS_BUTTON);
acosButton.click();
let atanButton = new Button(ATAN_BUTTON);
atanButton.click();
let piButton = new Button(PI_BUTTON);
piButton.click();
let radButton = new Button(RAD_BUTTON);
radButton.click();
let degButton = new Button(DEG_BUTTON);
degButton.click();
let squareButton = new Button(SQUARE_BUTTON);
squareButton.click();
let sqrtButton = new Button(SQUARE_ROOT_BUTTON);
sqrtButton.click();
let factorialButton = new Button(FACTORIAL_BUTTON);
factorialButton.click();
let lnButton = new Button(NATURAL_LOGARITHM_BUTTON);
lnButton.click();
let logButton = new Button(LOG_BUTTON);
logButton.click();
let exponentialButton = new Button(EXPONENTIAL_BUTTON);
exponentialButton.click();

function sin(arg){
    return(Math.sin(arg * Math.PI/180))
}
function cos(arg){
    return(Math.cos(arg * Math.PI/180))
}
function tan(arg){
    return(Math.tan(arg * Math.PI/180))
}
function e(){
    return(Math.E);
}
function asin(arg){
    return((Math.asin(arg))*180);
}
function acos(arg){
    return((Math.acos(arg))*180);
}
function atan(arg){
    return((Math.atan(arg))*180);
}
function pi(){
    return(Math.PI);
}
function Rad(arg){
    return(arg * Math.PI/180);
}
function Deg(arg){
    return(arg * 180/Math.PI);
}
function square(arg){
    return(arg*arg);
}
function sqrt(arg){
    return(Math.sqrt(arg))
}
function factorial(arg){
    let answer = 1
    while(arg >0){
        answer *= arg--
    }
    return answer;
}
function ln(arg){
    return (Math.log(arg));
}
function log(arg){
    return (Math.log10(arg));
}
function pow(arg1, arg2){
    return (Math.pow(arg1, arg2))
}

// NUMBER BUTTONS
const ALL_NUMBER_BUTTONS = [...document.querySelectorAll(".numbers > button")];
const ALL_BUTTON_OBJECTS = ALL_NUMBER_BUTTONS.map(button => new Button(button));
ALL_BUTTON_OBJECTS.forEach(button => button.click());

// NUMBER BUTTONS KEYPRESS FUNCTIONALITY
// console.log(sin);
// let nineButton = new Button(NINE_BUTTON);
// nineButton.click();
// let eightButton = new Button(EIGHT_BUTTON);
// eightButton.click();
// let sevenButton = new Button(SEVEN_BUTTON);
// sevenButton.click();
// let sixButton = new Button(SIX_BUTTON);
// sixButton.click();
// let fiveButton = new Button(FIVE_BUTTON);
// fiveButton.click();
// let fourButton = new Button(FOUR_BUTTON);
// fourButton.click();
// let threeButton = new Button(THREE_BUTTON);
// threeButton.click();
// let twoButton = new Button(TWO_BUTTON);
// twoButton.click();
// let oneButton = new Button(ONE_BUTTON);
// oneButton.click();
// let doubleZeroButton = new Button(DOUBLE_ZERO_BUTTON);
// doubleZeroButton.click();
// let zeroButton = new Button(ZERO_BUTTON);
// zeroButton.click();
// let decimalButton = new Button(DECIMAL_BUTTON);
// decimalButton.click();

// OPERATION BUTTONS
let addButton = new Button(ADD_BUTTON);
addButton.click();
let subtractButton = new Button(SUBTRACT_BUTTON);
subtractButton.click();
let multiplyButton = new Button(MULTIPLY_BUTTON);
multiplyButton.click();
let divideButton = new Button(DIVIDE_BUTTON);
divideButton.click();
let leftButton = new Button(LEFT_BRACKET_BUTTON);
leftButton.click();
let rightButton = new Button(RIGHT_BRACKET_BUTTON);
rightButton.click();

SOLUTION_BUTTON.addEventListener('click', solutionFunc);
function solutionFunc(){
    try{
        if(document.querySelector(".error")){
            RESULT.innerText = "";
            document.querySelector(".error").remove();
        }
        RESULT.innerText = (eval(OPERATION.innerText)).toPrecision(5);
    }
    catch(error){
        RESULT.innerText = "";
        const ERROR = document.createElement("div");
        ERROR.className = "error";
        ERROR.innerText = error;
        OUTPUT.append(ERROR);
    }
};

DELETE.addEventListener('click', deleteFunc);
function deleteFunc(){
    OPERATION.innerText = OPERATION.innerText.slice(0,[OPERATION.innerText.length-1]);
};

CLEAR_BUTTON.addEventListener('click', clearFunc);
function clearFunc(){
    OPERATION.innerText = 0;
};
CLEAR_BUTTON.addEventListener('dblclick', clearResultFunc);
function clearResultFunc(){
    RESULT.innerText = "";
    if(document.querySelector(".error")){
        document.querySelector(".error").remove();
    }
};

// HELP
HELP_BUTTON.addEventListener('click', help)
function help(){
    HELP_CONTAINER.style.display = "flex"
}
CLOSE_BUTTON.addEventListener('click', close);
function close(){
    HELP_CONTAINER.style.display = "none"
}