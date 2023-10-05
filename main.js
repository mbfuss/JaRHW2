// переменная для хранения мат. действия
var op;
var oneObj = {};
// функция рассчета
function calculate() {
    // переменная для результата
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
    // отправляем результат в html 
    document.getElementById("result").innerHTML = result;

    // для передачи перменных в функцию history()
    oneObj.num1 = num1;
    oneObj.num2 = num2;
    oneObj.result = result;
}

function history(){
var historyElement = document.createElement('div'); // создаем отдельный блочных элемент
     num1 = oneObj.num1;
     num2 = oneObj.num2;
     result = oneObj.result;
      historyElement.innerHTML = num1 + ' ' + op + ' ' + num2 + ' = ' + result;
      document.getElementById('history').appendChild(historyElement); // передача в <div id="history"></div> из historyElement
    }