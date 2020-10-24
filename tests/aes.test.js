const { aes } = require("../src");

let encrypted256 = aes.encrypt("asdfgh","256","cbc",Buffer.from("5a1920bf80b6215560d3b5ad5499328w"),Buffer.from("55d4a850c95af4fd"));
let encrypted192 = aes.encrypt("asdfgh","192","cbc",Buffer.from("c72e7eb33ea11d99a57d5f3e"),Buffer.from("55d4a850c95af4fd"));
let encrypted128 = aes.encrypt("asdfgh","128","cbc",Buffer.from("a18e5283b68c8d8e"),Buffer.from("55d4a850c95af4fd"));

let decrypted256 = aes.decrypt("FMuIBKYrU6Md+GWtDLg8Kw==","256","cbc",Buffer.from("5a1920bf80b6215560d3b5ad5499328w"),Buffer.from("55d4a850c95af4fd"));
let decrypted192 = aes.decrypt("27Z4+sKdu8nR6Irja5Z9LQ==","192","cbc",Buffer.from("c72e7eb33ea11d99a57d5f3e"),Buffer.from("55d4a850c95af4fd"));
let decrypted128 = aes.decrypt("71z4F+sKrEVeZTH/wvHwvw==","128","cbc",Buffer.from("a18e5283b68c8d8e"),Buffer.from("55d4a850c95af4fd"));

test('is 256 bit encrypt work?', () => {
    expect(encrypted256).toBeTruthy();
  });
  
test('is 256 bit decrypt work?', () => {
    expect(decrypted256).toBeTruthy();
});

test('is 192 bit encrypt work?', () => {
    expect(encrypted192).toBeTruthy();
  });
  
test('is 192 bit decrypt work?', () => {
    expect(decrypted192).toBeTruthy();
});

test('is 128 bit encrypt work?', () => {
    expect(encrypted128).toBeTruthy();
  });
  
test('is 128 bit decrypt work?', () => {
    expect(decrypted128).toBeTruthy();
});

