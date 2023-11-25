let buttons = document.querySelectorAll('button');
let display = document.querySelector('.display');
let mem = 0

let getDisplayExp = () => display.textContent;
let validArithmethic = (op) => {
    let displayExp = getDisplayExp();
    let lastIdx = displayExp.length - 1;
    console.log(lastIdx, op);
    if(lastIdx == -1 && op == '-') {
        return true;
    } else if(lastIdx == -1) {
        return false;
    }

    let lastOp = displayExp[lastIdx];
    return isNumber(lastOp);
}
let isNumber = op => op in ['1', '2', '3', '4', '5', '6', '7', '8', '9'];


function updateExp(op) {
    if(op == 'Clear') {
        display.textContent = '';
        mem = 0;
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
}

buttons.forEach(button => {
    button.addEventListener('click', () => updateExp(button.textContent));
})