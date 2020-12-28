const {sync} = require('./Sync')

describe('sync test', () => {
  const arr = [1, 2, 3]
  const arr2 = [1, 3, 4]

  it('should be equal to arr[2,4]', () => {
    let arr3 = [2, 4]
    expect(sync(arr, arr2).toEqual(arr3))
  })
})