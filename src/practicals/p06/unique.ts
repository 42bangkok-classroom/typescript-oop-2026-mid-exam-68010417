function getUniqueNumbers(arr1: number[], arr2: number[]):number[] {
  const newArr: number[] = [...arr1];
  for (let i = 0; i < arr2.length; i++) {
      const item = arr2[i];
      if (newArr.includes(item)) continue;
      newArr.push(item);
  }
  return newArr;
}

const arr1 = [1, 2, 3, 4];
const arr2 = [3, 4, 5, 6];

console.log(getUniqueNumbers(arr1,arr2))