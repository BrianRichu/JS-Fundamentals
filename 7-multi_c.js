const myArg = process.argv[2];
if (Number(myArg)) {
  for (let index = 0; index <myArg; index++) {
    console.log("C is fun")
    
  }
} else {
  console.log("Missing number of occurrences")
  
}
