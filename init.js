const size = {width: 5, height: 5};
let field = createField(size);
console.log(field);
console.log(); //выведет все диагональные элементы


function createGem(cell){
  cell.classList.add('gem');
  let gemId = Math.floor(Math.random()*9 + 1);
  cell.classList.add(`gem-${gemId}`);
};

// field.cells.filter(function(cell){
//   return diagonal(cell.point.x, cell.point.y)
// }).forEach(createGem);

field.cells.filter(function(cell){
  return pyramidDown(cell.point.x, cell.point.y, size.width)
}).forEach(createGem);

document.body.appendChild(field.element);