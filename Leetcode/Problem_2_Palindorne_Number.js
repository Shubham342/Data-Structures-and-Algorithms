// Check if number is Palindrome

var isPalindrome = function(x) {
    if (x<0) return false;
    let n = x;
    let reminder = 0;
    while (n>0){
        const digit = n % 10;
        reminder = reminder *10 +digit;
        n = Math.floor(n/10);
    }
    if (reminder === x)return true;

    return false;
};