function falsePredicate(){
  return false;
};

function diagonal(x,y){
  return x === y;
}

function subDiagonal(x,y,size){
  return size-1 === x+y;
}

function xDiagonal(x,y,size){
  return diagonal(x,y) || subDiagonal(x,y,size)
}

function chess(x,y){
  return (x - y) % 2 === 0;
}

function pyramidUp(x,y,size){
  return size-(y+1)>=x && x>=y;
}

function pyramidDown(x,y,size){
  return x>=x && size-(y+1)<= x;
}

function clock(x,y,sizy){
  return pyramidUp(x,y,sizy) || pyramidDown(x,y,size);
}