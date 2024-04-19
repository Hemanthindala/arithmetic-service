const {add} = require('../arithmetica');
test('2+3 is equal to 5',() => {
    expect(add(2,3)).toBe(5);
});
test('500+400 is euqla to 900',() => {
    expect(add(500,400)).toBe(900);
});
test('3+4 s equal to 7',() => {
    expect(add(3,4)).toBe(7);
});