const myArg = process.argv[2];

if (Number(myArg)) {
  const row = "X".repeat(myArg);
  for (let index = 0; index < myArg; index++) {
  console.log(row)
    
  }
} else {
  console.log("Missing size")
}


