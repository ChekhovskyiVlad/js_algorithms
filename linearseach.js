
// алгоритм линейного поиска в массиве 
/* каждый элемент массива будем сравнить, до того момента пока не найдем нужный*/
const array = [2, 3, 6, 4, 1, 7, 8, 5, 10, 11, 9]
let count = 0
function linearSearch(array, item) {
    for(let i = 0; i < array.length;i++){
        count += 1
        if(array[i] === item) {
            return i;
        }
    }
    return null
}


console.log(linearSearch(array,  1));
console.log(count)