const sumAll = function(min, max) {
    if(!Number.isInteger(min) || !Number.isInteger(max)){
        return "ERROR"
    }
    if(min<0 || max<0){
        return "ERROR";
    }
    let total = 0;
    
    if(min>max){
        const temp = max;
        max = min;
        min = temp;
    }
    
    for(let i = min; i<=max; i++){
        total += i;
    }
    return total;
};

// Do not edit below this line
module.exports = sumAll;
