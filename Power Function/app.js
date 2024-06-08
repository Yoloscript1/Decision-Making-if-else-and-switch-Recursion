function power(base, exponent) {
    if (exponent === 0) {
      return 1;
    } else {
      return base * power(base, exponent - 1);
    }
  }

  console.log(power(2, 3)); // 8
  console.log(power(3, 4)); // 81
  console.log(power(4, 0)); // 1
  console.log(power(2, 1)); // 2