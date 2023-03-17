/*
Escribir una funcion que al pasarleun nÚmero:
    - muestra "fizz"si es multiplo de 3
    - muestra "buzz" si es multiplo de 5
    - muestra"fizzbuzz" si es multiplo de 3 yde 5.
    - Muestra el número si no es múltplo de ninguno
        de los anteriores
*/
export const fizzbuzz = (number) => {
  if (typeof number !== 'number') throw new Error('parameter provided must be a number')
  if (Number.isNaN(number)) throw new Error('parameter provided must be a number')

  const multiplies = { 3: 'fizz', 5: 'buzz', 7: 'wooff' }
  let output = ''

  Object
    .entries(multiplies)
    .forEach(([multiplier, word]) => {
      if (number % multiplier === 0) output += word
    })

  return output === '' ? number : output
}
