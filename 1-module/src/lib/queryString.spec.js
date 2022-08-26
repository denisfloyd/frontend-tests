const { queryString } = require("./queryString");

describe("Object to query string", () => {
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
