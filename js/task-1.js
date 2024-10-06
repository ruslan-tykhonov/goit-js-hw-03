function slugify(title) {
  // Приводимо рядок до нижнього регістру, розділяємо слова пробілами і об'єднуємо їх тире
  return title.toLowerCase().split(" ").join("-");
}
