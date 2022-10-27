let arr1 = generateArray(10);
let index = Number(window.prompt("Enter a start index", 0));
let amount = Number(window.prompt("Enter the number of elements to remove", 1));
let newElement = Number(
  window.prompt("Enter the new element to add to the array:")
);

if (index < 0 || index > arr1.length) {
  alert(`Index less than zero or more than ${arr1.length}`);
} else if (amount < 0 || amount + index > arr1.length) {
  alert(
    `Starting with ${index} You can not delete ${amount} of elements because array has lenght ${arr1.length} or amount less than 0`
  );
} else {
  alert(`Started array: ${arr1.join("-")}`);
  alert("Replaced array: " + replaceElement(arr1, index, amount, newElement));
}

function replaceElement(arr, startIndex, elementsToRemove, newNumber) {
  if (startIndex == arr.length && elementsToRemove == 0) {
    arr.push(newElement);
    return arr.join("-");
  }
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (i == startIndex + 1) {
      newArr.push(newNumber);
    }
    if (i < startIndex || i > startIndex + elementsToRemove) {
      newArr.push(arr[i]);
    }
  }
  return newArr.join("-");
}

function generateArray(amount) {
  let genArr = [];
  for (let i = 0; i < amount; i++) {
    genArr.push(Math.round(Math.random() * 100));
  }
  return genArr;
}
