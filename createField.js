function createField(size){
  let field = document.createElement('div');
  field.classList.add('field');
  field.style.width = size.width + 'em';
  field.style.height = size.height + 'em';

  let ntx = generateMatrix(size);
  
  field.cells = ntx.map(createCell);
  field.cells.forEach(function(cell){
    field.append(cell.element);
  });
  
  return field;
};