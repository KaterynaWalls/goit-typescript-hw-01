type AllType = {
  name: string;
  position: number;
  color: string;
  weight: number;
};

// Функція порівняння з generics і Pick
function compare<T extends Pick<AllType, 'name' | 'color'>, U extends Pick<AllType, 'position' | 'weight'>>(
  top: T,
  bottom: U
): AllType {
  // Повертаємо новий об'єкт, об'єднуючи потрібні властивості
  return {
    name: top.name,
    color: top.color,
    position: bottom.position,
    weight: bottom.weight,
  };
}
