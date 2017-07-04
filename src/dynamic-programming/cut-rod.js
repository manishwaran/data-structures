function max(a, b) { return (a > b)? a : b;}

/* Returns the best obtainable price for a rod of length n and
   price[] as prices of different pieces */
function cutRod(price = [], n) {
   if (n <= 0)
     return 0;
   let max_val = -1;

   // Recursively cut the rod in different pieces and compare different
   // configurations
  for (let i = 0; i<n; i++) {
    console.log(n, i, n-i-1);
    max_val = max(max_val, price[i] + cutRod(price, n-i-1));
  }

   return max_val;
}

/* Driver program to test above functions */
function main() {
    let arr = [1, 5, 8];
    let size = 3 //sizeof(arr)/sizeof(arr[0]);
    console.log("Maximum Obtainable Value is %d n", cutRod(arr, size));
    return 0;
}


main()
