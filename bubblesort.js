const array = [2,3, 4,56, 534, 6, 7 ,1, 23, 75, 867]
let count = 0;

/*
Начинаем с первого элемента массива.
Сравниваем его со следующим элементом:
Если первый элемент больше второго, меняем их местами.
Если порядок правильный, оставляем их как есть.
Двигаемся дальше по массиву и повторяем шаг 2 для всех пар соседних элементов.
На каждом проходе "всплывает" самый большой элемент к концу массива (как пузырёк в воде).
Повторяем процесс для оставшихся элементов, исключая уже отсортированные.
*/

// сортировка пузирьком(самая неэфективная сортировка)
function bubbleSort(array){
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
           
            if(array[j + 1] < array[j]){
                let temp = array[j]
                array[j] = array[j + 1] //  array[j + 1] элемент текущей итерации
                array[j + 1] = temp
            }
            
        }
    }
    return array
}

console.log(bubbleSort(array))