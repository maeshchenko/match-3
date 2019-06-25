function createField(size){

  let fieldElement = document.createElement('div');
  fieldElement.classList.add('field');
  fieldElement.style.width = size.width + 'em';
  fieldElement.style.height = size.height + 'em';

  function addCellToField(cell){
    fieldElement.append(cell);
  };

  let cells = generatePointMatrix(size).map(createCell)
  cells.forEach(addCellToField);

  return {element: fieldElement,
          cells: cells};
};