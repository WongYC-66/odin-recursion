// asignment 1 - Fibonacci with Loops && Recursion

function fibs(n){
    let newArr = [0, 1]
    for(let i = 2 ; i < n ; i++){
        let x = newArr[i-1] + newArr[i-2]
        newArr.push(x)
    }
    return newArr

}

function fibsRec(n, i = 2, arr = [0, 1]){
    if(i >= n){
        return arr
    } else {
        arr.push(arr[i - 1] + arr[i - 2])
    }
    return fibsRec(n, ++i, arr)
}

// assignment 2 - Merge sort with Recursion

function mergeSort(arr){
    // recursive divide and conquer
    if(arr.length === 1) return arr      // base case, no more spliting
    let half = Math.floor(arr.length / 2)
    let left = mergeSort(arr.slice(0, half))  // recursive call
    let right = mergeSort(arr.slice(half,))   // recursive call
    return merger(left, right)        
}

function merger(left, right, arr = []){
    // helper function of mergeSort, also recursive
    if(left.length === 0 && right.length === 0){  // base case, return sorted
        return arr
    }
    if((left[0] < right[0]) || (right.length === 0) ){
        arr.push(left.shift())
    }
    else if((right[0] < left[0]) || (left.length === 0)){
        arr.push(right.shift())
    }
    else if(left[0] === right[0]){
        arr.push(left.shift(), right.shift())
    }
    return merger(left, right, arr)    // recursive call
}

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#fib_btn1').addEventListener('click', () => {
        const fibo_input = document.querySelector('#input1').value
        let solution = fibs(fibo_input)
        document.querySelector('.fib_solution1').textContent = solution
    })
    document.querySelector('#fib_btn2').addEventListener('click', () => {
        const fibo_input = document.querySelector('#input1').value
        let solution = fibsRec(fibo_input)
        document.querySelector('.fib_solution2').textContent = solution

    })
    document.querySelector('#sort_btn').addEventListener('click', () => {
        const merge_input = document.querySelector('#input2').value.split(',').map(x => Number(x))
        let solution = mergeSort(merge_input)
        document.querySelector('.sort_solution').textContent = solution

    })
    // randomize button
    document.querySelector('#fib_rand').addEventListener('click', () => {
        let randNum = Math.ceil(Math.random() * 30)
        document.querySelector('#input1').value = randNum
    })
    document.querySelector('#merge_rand').addEventListener('click', () => {
        let randNum = Math.ceil(Math.random() * 18) + 2
        let arr = Array.from(Array(randNum)).map( x => Math.ceil(Math.random() * 20))
        document.querySelector('#input2').value = arr
    })
})