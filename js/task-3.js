function filterArray(numbers, value) {
  // Створюємо порожній масив для зберігання підходящих чисел
  const filteredNumbers = [];

  // Проходимо через кожен елемент масиву numbers
  for (let i = 0; i < numbers.length; i++) {
    // Якщо число більше за value, додаємо його до нового масиву
    if (numbers[i] > value) {
      filteredNumbers.push(numbers[i]);
    }
  }

  // Повертаємо новий масив з підходящими числами
  return filteredNumbers;
}