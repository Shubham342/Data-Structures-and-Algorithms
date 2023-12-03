var isPalindrome = function (s) {
    const p = s.replace(/[^a-z0-9]/gi, "").toLowerCase();
    let n = Math.floor((p.length - 1)/2);
    for (let i =0; i <= n; i++){
        if(p[i] !== p[p.length -1 -i]){
            return false;
        }
    }
    return true;
};