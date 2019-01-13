const rand = (min, max) => {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min)) + min
}

export const getRandomSelection = (count, min, max) => {
  if (min > max) {
    throw new Error('invalid min/max')
  }

  const possibleResults = max - min

  if (count > possibleResults) {
    throw new Error('count too hight')
  }

  const result = []

  while (result.length < count) {
    const index = rand(min, max)
    if (!result.includes(index)) {
      result.push(index)
    }
  }

  return result
}

const distribute = (arr, count, fn) => {
  if (arr.length < count) {
    throw new Error('not enough space')
  }

  let result = [...arr]
  const indices = getRandomSelection(count, 0, arr.length - 1)
  indices.forEach(x => {
    result[x] = fn(arr[x])
  })

  return result
}

export default distribute
