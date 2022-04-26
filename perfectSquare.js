const perfectSquare = num => {
    let squareRoot = Math.sqrt(num)

    if (Math.round(squareRoot) === squareRoot) {
        return Math.pow(++squareRoot, 2)
    }   return -1
}
console.log(perfectSquare(9))