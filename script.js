let buttons = document.querySelectorAll('button');
let display = document.querySelector('.actExpresion');
let resultP = document.querySelector('.results p');
let actResult = 0

let getDisplayExp = () => display.textContent;
let validArithmethic = (op) => {
    let displayExp = getDisplayExp();
    let lastIdx = displayExp.length - 1;
    if(lastIdx == -1 && op == '-') {
        return true;
    } else if(lastIdx == -1) {
        return false;
    }

    let lastOp = displayExp[lastIdx];
    return isNumber(lastOp);
};

let isNumber = op => op in ['1', '2', '3', '4', '5', '6', '7', '8', '9'];

let operate = (a, b, op) => {
    if(op == '+') return parseFloat(a) + parseFloat(b) + '';
    if(op == '*') return parseFloat(a) * parseFloat(b) + '';
    if(op == '/' && b != '0') return (parseFloat(a) / parseFloat(b)) + '';
    else if(op == '/') alert("Impossible division by zero");
    if(op == '-') {
        if(a == '') return (-1 * parseFloat(b)) + '';
        else return (parseFloat(a) - parseFloat(b)) + '';
    }

    alert('Invalid expression!');
};

let evalExp = exp => {
    if(exp == '') {
        return '';
    }
    let a = '', b = '', op = '', i = 0;
    while(i < exp.length && !isNaN(parseInt(exp[i]))) 
        a = a + exp[i++];

    if (i == exp.length)
        return exp;

    op = exp[i++];

    while(i < exp.length && !isNaN(parseInt(exp[i])))
        b = b + exp[i++];

    console.log(a, b, op, exp.slice(i), exp.slice(i));
    console.log(operate(a, b, op));
};

let clearDisplay = () => {
    display.textContent = '';
    actResult = 0;
}

function updateExp(op) {
    if(op == 'Clear') {
        clearDisplay();
    }
    if(op == 'Delete') {
        let exp = getDisplayExp();
        exp = exp.slice(0, -1);
        display.textContent = exp;
    }
    if ((op == '+' || op == '-' || op == '*' || op == '/') && validArithmethic(op)){
        display.textContent = display.textContent + op;
    } 
    if (isNumber(op)) {
        display.textContent = display.textContent + op;
    }
    if (isNumber(getDisplayExp()[getDisplayExp().length - 1]) && op == '.') {
        display.textContent = display.textContent + op;
    }

    if(op == '=') {
        console.log(display.textContent);
        actResult += evalExp(display.textContent);
        resultP.textContent = "Result: " + actResult;
        display.textContent = '';
    }
};

buttons.forEach(button => {
    button.addEventListener('click', () => updateExp(button.textContent));
});