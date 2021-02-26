module.exports = function check(str, bracketsConfig) {
  let arrStr = str.split("");
  let stack = [];

  let openBracket=[];
  let closeBracket =[];
  for (let i = 0; i < bracketsConfig.length; i++) {
      openBracket.push(bracketsConfig[i][0]);
      closeBracket.push(bracketsConfig[i][1]);
  }
  for(let i=arrStr.length-1; i>=0 ;i--){
    if(arrStr[0]==stack[0]){
      return true;
    }
    else if(closeBracket.indexOf(arrStr[i])!=-1){
      stack.push(arrStr.pop());
    }else if(openBracket.indexOf(arrStr[i])!=-1){
      if(stack[stack.length-1]==closeBracket[openBracket.indexOf(arrStr[i])]){
        stack.pop();
        arrStr.pop();
      } else{
        return false;
      }
    }
  }
  return stack.length==0;
};