/**
 * Exercise: implement a fibonacci() getter getter.
 * Hint: Fibonacci numbers follow the rule
 *   current = prev + prevprev
 * and the first two Fibonacci numbers are 1 and 1.
 * E.g.: 1, 1, 2, 3, 5, 8, 13, ...
 */

function fibonacci() {
  // Inintialization
  let prev = 1;
  let prevprev = 1;
  let i = 0;
  return () => {
    // move next
    if (i++ < 2) {
      return i;
    } else {
      
    }
  }
}
