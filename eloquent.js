//Minimum

function min(val1, val2){
  if(val1<=val2){
    return val1
  }
  else {
    return val2
  }
};

console.log(min(0, 10));

//recursion

function isEven(num) {
  if(num<0){
      num*= -1;
  }
  if(num == 0){
    return true;
  }
  else if(num == 1){
      return false;
  }
  else {
     return isEven(num - 2);
  }
};

console.log(isEven(-1));

//Bean Counting

//Count Bs

function countBs(string){
    var count = 0;
    for(var i=0; i<string.length; i++) {
       if(string.charAt(i)== "B") {
           count++;
       };
    };
    return count;
};

console.log(countBs("BBC"));

//Count Characters

function countChar(string, char){
    var count = 0;
    for(var i=0; i<string.length; i++) {
       if(string.charAt(i)== char) {
           count++;
       };
    };
    return count;
};

console.log(countChar("kakkerlak", "k"));
