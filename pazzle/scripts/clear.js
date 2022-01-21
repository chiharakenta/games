export default {
  check: function() {
    const grids = Array.from(document.querySelectorAll('td'));
    const notPaintedGrids = grids.filter(grid => {
      !grid.classList.contains('painted')
    });
    console.log(notPaintedGrids);
    return Boolean(notPaintedGrids.length);
  },
  display: function() {
    const clearText = document.querySelector('.clear');
    clearText.classList.remove('hide');
  }
};