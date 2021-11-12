import calculate from '../logic/calculate';

describe('Tests for buttons in calculate logic', () => {
  const operations = {
    total: 0,
    next: null,
    operation: null,
  };

  test('Test if AC button returns obj.next = 0 ', () => {
    expect(calculate(operations, 'AC')).toEqual({
      total: 0,
      next: 0,
      operation: null,
    });
  });

  test('Test if a number button returns obj.next = number ', () => {
    expect(calculate(operations, '1')).toEqual({ next: '1', total: null });
  });

  test('Test if a number button with an operation returns obj.next = number + operation ', () => {
    Object.assign(operations, calculate(operations, '1'));
    expect(operations).toEqual({ next: '1', total: null, operation: null });
  });

  test('Test if a number button with an operation returns obj.next = number + operation ', () => {
    Object.assign(operations, calculate(operations, '2'));
    expect(operations).toEqual({ next: '12', total: null, operation: null });
  });

  test('Test if a number button with an operation returns obj.next = number + operation ', () => {
    Object.assign(operations, calculate(operations, '3'));
    expect(operations).toEqual({ next: '123', total: null, operation: null });
  });

  test('Test if a number button with an operation returns obj.next = number + operation ', () => {
    Object.assign(operations, calculate(operations, '4'));
    expect(operations).toEqual({ next: '1234', total: null, operation: null });
  });

  test('Test if a number button with an operation returns obj.next = number + operation ', () => {
    Object.assign(operations, calculate(operations, '5'));
    expect(operations).toEqual({ next: '12345', total: null, operation: null });
  });

  test('Test if a number button with an operation returns obj.next = number + operation ', () => {
    Object.assign(operations, calculate(operations, '6'));
    expect(operations).toEqual({
      next: '123456',
      total: null,
      operation: null,
    });
  });

  test('Test if a number button with an operation returns obj.next = number + operation ', () => {
    Object.assign(operations, calculate(operations, '7'));
    expect(operations).toEqual({
      next: '1234567',
      total: null,
      operation: null,
    });
  });

  test('Test if a number button with an operation returns obj.next = number + operation ', () => {
    Object.assign(operations, calculate(operations, '8'));
    expect(operations).toEqual({
      next: '12345678',
      total: null,
      operation: null,
    });
  });

  test('Test if a number button with an operation returns obj.next = number + operation ', () => {
    Object.assign(operations, calculate(operations, '9'));
    expect(operations).toEqual({
      next: '123456789',
      total: null,
      operation: null,
    });
  });

  test('Test if a number button with an operation returns obj.next = number + operation ', () => {
    Object.assign(operations, calculate(operations, '0'));
    expect(operations).toEqual({
      next: '1234567890',
      total: null,
      operation: null,
    });
  });

  test('Test if an operation button returns the previous next value ', () => {
    Object.assign(operations, calculate(operations, '+'));
    expect(operations).toEqual({
      next: null,
      total: '1234567890',
      operation: '+',
    });
  });

  test('Test if a previous next value = 0 and buttonName = 0 returns an empty object ', () => {
    Object.assign(operations, { next: '0' });
    expect(calculate(operations, '0')).toEqual({});
  });

  test('Test if a . button returns 0. ', () => {
    Object.assign(operations, { next: null, total: null, operation: null });
    expect(calculate(operations, '.')).toEqual({ total: '0.' });
  });

  test('Test if a . button with a total value returns total. ', () => {
    Object.assign(operations, { next: null, total: '5', operation: null });
    expect(calculate(operations, '.')).toEqual({ total: '5.' });
  });

  test('Test if a . button with a operation value returns next = 0. ', () => {
    Object.assign(operations, { next: null, total: null, operation: '-' });
    expect(calculate(operations, '.')).toEqual({ next: '0.' });
  });

  test('Test if a . button with a next value returns next. ', () => {
    Object.assign(operations, { next: '2', total: null, operation: null });
    expect(calculate(operations, '.')).toEqual({
      next: '2.',
      total: null,
      operation: null,
    });
  });

  test('Test if a = button with a next and operation values returns result. ', () => {
    Object.assign(operations, { next: '2', total: 0, operation: '+' });
    expect(calculate(operations, '=')).toEqual({
      next: null,
      total: '2',
      operation: null,
    });
  });

  test('Test if a = button with a next and operation values returns result. ', () => {
    Object.assign(operations, { next: null, total: 0, operation: null });
    expect(calculate(operations, '=')).toEqual({});
  });

  test('Test if a +/- button with a next values returns negative. ', () => {
    Object.assign(operations, { next: '1', total: 0, operation: null });
    expect(calculate(operations, '+/-')).toEqual({
      next: '-1',
      total: 0,
      operation: null,
    });
  });

  test('Test if a +/- button with a total values returns negative. ', () => {
    Object.assign(operations, { next: null, total: '5', operation: null });
    expect(calculate(operations, '+/-')).toEqual({
      next: null,
      total: '-5',
      operation: null,
    });
  });

  test('Test if a +/- button with a negative next values returns negative. ', () => {
    Object.assign(operations, { next: '-1', total: 0, operation: null });
    expect(calculate(operations, '+/-')).toEqual({
      next: '1',
      total: 0,
      operation: null,
    });
  });

  test('Test if a +/- button with a negative total values returns negative. ', () => {
    Object.assign(operations, { next: null, total: '-5', operation: null });
    expect(calculate(operations, '+/-')).toEqual({
      next: null,
      total: '5',
      operation: null,
    });
  });

  test('Test if returns operation = button if an user clicks on operation after clicking in = ', () => {
    Object.assign(operations, { next: null, total: '5', operation: null });
    expect(calculate(operations, '+')).toEqual({
      next: null,
      total: '5',
      operation: '+',
    });
  });

  test('Test if returns operation = button if an user pressed an operation button and there is an existing operation ', () => {
    Object.assign(operations, { next: null, total: '5', operation: '+' });
    expect(calculate(operations, '-')).toEqual({
      next: null,
      total: '5',
      operation: '-',
    });
  });

  test('Test if returns operation = button if an user pressed an operation button and there is an existing operation ', () => {
    Object.assign(operations, { next: '2', total: '5', operation: '+' });
    expect(calculate(operations, '-')).toEqual({
      next: null,
      total: '7',
      operation: '-',
    });
  });

  test('Test if returns operation = button if an user pressed an operation button and there is an existing operation ', () => {
    Object.assign(operations, { next: null, total: 0, operation: null });
    expect(calculate(operations, '-')).toEqual({ operation: '-' });
  });
});
