
function elephant(position1, position2) {
  const array = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
  const pos1 = position1.split('');
  const pos2 = position2.split('');
  let thisIndex;
  if (pos1[1] > 8 || pos1[1] < 1 || pos2[1] > 8 || pos2[1] < 1
    || array.indexOf(pos1[0]) === -1 || array.indexOf(pos2[0]) === -1) {
    console.log('неверное значение клеток');
    return false;
  }
  array.find((element, index) => {
    if (pos1[0] === element) {
      thisIndex = index;
      return true;
    }
    return false;
  });


  if (+pos2[1] === +pos1[1] + 2 || +pos2[1] + 2 === +pos1[1]) {
    if (pos2[0] === array[thisIndex + 1] || pos2[0] === array[thisIndex - 1]) return true;
    return false;
  } if (+pos2[1] === +pos1[1] + 1 || +pos2[1] + 1 === +pos1[1]) {
    if (pos2[0] === array[thisIndex + 2] || pos2[0] === array[thisIndex - 2]) {
      return true;
    }
    return false;
  }
  return false;

// eslint глобальные переменные  find
}

console.log(elephant('a3', 'b5'));
console.log(elephant('d3', 'c4'));
console.log(elephant('a3', 'l8'));
