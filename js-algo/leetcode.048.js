/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
let rotate = function(matrix) {
  let c = 0;
  let l = matrix.length - 1;
  while(isLastRotate(c, l, matrix)) {
    let maxIndexCount = (matrix.length - 1) - (2 * c);
    for(let indexInLine = 0; indexInLine < maxIndexCount; indexInLine++) {
      const plusC = indexInLine;
      const minusL = indexInLine;
      const temp = matrix[c][c+plusC];
      matrix[c][c+plusC] = matrix[l-minusL][c];
      matrix[l-minusL][c] = matrix[l][l-minusL];
      matrix[l][l-minusL] = matrix[c+plusC][l];
      matrix[c+plusC][l] = temp;
    }
    c++;
    l--;
  }
};

function isLastRotate(c, l, matrix) {
  return (c < matrix.length/2) && (l + 1 > matrix.length/2);
}

let matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]];
console.log(matrix);
rotate(matrix);
console.log(matrix);