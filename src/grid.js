const grid = {
  n: (g, [col, row]) => {
    const desiredRow = g[row - 1]
    if (desiredRow) {
      return desiredRow[col]
    }
  },

  s: (g, [col, row]) => {
    const desiredRow = g[row + 1]
    if (desiredRow) {
      return desiredRow[col]
    }
  },

  w: (g, [col, row]) => {
    return g[row][col - 1]
  },

  e: (g, [col, row]) => {
    return g[row][col + 1]
  },

  ne: (g, [col, row]) => {
    const desiredRow = g[row - 1]
    if (desiredRow) {
      return desiredRow[col + 1]
    }
  },

  nw: (g, [col, row]) => {
    const desiredRow = g[row - 1]
    if (desiredRow) {
      return desiredRow[col - 1]
    }
  },

  se: (g, [col, row]) => {
    const desiredRow = g[row + 1]
    if (desiredRow) {
      return desiredRow[col + 1]
    }
  },

  sw: (g, [col, row]) => {
    const desiredRow = g[row + 1]
    if (desiredRow) {
      return desiredRow[col - 1]
    }
  },

  neighbors: (g, [col, row]) => ({
    nw: grid.nw(g, [col, row]),
    n: grid.n(g, [col, row]),
    ne: grid.ne(g, [col, row]),
    w: grid.w(g, [col, row]),
    e: grid.e(g, [col, row]),
    sw: grid.sw(g, [col, row]),
    s: grid.s(g, [col, row]),
    se: grid.se(g, [col, row]),
  }),
}

export default grid
