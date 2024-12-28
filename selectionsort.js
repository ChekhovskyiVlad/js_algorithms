// сортировка выбором

/*
есть массив неупорядочных элементов, в котором мы находим минимальное значение
затем менеем с первым элементов, и так далее
*/

const array = [6, 34, 32, 7, 8, 90, 12, 33]

function selectionSort(array) { 
    for (let i = 0; i < array.length; i++) {
        let indexMin = i // переменная которая хранит индекс минимального значения в массиве  
       for (let j = i + 1; j < array.length; j++){
            if(array[j] < array[indexMin]){
                indexMin = j
            }
       }
       let temp = array[i]
       array[i] = array[indexMin]
       array[indexMin] = temp
    }
    return array
}



console.log(selectionSort(array))
