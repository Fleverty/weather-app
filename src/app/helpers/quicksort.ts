import {CityWeatherData} from '@wtr/interfaces';

export function quickSort(array: CityWeatherData[]): any[] {
  if (array.length < 2) {
    return array;
  }
  const min = 1;
  const max = array.length - 1;
  const rand = Math.floor(min + Math.random() * (max + 1 - min));
  const pivot = array[rand];
  const left = [];
  const right = [];
  array.splice(array.indexOf(pivot), 1);
  array = [pivot].concat(array);
  for (let i = 1; i < array.length; i++) {
    if (pivot > array[i]) {
      left.push(array[i]);
    } else {
      right.push(array[i]);
    }
  }
  return quickSort(left).concat(pivot, quickSort(right));
}
