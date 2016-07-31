/**
 * Created by Александр Поляков on 01.08.2016.
 */
var arr = [];

for (var  key = 0; key < 5; ++key){
    arr.push(prompt("Введите имя", ""));
}

var userName = prompt("Введите имя пользователя", "");

var bool = true;

for (var i = 0; i <= arr.length; i++) {

    if (userName == arr[i]) {
        bool = false;
    }
}

if(bool == true){
    alert("Вы ввели неправильное имя пользователя!");
}else {
    alert(userName + ", Вы успешно вошли!");
}