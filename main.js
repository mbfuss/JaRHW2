// Переменная для хранения мат. действия
var op;
var op;
var op;
var op;
var op;
var op;


var op;
var oneObj = {};
// Функция рассчета
function calculate() {
    // Переменная для результата
    var result;

    // Number - будем приравнивать число число. По умолчанию строка.
    // value возвращаем значение num из html и передаем в num js
    var num1 = Number(document.getElementById("num1").value); 
    var num2 = Number(document.getElementById("num2").value);

    switch(op){
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
    }
    // Отправляем результат в html 
    document.getElementById("result").innerHTML = result;

    // Для передачи перменных в функцию history()
    oneObj.num1 = num1;
    oneObj.num2 = num2;
    oneObj.result = result;
}

function history(){
var historyElement = document.createElement('div'); // Создаем отдельный блочных элемент
     num1 = oneObj.num1;
     num2 = oneObj.num2;
     result = oneObj.result;
      historyElement.innerHTML = num1 + ' ' + op + ' ' + num2 + ' = ' + result;
      document.getElementById('history').appendChild(historyElement); // Передача в <div id="history"></div> из historyElement
    }


// В зависимости от положения курсора будет вводится button
var activeInput = null; // Переменная для хранения активного <input>

        function setActiveInput(inputNumber) {
            activeInput = document.getElementById(`num${inputNumber}`);
        }

        function appendToActiveInput(value) {
            if (activeInput) {
                // Добавляем значение кнопки в конец активного <input>
                activeInput.value += value;
            }
        }
function clearInput() {
            document.getElementById('num1','num2').value = '';
            document.getElementById('num2').value = '';
        }
