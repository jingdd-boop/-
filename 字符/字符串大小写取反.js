function processString(s){
  var arr = s.split('');
  var new_arr = arr.map((item)=>{
    return item === item.toUpperCase() ? item.toLowerCase() : item.toUpperCase();

  });
  return new_arr.join('');
}
console.log(processString('Abc'))