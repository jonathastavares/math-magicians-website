import operate from '../logic/operate';

describe('Testing operate', () => {
  const one = 6;
  const two = 3;
  const zero = 0;

  test('testing + logic', () => {
    expect(operate(one, two, '+')).toBe('9');
  });

  test('testing - logic', () => {
    expect(operate(one, two, '-')).toBe('3');
  });

  test('testing x logic', () => {
    expect(operate(one, two, 'x')).toBe('18');
  });

  test('testing ÷ logic', () => {
    expect(operate(one, two, '÷')).toBe('2');
  });

  test('testing divide by 0 logic', () => {
    expect(operate(one, zero, '÷')).toBe("Can't divide by 0.");
  });

  test('testing % logic', () => {
    expect(operate(one, two, '%')).toBe('0');
  });

  test('testing fail operation', () => {
    const operation = '/';
    expect(() => operate(one, two, operation)).toThrow(
      `Unknown operation '${operation}'`
    );
  });
});
