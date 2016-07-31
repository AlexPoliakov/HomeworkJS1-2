/**
 * Created by Александр Поляков on 01.08.2016.
 */
pow(+prompt("Введите число", ""), +prompt("Ведите степень", ""));

function pow(x, n) {
    var result = x;
    if(n == 0){
        console.log("Результат: ", 1);
        return;
    }else {

        for (var i = 0; i < (n - 1); ++i) {
            result *= x;

        }
    }

    console.log("Результат: ", result);

}