import { describe, expect, it } from 'vitest'
import { ej1examen } from '../src/fizzbuzz'

describe('ej1examen', () => {
  //  it('should be a function', () => {
  //  expect(typeof fizzbuzz).toBe('function')
  //  })
  it('should throw a specificerror message if not number is providedas parameter', () => {
    expect(() => ej1examen()).toThrow('parameter provided must be a number')
  })
  it('should throw a specific error message not a number is provided', () => {
    expect(() => ej1examen()).toThrow('parameter provided must be a number')
  })

  it('should throw a specific error message not a number is provided', () => {
    expect(() => ej1examen(NaN)).toThrow('parameter provided must be a number')
  })

  it('should return "Jaime" if number provided is multiple of 2', () => {
    expect(ej1examen(2)).toBe('Jaime')
    expect(ej1examen(4)).toBe('Jaime')
    expect(ej1examen(6)).toBe('Jaime')
  })
  it('should return "Martinez" if number provided is multiple of 3', () => {
    expect(ej1examen(3)).toBe('Martinez')
    expect(ej1examen(6)).toBe('Martinez')
    expect(ej1examen(9)).toBe('Martinez')
  })
  it('should return "Sanchez" if number provided is multiple of 11', () => {
    expect(ej1examen(11)).toBe('fizz')
    expect(ej1examen(22)).toBe('fizz')
    expect(ej1examen(33)).toBe('fizz')
  })
}
)
