
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (matrix === [] || !matrix || matrix.length === 0) return ([]);
  for (var i in matrix) {
    if (i % 2 ===0) {
      matrix[i].sort(function(a, b) {
        return a - b;
      });
    } else {
      matrix[i].sort(function(a, b) {
        return b - a;
      });
    }
  }
  return matrix.flat(2);
}
