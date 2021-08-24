const s = new Date().getSeconds();

setTimeout(function() {
  // prints out "2", meaning that the callback is not called immediately after 500 milliseconds.
  console.log("Ran after " + (new Date().getSeconds() - s) + " seconds");
}, 500)

while (true) {
  if (new Date().getSeconds() - s >= 2) {
    console.log("Good, looped for 2 seconds")
    break;
  }
}

const isRequired = () => { throw new Error('param is required'); };
const print = (num = isRequired()) => { console.log(`printing ${num}`) };
print(2);//printing 2
//print()// error
print(null)//printing null