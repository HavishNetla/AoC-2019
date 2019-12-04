function checkIfValid(num) {
  const numString = num.toString().split('')
  const arr = [0, 0]
  for (let i = 0; i < numString.length; i += 1) {
    arr[i] = parseInt(numString[i], 10)
  }

  for (let i = 1; i < arr.length; i += 1) {
    if (arr[i] < arr[i - 1]) {
      return false
    }
  }

  arr.push(0)
  const bool = true
  for (let i = 1; i < arr.length; i += 1) {
    if (arr[i] === arr[i - 1]) {
      if (arr[i] !== arr[i + 1] && arr[i] !== arr[i - 2]) {
        return true
      }
    }
  }

  return false
}

let counter = 0
for (let i = 271973; i <= 785961; i += 1) {
  if (checkIfValid(i)) {
    counter += 1
  }
}

console.log(counter)
