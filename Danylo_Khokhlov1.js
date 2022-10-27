function factor(num) {
  let arr = [];
  for (let i = 1; i <= num; i++) {
    if (num / i === Math.round(num / i)) {
      arr.push(i);
    }
  }
  return arr.join(", ");
}
