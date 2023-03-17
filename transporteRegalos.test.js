import { describe, it, expect } from 'vitest'

const transporteRegalos = (tipoRegalos, nombreReno) => {
  if (typeof tipoRegalos !== 'string') throw new Error('debe ser un string')
  if (typeof nombreReno !== 'string') throw new Error('debe ser un string')

  const pesoRegalo = tipoRegalos.length
  const pesoReno = nombreReno.length * 2
  return Math.floor(pesoReno / pesoRegalo)
}

describe('transpoteRegalos', () => {
  // test I: debe ser una funcion
  it('deberia ser una función', () => {
    expect(typeof transporteRegalos).toBe('funcion')
  })

  // test 2: el primer parametro debe ser un string

  it('el primer parametro debe ser un tring', () => {
    expect(() => transporteRegalos(2)).toThrow()
  })

  // test 3: el segundo parametro debe ser un string

  it('el segundo parametro debe ser un tring', () => {
    expect(() => transporteRegalos('a')).toThrow()
  })

  // test 4: debe darnos el numoero de cajas de regalos que se pueden transportar

  it('el numero decajas que se pueden trasnportar', () => {
    expect(transporteRegalos('bola', 'pepito')).toBe(3)
  })
})
