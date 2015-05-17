/*
* Реализовать калькулятор с помощью функций
* */

/*function add(firstNumber, secondNumber) {
    return firstNumber + secondNumber;
}

function multiply(firstNumber, secondNumber) {
    return firstNumber * secondNumber;
}

function divide(firstNumber, secondNumber) {
    return firstNumber / secondNumber;
}

function diff(firstNumber, secondNumber) {
    return firstNumber - secondNumber;
}

function modulo(firstNumber, secondNumber) {
    return firstNumber % secondNumber;
}*/

/*
* Реализовать калькулятор с помощью с помощью функции-конструктора
* */

/*function Calculator() {
    this.add = function(firstNumber, secondNumber) {
        return firstNumber + secondNumber;
    };
    this.multiply = function(firstNumber, secondNumber) {
        return firstNumber * secondNumber;
    };
    this.divide = function(firstNumber, secondNumber) {
        return firstNumber / secondNumber;
    };
    this.diff = function(firstNumber, secondNumber) {
        return firstNumber - secondNumber;
    };
    this.modulo = function(firstNumber, secondNumber) {
        return firstNumber % secondNumber;
    };
    return this;
}

var calc = new Calculator();

console.log(calc.add(5, 3));
console.log(calc.multiply(5, 3));
console.log(calc.divide(5, 3));
console.log(calc.diff(5, 3));
console.log(calc.modulo(5, 3));*/

/*function Calculator() {
    return this;
}

Calculator.prototype.add = function (firstNumber, secondNumber) {
    return firstNumber + secondNumber;
};
Calculator.prototype.multiply = function (firstNumber, secondNumber) {
    return firstNumber * secondNumber;
};
Calculator.prototype.divide = function (firstNumber, secondNumber) {
    return firstNumber / secondNumber;
};
Calculator.prototype.diff = function (firstNumber, secondNumber) {
    return firstNumber - secondNumber;
};
Calculator.prototype.modulo = function (firstNumber, secondNumber) {
    return firstNumber % secondNumber;
};

var calc = new Calculator();

console.log(calc.add(5, 3));
console.log(calc.multiply(5, 3));
console.log(calc.divide(5, 3));
console.log(calc.diff(5, 3));
console.log(calc.modulo(5, 3));*/

function add(firstNumber, secondNumber) {
    return firstNumber + secondNumber;
}
function multiply(firstNumber, secondNumber) {
    return firstNumber * secondNumber;
}
function divide(firstNumber, secondNumber) {
    return firstNumber / secondNumber;
}
function diff(firstNumber, secondNumber) {
    return firstNumber - secondNumber;
}
function modulo(firstNumber, secondNumber) {
    return firstNumber % secondNumber;
}

function Calculator() {
    return this;
}
Calculator.prototype.add = add;
Calculator.prototype.multiply = multiply;
Calculator.prototype.divide = divide;
Calculator.prototype.diff = diff;
Calculator.prototype.modulo = modulo;

var calc = new Calculator();

console.log(calc.add(5, 3));
console.log(calc.multiply(5, 3));
console.log(calc.divide(5, 3));
console.log(calc.diff(5, 3));
console.log(calc.modulo(5, 3));
