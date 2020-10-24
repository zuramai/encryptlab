const { blowfish } = require("../src");

const enc_key = '6a19850e0e5df8ca';
const iv = 'eb581c77';

let encrypted = blowfish.encrypt("Hello","cbc",enc_key,iv);
let decrypted = blowfish.decrypt("4ptbdU6ZxE4=","cbc",enc_key,iv);

test('is encrypt work?', () => {
    expect(encrypted).toBeTruthy();
  });
  
test('is decrypt work?', () => {
    expect(decrypted).toBeTruthy();
});