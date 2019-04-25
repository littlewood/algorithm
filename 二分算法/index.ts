
function findIndex (arr: (number|string)[], value: number | string) {
  const len = arr.length
  let findValue = null
  let startIndex = 0
  let endIndex = len - 1
  let findIndex = -1
  let time = 0

  while (findValue !== value) {
    findIndex = Math.floor((startIndex + endIndex) / 2)
    findValue = arr[findIndex]

    if (findValue > value) {
      endIndex = findIndex - 1
    } else {
      startIndex = findIndex + 1
    }
    time++
  }

  console.log(`本次查询共耗费次数：${time}次`)
  return findIndex
}

const arr = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27]
const num = 7
const index = findIndex(arr, num)

console.log(`${num} 在数组 ${arr} 中的索引为：${index}`)