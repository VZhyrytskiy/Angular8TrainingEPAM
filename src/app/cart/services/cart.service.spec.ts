import { TestBed } from '@angular/core/testing';
import { CartService } from './cart.service';

const product = {
  id: 1,
  isAvailable: true,
  name: 'Boots',
};

const cartItem = {
  id: 1,
  name: 'Suit',
  price: 1,
  count: 1,
  img: ''
};

const cartItem2 = {
  id: 2,
  name: 'Shoes',
  price: 1,
  count: 1,
  img: ''
};

describe('CartService', () => {
  let cartService: CartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    cartService = TestBed.get(CartService);
    cartService.cartProducts = [cartItem, cartItem2];
  });

  it('should be created', () => {
    expect(cartService).toBeTruthy();
  });

  it('should call addProduct and return cartProducts', (done: DoneFn) => {
    cartService.addProduct(product).then(value => {
      expect(value).toEqual([cartItem, cartItem2]);
      done();
    });
  });

  it('should get sum of cart products', () => {
    const a = cartService.getSum();
    expect(a).toBe(2);
  });

  it('should get length of cart product array', () => {
    const length = cartService.getCount();
    expect(length).toBe(2);
  });

  it('should clean array of cart products', () => {
    const array = cartService.clearCart();
    expect(array).toEqual([]);
  });

  it('should get cart by ID', () => {
    const item = cartService.getCartById(1);
    expect(item).toEqual(cartItem);
  });
});
