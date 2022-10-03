function strNumToArray(numStr, numOfElem, chunk) {
    let numArr = [];
  
    for (let i = 0; i < numOfElem; i++) {
      let elem = numStr.substring(
        numStr.length - chunk * (i + 1),
        numStr.length - chunk * i
      );
      if (elem.length < chunk) {
        elem = "0" + elem;
      }
      numArr[i] = +elem;
    }
    return numArr;
  }

  // chunk size determines the number of digits we want to keep in a single array element
  
  function bigNumberAddition(num1, num2, chunkSize) {
    const arrLength = num1.length > num2.length ? num1.length : num2.length;
    let numOfElem = Math.ceil(arrLength / chunkSize);
  
    let numArr1 = strNumToArray(num1, numOfElem, chunkSize);
    let numArr2 = strNumToArray(num2, numOfElem, chunkSize);
  
    let sumArr = [];
    let surplus = 0;
  
    for (let i = 0; i < numOfElem; i++) {
      let sum = numArr1[i] + numArr2[i] + surplus;
  
      sumArr[i] = sum % 10 ** chunkSize;
  
      if (sum.toString().length > chunkSize) {
        surplus = Math.floor(sum / 10 ** chunkSize);
      } else {
        surplus = 0;
      }
    }
    return sumArr.reverse().join("");
  }
  
  console.log(bigNumberAddition("413445", "486486458449865", 2));
  