/*
Escribir una funcion que al pasarleun nÚmero:
    - muestra "fizz"si es multiplo de 3
    - muestra "buzz" si es multiplo de 5
    - muestra"fizzbuzz" si es multiplo de 3 yde 5.
    - Muestra el número si no es múltplo de ninguno
        de los anteriores
*/
export const ej1examen = (number) => {
  if (typeof number !== 'number') throw new Error('parameter provided must be a number')
  if (Number.isNaN(number)) throw new Error('parameter provided must be a number')

  const multiplies = { 2: 'Jaime', 3: 'Martinez', 11: 'Sanchez' }
  let output = ''

  Object
    .entries(multiplies)
    .forEach(([multiplier, word]) => {
      if (number % multiplier === 0) output += word
    })

  return output === '' ? number : output
}
