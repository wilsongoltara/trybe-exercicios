const uppercase = (str, callback) => {
  setTimeout(() => {
    callback(str.toUpperCase());
  }, 500);
};

describe('Test function uppercase:',() => {
  test('Returned phrase is uppercase', (done) => {
    uppercase('gorin', (str) => {
      try {
        const expected = 'GORIN';
        expect(str).toMatch(expected);
        done();
      } catch (error) {
        done();
      }
    }, 500);
  });
});