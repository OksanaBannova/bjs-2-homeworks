function getArrayParams(...arr) {
  
  let min = Infinity;
  let max = -Infinity;
  let sum = 0;
  let avg;

  for (let i = 0; i < arr.length; i++) {
      min = Math.min(min, arr[i])
      max = Math.max(max, arr[i])
      sum += arr[i];
  }
  avg = +(sum / arr.length).toFixed(2)
  return { min, max, avg };
}

console.log(getArrayParams([-99, 99, 10]));




function summElementsWorker(...arr) {
let sum = 0;
for (let i = 0; i < arr.length; i++) {
  sum += arr[i];
}

return sum;
}
console.log(summElementsWorker());
console.log(summElementsWorker(10, 10, 11, 20, 10));

function differenceMaxMinWorker(...arr) {
let max = Math.max(...arr);
let min = Math.min(...arr);

if(arr.length === 0) {
return 0; 
}

return max - min;
}
console.log(differenceMaxMinWorker());
console.log(differenceMaxMinWorker(10, 10, 11, 20, 10));

function differenceEvenOddWorker(...arr) {
  let sumEvenElement = 0;
  let sumOddElement = 0;
  let difference;
  let sum;
  if (arr.length === 0) {
    return 0;
  }
for (let i = 0; i < arr.length; i++){
  if ((arr[i] % 2) === 0) {
    sumEvenElement += arr[i];
  }
  else {
   sumOddElement+=arr[i];
  }
}
  difference = sumEvenElement - sumOddElement;
  return difference;

}

console.log(differenceEvenOddWorker(94, 51, 57, 41, 47, 66, 58, 10, 38, 17));
console.log(differenceEvenOddWorker(15, 97, 85, 64, 67, 10, 69, 40, 15, 35));

function averageEvenElementsWorker(...arr) {
  let sumEvenElement = 0;
  let countEvenElement = 0;

  if (arr.length === 0) {
    return 0;
  }

  for (let i = 0; i < arr.length; i++) {
    if ((arr[i] % 2) === 0) {
      sumEvenElement+=arr[i];
      countEvenElement++;
    }
  }

  return sumEvenElement / countEvenElement;
}

function makeWork (arrOfArr, func) {
let maxWorkerResult = -Infinity;
let number;
let result;

if (arrOfArr.length === 0) {
  return 0;
}

for (let i = 0; i < arrOfArr.length; i++) {
  number = arrOfArr[i];
  result = func(...number);
  if (result > maxWorkerResult) {
    maxWorkerResult = result;
  }
}
return maxWorkerResult;
}
