function array255(){
    var arr=[];
    for(var i=1; i<=255; i++){
        arr.push(i);
    }
    return arr;
}
// var result=array255();
// console.log(result);



function arrEven(){
    sum = 0;
    for(var i=1; i<=1000; i++){
        if(i%2==0){
            sum = sum + i;
        }
    }
    return sum;
}
// console.log(arrEven());



function sumOdd5000(){
    sum=0;
    for(var i=1; i<=5000; i++){
        if(i%2==0){
            sum = sum + i;
        }
    }
    return sum;
}
// console.log(sumOdd5000());



function arrSum(numArr){
    sum=0;
    for( var i = 0; i<numArr.length; i++){
        sum = sum + numArr[i];
    }
    return sum;
}
// console.log(arrSum([1,2,5]));
// console.log(arrSum([-5,2,5,12]));



function max(numArr){
    var max = numArr[0]; //sets the maximum to the first value in the array
    for( var i = 0; i<numArr.length; i++){ //for loop to examine each value in the array
        if(numArr[i]>max){
            //if it is, make it the new max
            max = numArr[i];
        }
    }
    return max;
}
// console.log(max([-3,3,5,7]));



function arrAvg(numArr){
    var sum = 0;
    var avg = 0;
    for(var i=0; i<numArr.length; i++){
        sum = sum + numArr[i];
    }
    avg = sum/numArr.length;
    return avg;
}
// console.log(arrAvg([1,3,5,7,20]));



function oddArr(){
    var arr = [];
    for(var i=1; i<50; i+=2){
        arr.push(i);
    }
    return arr;
}
// console.log(oddArr());



function greaterThanY(arr, y){
    var counter = 0;
    // iterate through the array
    for (var i = 0; i < arr.length; i++){
        // check if value in array is greater than y
        if (arr[i] > y){
            // if it is, counter goes up
            counter++;
        }
    }
    return counter;
}
// console.log(greaterThanY([1,3,5,7], 2));



function squares(arr){
    for (var i = 0; i < arr.length; i++){
        // square each value and reassign that new value to that index
        arr[i] = arr[i]*arr[i];
    }
    console.log(arr);
}
// squares([1, -2, 5, 10]);



function noNegatives(arr){
    for (var idx = 0; idx < arr.length; idx++){
        // examine each value and see if it's negative.
        if (arr[idx] < 0){
            arr[idx] = 0;
        }
    }
    console.log(arr);
}
// noNegatives([-1,2,-5]);



function maxMinAvg(arr){
    var sum = 0;
    var max = arr[0];
    var min = arr[0];
    for (var idx = 0; idx < arr.length; idx++){
        sum = sum + arr[idx];
        if (arr[idx] > max){
            max = arr[idx];
        }
        else if (arr[idx] < min){
            min = arr[idx];
        }
    }
    var newArr = [];
    newArr.push(max);
    newArr.push(min);
    var avg = sum/arr.length
    newArr.push(avg);

    return newArr;
}
// console.log(maxMinAvg([2,10,-3,4]));



function swap(arr){
    var temp = arr[arr.length-1];
    arr[arr.length-1] = arr[0];
    arr[0] = temp;
}
var tester = [1,4,10,-2];
swap(tester);
// console.log(tester);



function noNegativesDojo(arr){
    for (var idx = 0; idx < arr.length; idx++){
        // examine each value and see if it's negative.
        if (arr[idx] < 0){
            arr[idx] = "Dojo";
        }
    }
    console.log(arr);
}
// noNegativesDojo([-1,2,-5]);