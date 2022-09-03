import { queryString, parse } from './queryString';

describe('Object to query string', () => {
  it('should create a valid query string when a object is valid', () => {
    const obj = {
      name: 'Denis',
      profession: 'developer',
    };

    expect(queryString(obj)).toBe('name=Denis&profession=developer');
  });

  it('should create a valid query string even when an array is passed as value', () => {
    const obj = {
      name: 'Denis',
      abilities: ['JS', 'TDD'],
    };

    expect(queryString(obj)).toBe('name=Denis&abilities=JS,TDD');
  });

  it('should throw an error when an object is passed as value', () => {
    const obj = {
      name: 'Denis',
      abilities: {
        first: 'JS',
        second: 'TDD',
      },
    };

    expect(() => queryString(obj)).toThrowError();
  });
});

describe('Query string to object', () => {
  it('should convert a query string to object', () => {
    const qs = 'name=Denis&profession=developer';

    expect(parse(qs)).toEqual({
      name: 'Denis',
      profession: 'developer',
    });
  });

  it('should convert a query string of a single key-value to object', () => {
    const qs = 'name=Denis';

    expect(parse(qs)).toEqual({ name: 'Denis' });
  });

  it('should convert a query string to an object taking care of comma separated values', () => {
    const qs = 'name=Denis&abilities=JS,TDD';

    expect(parse(qs)).toEqual({ name: 'Denis', abilities: ['JS', 'TDD'] });
  });
});
