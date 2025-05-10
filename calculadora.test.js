const Calculadora = require('./calculadora')

describe('Calculadora', () => {
   let calc;

   beforeEach(() => {
      calc = new Calculadora();
   });
   
  it('Deverá retornar a soma de dois números', () => {
    expect(calc.soma(2,3)).toBe(5);
    
  })

  it('Deverá retornar a subtração de dois números', () => {
    expect(calc.subtrair(5,2)).toBe(3);
    
  })

  it('Deverá retornar a multiplicação entre dois números', () => {
    expect(calc.multiplicar(4,3)).toBe(12);
  })

  it('Deverá retornar a divisao entre dois números', () => {
    expect(calc.dividir(10,2)).toBe(5);
  })
  it('Deverá lançar erro ao tentar dividir por zero', () =>{
    expect(() => calc.dividir(10,0)).toThrow("Divisão por zero não permitida");
  })
})