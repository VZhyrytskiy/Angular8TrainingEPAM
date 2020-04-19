import { OrderByPipe } from './order-by.pipe';

describe('OrderByPipe', () => {
  const pipe = new OrderByPipe();

  const a = {
    id: 1,
    name: 'Boots',
    price: 250,
    count: 100,
  };
  const b = {
    id: 2,
    name: 'Boots',
    price: 150,
    count: 100,
  };

  it('create an instance', () => {
    const pipe = new OrderByPipe();
    expect(pipe).toBeTruthy();
  });

  it('should transform [a, b] acs = true to [b, a]', () => {
    expect(pipe.transform([a, b], 'price', false)).toEqual([b, a]);
  });
});
