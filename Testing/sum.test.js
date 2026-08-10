const sum=require('./sum');
test('add 1000+2900 equal to 3900',()=>{
    expect(sum(1000,2900)).toBe(3900)
})
test('add 10+29 equal to 39',()=>{
    expect(sum(10,29)).toBe(39)
})
test('add 980+900 equal to 3900',()=>{
    expect(sum(980,900)).toBe(1880)
})