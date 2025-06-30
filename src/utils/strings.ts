//· strings tools ·

//- compressNumber -
export const compressNumber = (theNumber: any): string => {
  const num = theNumber ? parseInt(theNumber) : 0
  // Definir los rangos de compresión
  const ranges = [
    { divider: 1_000_000_000, suffix: "b" }, // Billones
    { divider: 1_000_000, suffix: "m" }, // Millones
    { divider: 1_000, suffix: "k" }, // Miles
  ]
  // Manejar números negativos
  const isNegative = num < 0
  const absNum = Math.abs(num)
  // Encontrar el rango apropiado
  for (const range of ranges) {
    if (absNum >= range.divider) {
      // Redondear a un decimal usando punto
      const compressedNum = (absNum / range.divider)
        .toFixed(1)
        .replace(",", ".")

      // Eliminar el decimal si es .0
      const formattedNum = compressedNum.endsWith(".0")
        ? compressedNum.slice(0, -2)
        : compressedNum
      return `${isNegative ? "-" : ""}${formattedNum}${range.suffix}`
    }
  }
  // Si el número es menor que 1000, devolverlo como está
  return `${isNegative ? "-" : ""}${Math.floor(absNum)}`
}

//- domain -
export const domain = (url: string): string => {
  try {
    const cleanUrl = url.replace(/^https?:\/\//, "")
    // Eliminar cualquier path o parámetros después del dominio
    const domain = cleanUrl.split("/")[0].split("?")[0]
    return domain
  } catch (error) {
    console.error("error extracting domain:", error)
    return ""
  }
}

//- isValidURL -
export const isValidURL = (string: string): boolean => {
  try {
    new URL(string)
    return true
  } catch {
    return false
  }
}

//- removeHashtags -
export const removeHashtags = (text: string): string => {
  return text.replace(/#\w+\s*/g, "")
}

//- normalizeQuotes -
export const normalizeQuotes = (text: string): string => {
  const quotes = /[“”]/g
  return text.replaceAll(quotes, '"')
}
