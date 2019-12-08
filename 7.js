/* eslint-disable complexity */
function runIntcode(inputData, input) {
  let loc = 0
  for (let k = 0; k < inputData.length; k += 1) {
    const val = Math.floor(inputData[loc] % 10)
    const val1 = Math.floor((inputData[loc] / 100) % 10)
    const val2 = Math.floor((inputData[loc] / 1000) % 10)
    const val3 = Math.floor((inputData[loc] / 10000) % 10)

    const num1 = val1 === 0 ? inputData[inputData[loc + 1]] : inputData[loc + 1]
    const num2 = val2 === 0 ? inputData[inputData[loc + 2]] : inputData[loc + 2]
    const num3 = inputData[loc + 3]

    let output = -123
    if (val === 1) {
      inputData[inputData[loc + 3]] = num1 + num2

      loc += 4
    } else if (val === 2) {
      inputData[inputData[loc + 3]] = num1 * num2
      loc += 4
    } else if (val === 3) {
      inputData[inputData[loc + 1]] = input
      loc += 2
    } else if (val === 4) {
      output = inputData[inputData[loc + 1]]
      loc += 2
    } else if (val === 5) {
      if (num1 !== 0) {
        loc = num2
      } else {
        loc += 3
      }
    } else if (val === 6) {
      if (num1 === 0) {
        loc = num2
      } else {
        loc += 3
      }
    } else if (val === 7) {
      if (num1 < num2) {
        inputData[num3] = 1
      } else {
        inputData[num3] = 0
      }

      loc += 4
    } else if (val === 8) {
      if (num1 === num2) {
        inputData[num3] = 1
      } else {
        inputData[num3] = 0
      }

      loc += 4
    } else if (val === 99) {
      return output
    }
  }
}

let m = 0
const f = [0, 1, 2, 3, 4]
const data = [3, 15, 3, 16, 1002, 16, 10, 16, 1, 16, 15, 15, 4, 15, 99, 0, 0]

f.forEach(i => {
  let o = 0
 
})
console.log(m)
