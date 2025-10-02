const resolvePromise = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ message: " delayed success!" });
    }, 500);
  });
};

const rejectPromise = () => {
  return new Promise((_, reject) => {
    setTimeout(() => {
      reject({ message: " delayed rejection!" });
    }, 500);
  });
};

resolvePromise()
    .then(result => console.log("Result:", result))
    .catch(error => console.error("Error:", error));

rejectPromise()
    .then(result => console.log("Result:", result))
    .catch(error => console.error("Error:", error));