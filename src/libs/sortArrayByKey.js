/*sort array by key (array?array, key?string, descending?bool)*/
export const sortArrayByKey = (array, key, des) => {
  return array.sort(function (a, b) {
    let x = a[key];
    let y = b[key];
    if (des) {
      return ((x > y) ? -1 : ((x < y) ? 1 : 0));
    } else {
      return ((x < y) ? -1 : ((x > y) ? 1 : 0));
    }
  });
};
