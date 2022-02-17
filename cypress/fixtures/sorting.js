export let numberSortASC = (array) => array.sort((a, b) => a - b);
export let numberSortDESC = (array) => array.sort((a, b) => b - a);

export let stringSortASC = (array) =>
  array.sort((currentElement, nextElement) => 
  (currentElement > nextElement) ? 1 : (currentElement < nextElement) ? -1 : 0);
 
export let stringSortDESC = (array) =>
  array.sort((currentElement, nextElement) => 
  (currentElement > nextElement) ? -1 : (currentElement < nextElement) ? 1 : 0);
