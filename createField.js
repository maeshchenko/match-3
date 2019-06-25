function createField(size){
  let field = document.createElement('div');
  field.classList.add('field');

  let pointsArr = generateMatrix(size);
  
  let cellsArr = pointsArr.map(function(point){
      let cell = document.createElement('div');
      cell.classList.add('cell');
      cell.style.left = point.x + 'em';
      cell.style.top = point.y + 'em';
      return cell;
  });

  cellsArr.forEach(function(cell){
    field.append(cell);
  });

  return field;
};