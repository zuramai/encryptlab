const { twofish } = require("../src");

let encrypted = twofish.encrypt("encrypt","xYgHWUshjK");
let decrypted = twofish.decrypt(encrypted,"xYgHWUshjK");

test('is encrypt work?', () => {
    expect(encrypted).toBeTruthy();
  });
  
test('is decrypt work?', () => {
    expect(decrypted).toBeTruthy();
});