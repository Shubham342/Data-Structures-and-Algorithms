class Stack {
    constructor(){
        this.items= [];
    }


    push(element){
        this.items.push(element);
    }
    pop(){
        if (this.items.length === 0) return undefined;
        return this.items.pop();
    }
    isEmpty(){
      return this.items.length ===0;
    }
}
var isValid = function(s) {
    let obj = {
        "{":"}",
        "[":"]",
        "(":")",
    }
    const stack = new Stack;
    for(let i =0; i< s.length; i++){
        if(s.charAt(i) in obj){
            stack.push(s.charAt(i));
        }else{
            const popedItem = stack.pop();
            if(s.charAt(i) != obj[popedItem]) return false;
        }
    };
    if(stack.isEmpty()) return true;
    return false;
};