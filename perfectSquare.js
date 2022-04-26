const perfectSquare = num => {
    let squareRoot = Math.sqrt(num)

    if (Math.round(squareRoot) === squareRoot) {
        return (squareRoot + 1) * (squareRoot + 1)
    }   return -1
}
console.log(perfectSquare(9));
console.log(perfectSquare(289));
console.log(perfectSquare(3000));