// рекурсия
/*
функция которая вызывает сама себя, должна иметь какой-то условие при котором вызов функций должен прекратиться 
*/



let n = 3
// вычислим факториал 
const factorial = (n) => {
    if(n === 1){
        return 1
    }
    return n * factorial(n - 1);
}



console.log(factorial(n))



// вычислим числа Фибоначчи
// числа Фибоначчи определенная цепочка чисел, где каждое последовательно число равняется сумме двух предыдущих
// числа Фибоначчи - 1, 1, 2, 3, 5, 8, 13, 21

let a = 8
const fibonachi = (a) => {
    if(a === 1 || a === 2) {
        return 1
    } 
    return fibonachi(a - 1) + fibonachi(a - 2)
}


console.log(fibonachi(a))