
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (!matrix) return []
  return matrix.flatMap((line, index) => (index % 2 == 0) ? line : line.reverse());
}
