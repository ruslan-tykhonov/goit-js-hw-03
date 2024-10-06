function makeArray(firstArray, secondArray, maxLength) {
  // Створюємо новий масив, об'єднуючи два масиви
  const combinedArray = firstArray.concat(secondArray);

  // Якщо довжина нового масиву більша за maxLength, повертаємо його копію з maxLength елементів
  if (combinedArray.length > maxLength) {
    return combinedArray.slice(0, maxLength);
  }

  // Якщо довжина не перевищує maxLength, повертаємо весь масив
  return combinedArray;
}