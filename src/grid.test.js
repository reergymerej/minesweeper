import grid from './grid'

const g = [
  [0,   1,  2,  3,  4],
  [5,   6,  7,  8,  9],
  [10, 11, 12, 13, 14],
]

describe('grid', () => {
  it('should return N', () => {
    expect(grid.n(g, [0, 0])).toBe(undefined)
    expect(grid.n(g, [0, 1])).toBe(0)
    expect(grid.n(g, [4, 2])).toBe(9)
  })

  it('should return S', () => {
    expect(grid.s(g, [0, 0])).toBe(5)
    expect(grid.s(g, [0, 1])).toBe(10)
    expect(grid.s(g, [4, 2])).toBe(undefined)
  })

  it('should return W', () => {
    expect(grid.w(g, [0, 0])).toBe(undefined)
    expect(grid.w(g, [2, 1])).toBe(6)
    expect(grid.w(g, [4, 2])).toBe(13)
  })

  it('should return E', () => {
    expect(grid.e(g, [0, 0])).toBe(1)
    expect(grid.e(g, [2, 1])).toBe(8)
    expect(grid.e(g, [4, 2])).toBe(undefined)
  })

  it('should return NE', () => {
    expect(grid.ne(g, [0, 0])).toBe(undefined)
    expect(grid.ne(g, [2, 1])).toBe(3)
    expect(grid.ne(g, [4, 2])).toBe(undefined)
  })

  it('should return NW', () => {
    expect(grid.nw(g, [0, 0])).toBe(undefined)
    expect(grid.nw(g, [2, 1])).toBe(1)
    expect(grid.nw(g, [4, 2])).toBe(8)
  })

  it('should return SE', () => {
    expect(grid.se(g, [0, 0])).toBe(6)
    expect(grid.se(g, [2, 1])).toBe(13)
    expect(grid.se(g, [4, 2])).toBe(undefined)
  })

  it('should return SW', () => {
    expect(grid.sw(g, [0, 0])).toBe(undefined)
    expect(grid.sw(g, [2, 1])).toBe(11)
    expect(grid.sw(g, [4, 2])).toBe(undefined)
  })

  it('should return neighbors', () => {
    expect(grid.neighbors(g, [2, 1])).toEqual({
      nw: 1, n: 2, ne: 3,
      w: 6, e: 8,
      sw: 11, s: 12, se: 13,
    })
  })
})
