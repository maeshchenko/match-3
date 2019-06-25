function createCell(point){
  let cell = document.createElement('div');
  cell.classList.add('cell');

  cell.style.left = point.x + 'em';
  cell.style.top = point.y + 'em';
  cell.point = point;
  return cell;
}