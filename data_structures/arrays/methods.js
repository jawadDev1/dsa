function log(value) {
    console.log("Value ====> ", value);
  }
  
  let arr = [1, 2, 3, 4, 5];
  
  arr.push(9);
  
  arr.pop();
  
  arr.shift();
  
  arr.unshift(5);
  
  arr.splice(1, 3, "ar");
  
  log(arr);
  