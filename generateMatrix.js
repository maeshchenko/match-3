function generateMatrix(size){
  let result = [];
  for(let y = 0; y<size.height; y++){
    for(let x = 0; x<size.width; x++){
      result.push({x:x, y:y})
    }
  }
  return result;
};