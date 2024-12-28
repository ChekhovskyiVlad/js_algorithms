const array = [2, 3, 6, 4, 1, 7, 8, 5, 10, 11, 9]
const arrayBinary = [1, 2,3 ,4 ,5 ,6 ,7 ,8 , 9, 10, 11, 12]
let count = 0

/*
бинарный поиск(алгоритм для поиска элементов уже в отсортированном массиве)
сначала ищем центральный элемент массива

если он равен, мы нашли элемент, возвращаем его индекс
если меньше, ищем в левой половине массива
если больше, ищем в правой половине массива 

*/

function binarySearch(array, item) {
    let start = 0 // чтобы найти центральный элемент нужно значать позицию первого элемента 
    let end = array.length // и последнего элемента 
    let middle 
    let found = false // флаг, который будет отображать нашли мы элемент или нет
    let position = -1 // нашли ли мы элемент или нет  

    while(found === false && start <= end){  // до тех пор пока не нашли или элемент, и стартовая и конечная позиция не прировнялись
        middle = Math.floor((start + end) / 2);
        if(array[middle] === false) {
            found = true
            position = middle
            return position;
        } 
        if(item < array[middle]){
            end = middle - 1 
        } else { 
            start = middle + 1
        }
    }
    return position
} 

console.log(count)


function binarySearch2(arrayBinary, target) {
    let left = 0; // Левая граница поиска
    let right = arrayBinary.length - 1; // Правая граница поиска
    let mid; // Середина массива

    while (left <= right) {
        mid = Math.floor((left + right) / 2); // Индекс середины

        if (arrayBinary[mid] === target) {
            return mid; // Если нашли элемент, возвращаем его индекс
        }
        if (arrayBinary[mid] < target) {
            left = mid + 1; // Ищем в правой половине
        } else {
            right = mid - 1; // Ищем в левой половине
        }
    }
    return -1; // Если элемент не найден
}

// Вызов функции
console.log(binarySearch2(arrayBinary, 5)); // Ожидаемый результат: 4

