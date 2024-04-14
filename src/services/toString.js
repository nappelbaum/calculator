export default function toString(number) {
  return String(number).replace(/(\d)(?=(\d{3})+([^\d]|$))/g, '$1 ')
}

// Преобразование числа из store в текст в инпуте
