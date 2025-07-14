const firstArg = Number(process.argv[2]);
const secondArg = Number(process.argv[3]);

function add(a, b) {
  let result = a + b;
  console.log(result)
}
add(firstArg, secondArg)
