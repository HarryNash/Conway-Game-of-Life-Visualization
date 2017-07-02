export default function clone2d(currentArray) {
  var newArr = currentArray.map(function(arr) {
    return arr.slice();
  });

  return newArr;
}
