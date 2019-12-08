333680

const inputData = `COM)B
B)C
C)D
D)E
E)F
B)G
G)H
D)I
E)J
J)K
K)L`.split('\n')
let finalCounter = 0

let counter = 0

function findDistToParent(node) {
  let curr = node.split(')')[0]

  for (let j = 0; j < inputData.length; j += 1) {
    if (curr === inputData[j].split(')')[1]) {
      counter += 1

      curr = inputData[j].split(')')[0]

      if (curr.split(')')[0] === 'COM') {
        break
      } else {
        findDistToParent(inputData[j])
      }
    }
  }

  return counter + 1
}

for (let i = 0; i < inputData.length; i += 1) {
  const f = findDistToParent(inputData[i])
  counter = 0
  // Console.log(`${inputData[i]}, ${f}`)
  finalCounter += f
}

console.log(finalCounter)
