let arr = process.argv.slice(2);
let delay = 0;
arr.sort(function(a, b) {
  return a - b;
});
for (let i = 0; i < arr.length; i++) {
  if (arr[i] < 0 || arr[i] === NaN) {
    
  }
  else {
    setTimeout(() => {
      process.stdout.write(`.`);
    }, delay) 
    delay += (arr[i]*1000);
  }
}  