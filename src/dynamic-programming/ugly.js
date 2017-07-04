
function maxDivide(a, b) {
  while (a%b == 0)
    a = a/b;
  return a;
}

/* Function to check if a number is ugly or not */
function isUgly(no) {
  no = maxDivide(no, 2);
  no = maxDivide(no, 3);
  no = maxDivide(no, 5);
  return (no == 1) ? 1 : 0;
}

/* Function to get the nth ugly number*/
function getNthUglyNo(n) {
    let ugly=[]; // To store ugly numbers
    let i2 = 0, i3 = 0, i5 = 0;
    let next_multiple_of_2 = 2;
    let next_multiple_of_3 = 3;
    let next_multiple_of_5 = 5;
    let next_ugly_no = 1;

    ugly[0] = 1;
    for (let i=1; i<n; i++) {
       next_ugly_no = Math.min(next_multiple_of_2,
                           Math.min(next_multiple_of_3,
                               next_multiple_of_5));
       ugly[i] = next_ugly_no;
       if (next_ugly_no == next_multiple_of_2) {
           i2 = i2+1;
           next_multiple_of_2 = ugly[i2]*2;
       }
       if (next_ugly_no == next_multiple_of_3) {
           i3 = i3+1;
           next_multiple_of_3 = ugly[i3]*3;
       }
       if (next_ugly_no == next_multiple_of_5) {
           i5 = i5+1;
           next_multiple_of_5 = ugly[i5]*5;
       }
    } /*End of for loop (i=1; i<n; i++) */
    return next_ugly_no;
}

/* Driver program to test above functions */
function main() {
  let no = getNthUglyNo(15);
  console.log("150th ugly no. is %d ",  no);
  return 0;
}

main()
