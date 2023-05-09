//pagination function
function paginationFun(arr, page) {
  const startIndex = (page - 1) * 9;
  return arr.slice(startIndex, startIndex + 9);
}

module.exports = paginationFun;
