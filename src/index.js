
// You should implement your task here.

module.exports = function towelSort (matrix) {
    let newA = [];
    let counter = 1;
    for (let name of matrix) {
        if ( counter%2 !== 0 ) {
          newA = [...newA, ...name];
          counter++;
        } else {
            let revers = name.reverse();
            newA = [...newA, ...name];
            counter++;
        }
        
    };
  return newA;
}
