function arrayValuesTypes(arr) {
  for (let a = 0; a < arr.length; a++) {
    console.log(typeof arr[a]);
  }
}
console.log(arrayValuesTypes([1, 2, "null", []]));
console.log(arrayValuesTypes([true, 23, "34", ["sha"]]));
