const newArr = fill(150); 
console.log(newArr);

//--- first solution

const nearestNum = nearToZero1(newArr);
console.log(nearestNum);

function nearToZero1 (arr){
    arr.sort(function(a, b) {
        return Math.abs(a) - Math.abs(b);
      });
    return arr[0];
}
//-----------------------------

//---second solution

// const nearestNum1 = nearToZero(newArr);
// console.log(nearestNum1);

function nearToZero (arr){
    let nearest = arr[0];
    for(let i = 1; i < arr.length; i++){
        if(Math.abs(nearest) >  Math.abs(arr[i] )  ){
            nearest = arr[i];
        } 
    }
    return nearest;
}

//----------------------


//functions for Array elements 

function randNumber(min, max){
    let rand = Math.round(Math.random() * (max - min + 1) + min);
    return rand;
}

function fill (count){
    let arr = []
    for(let i = 0; i < count; i++){
        arr.push(randNumber(-4000000, 4000000));
    }
    return arr;
}





