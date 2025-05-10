const Queue = require('./queue')

describe('Queue', () => {

  let queue;

   beforeEach(() => {
      queue = new Queue();
   });

  it('Deve criar uma fila', () => {
    expect(queue).toEqual({ elements: []})
  })

  it('Deve ser capaz de calcular o tamanho da fila', () => {
    expect(queue.size()).toBe(0);
    queue.add('item 1');
    expect(queue.size()).toBe(1);
  })

  it('Deve ser capaz de adicionar um item na fila', () => {
    queue.add('item 1');
    expect(queue.elements).toContain('item 1');
  })

  it('Deve escolher o primeiro item da fila', () => {
    queue.add('item 1');
    queue.add('item 2');
    expect(queue.peek()).toBe('item 1');
  })

  it('Deve remover o primeiro item da fila', () => {
      queue.add('item 1');
      queue.add('item 2');
      expect(queue.dequeue()).toBe('item 1');
      expect(queue.size()).toBe(1);
  })
})