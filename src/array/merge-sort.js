const countSetBits = (x, shift=1, y=1) => {
  console.log(x, shift, shift < 8, (x&y<<shift)&&1)
  if (shift < 8) {
    console.log(1);
    return (x&y<<shift + countSetBits(x, shift+1, y));
  } else {
    return 0;
  }
}

console.log(countSetBits(4))
