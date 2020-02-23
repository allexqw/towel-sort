module.exports = function towelSort (matrix) {
    if ( (Array.isArray(matrix) &&  matrix.length !==0) && matrix){
        for (let i = 1; i <= matrix.length-1; i+=2){
            matrix[i]=matrix[i].reverse();
        }
        return matrix.join().split(",").map(Number);
}
    else {
        return [];
    }
}
