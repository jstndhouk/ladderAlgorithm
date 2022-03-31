function ladderAlgorithm(steps) {
    let totalReps=0;
    if(steps==1)
        totalReps=1
    else{
        for (let i=steps; i>0; i--){
            totalReps=totalReps + i;}
    }
    return totalReps;}

console.log(ladderAlgorithm(1))
console.log(ladderAlgorithm(10))
console.log(ladderAlgorithm(8))
