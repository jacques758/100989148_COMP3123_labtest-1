function lowercaseword(arr) {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(arr)) {
      return reject(new Error("Input must be an array"));
    } else {
        const result = arr
            .filter(word => typeof word === 'string')
            .map(word => word.toLowerCase());
        resolve(result);
    }
});
}

const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings'];

lowercaseword(mixedArray)
  .then(result => console.log("Result:" , result)) 
  .catch(error => console.error("error:", error));