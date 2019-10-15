module.exports = function check(str, bracketsConfig) {
  const brackets = bracketsConfig.map(elem => elem.join(''));
  function  outPut(string)  {
    let result = string;
    brackets.forEach((br) => {
      result = result.replace(br, ''); 
      });
    if (result.length === 0) return true;
    if (string.length === result.length) return false;
    return outPut(result, brackets);
  };
  return outPut(str, brackets); 
}
