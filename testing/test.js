const { generateToken, verifyToken } = require('../auth/jwt');

describe('JWT Unit Testing', () => {

  test('Generate token harus menghasilkan string', () => {
    const user = { id: 1, username: 'Syifa' };
    const token = generateToken(user);
    expect(typeof token).toBe('string');
  });

  test('Verify token harus mengembalikan payload yang benar', () => {
    const user = { id: 2, username: 'lula' };
    const token = generateToken(user);
    const decoded = verifyToken(token);

    expect(decoded.id).toBe(2);
    expect(decoded.username).toBe('lula');
  });

  test('Verify token harus mengembalikan null untuk token tidak valid', () => {
    const fakeToken = "Token Palsu";
    const decoded = verifyToken(fakeToken);
    expect(decoded).toBeNull();
  });

});
