const { rsa } = require("../src");

const publicKey = `
-----BEGIN PUBLIC KEY-----
MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCZroQ+OtvMCral8C2nu259kZsz
QT5jHS50bGvoFNyqdVtMMztMgEmBci1KtQvlNQMAMQaEGppNyHt0DyfWy+ZvQ2f6
t89haKtwqaY/aCtju+zz5udsrgYT5OizduZXMzFSm/qUBaslsLWzxHXr5dsBHGiY
ikcgfKlThHpPVcY3fwIDAQAB
-----END PUBLIC KEY-----
`; //Generated in https://travistidwell.com/jsencrypt/demo/
const privateKey = `
-----BEGIN RSA PRIVATE KEY-----
MIICXAIBAAKBgQCZroQ+OtvMCral8C2nu259kZszQT5jHS50bGvoFNyqdVtMMztM
gEmBci1KtQvlNQMAMQaEGppNyHt0DyfWy+ZvQ2f6t89haKtwqaY/aCtju+zz5uds
rgYT5OizduZXMzFSm/qUBaslsLWzxHXr5dsBHGiYikcgfKlThHpPVcY3fwIDAQAB
AoGAE+PUVcGEZPoV/ZACOK03daT8szuEeYtzUboelSDuFlmuAUS4LgSEfu5qEjsw
WO/tfX7a2woeYmbKI5E6lMA7CIP1vbR/Hdx7lE4BFCs6LVwhuIpI1WwYK7RHbTDE
kM74rEYTBw1Hc4U49N5DG/4LUDP+uOstgQjyqTHdCMplnBECQQDU/aYDQpUPlf5W
a0N1GInWw8k9ka6XgPvBIEIL4l+E+Kbrugfw6Nfz3ni6lzIdJHqe8FJbirpb2XEM
Qvy3q1XTAkEAuLbxGVTkJKUlvKSdSngP+KAfQK8mL7QfjQWq0UcqGQT2Vcn1xIVu
+jc0ivzHZCtCmjwvbb4FtvG+ejOABx/wJQJABn14Ko9D1Ya/ikiYdJ/7y0SKBEtF
I661fSwLdys9t+KPy40OouOlePPlf+INj9/FsMQn7kwq45Obo0EDTGF3KwJBAKti
Gkt9p3yUunHQbpx0z6TItJaorA6g2pFXC8nHdLjoEMNCcsUXZQPGCvtWVI6NUOuY
Ig15vQWkQS5S8Fwr9v0CQH00TkBdpx497mrJhKRpBbDTRM2e0Kz1ZxEuUHfIREyg
CV8U7D8Uq0jNPUp8b4gNvOBcWMf/7hz5XdqEzdoEI0I=
-----END RSA PRIVATE KEY-----
`; //Generated in https://travistidwell.com/jsencrypt/demo/

let encrypted = rsa.encrypt("Hello World",publicKey);
let decrypted = rsa.decrypt(encrypted,privateKey);

test('is encrypt work?', () => {
    expect(encrypted).toBeTruthy();
  });
  
test('is decrypt work?', () => {
    expect(decrypted).toBeTruthy();
});