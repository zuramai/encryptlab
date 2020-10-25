<p align="center">
    <img src="encryptlab.png"></img>
</p>

<p align="center">
    A Free and Comprehensive Encrypt & Decrypt Tools with example code in Node.js.
</p>

<div align="center">

<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->

[![tag](https://img.shields.io/github/tag/fauzan121002/encryptlab.svg)](https://github.com/fauzan121002/encryptlab) [![CI](https://github.com/fauzan121002/encryptlab/workflows/Node.js%20CI/badge.svg)](https://github.com/fauzan121002/encryptlab/actions) [![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://github.com/fauzan121002/encryptlab/blob/master/LICENSE) [![Issue](https://img.shields.io/github/issues/fauzan121002/encryptlab)](https://img.shields.io/github/issues/fauzan121002/encryptlab) [![Forks](https://img.shields.io/github/forks/fauzan121002/encryptlab)](https://img.shields.io/github/forks/fauzan121002/encryptlab) [![Stars](https://img.shields.io/github/stars/fauzan121002/encryptlab)](https://img.shields.io/github/stars/fauzan121002/encryptlab)

</div>

The purpose of EncryptLab is to make it easier for developers to understand how each encryption works with tools and example code in Node.js.

### List of Available Encryption

* [Triple DES](#tripledes)

* RSA

* Blowfish

* Twofish

* AES

# API 
Here's open and free API that you can use for development.

### Triple DES {#3des}
- **Encrypt**
    
    **API URL:** `https://encryptlab.tech/3des/encrypt`  
    **Method:**  `POST`   
    
    **Request body:**
    | Name | Type | Description | 
    | ---- | ---- | ----------- |
    | data | String | The plain text you want to encrypt |
    | key | String | Encrypt secret key |
- **Decrypt**  

    **API URL:** `https://encryptlab.tech/3des/encrypt`    
    **Method:**  `POST`     
    
    **Request body:**
    | Name | Type | Description | 
    | ---- | ---- | ----------- |
    | data | String | The encrypted text you want to decrypt |
    | key | String | Secret key when you encrypt |
    
    
### RSA
- **Encrypt**
    
    **API URL:** `https://encryptlab.tech/rsa/encrypt`  
    **Method:**  `POST`   
    
    **Request body:**
    | Name | Type | Description | 
    | ---- | ---- | ----------- |
    | data | String | The plain text you want to encrypt |
    | key | String | The RSA public key you have |
- **Decrypt**  

    **API URL:** `https://encryptlab.tech/rsa/encrypt`    
    **Method:**  `POST`     
    
    **Request body:**
    | Name | Type | Description | 
    | ---- | ---- | ----------- |
    | data | String | The encrypted text you want to decrypt |
    | key | String | The RSA private key you have |
    
### Blowfish
- **Encrypt**
    
    **API URL:** `https://encryptlab.tech/blowfish/encrypt`  
    **Method:**  `POST`   
    
    **Request body:**
    | Name | Type | Description | 
    | ---- | ---- | ----------- |
    | data | String | The plain text you want to encrypt |
    | key | String | Encrypt secret key |
    | mode | String | Available values: `cfb,cbc,ctr,gcm,ofb` |
    | iv   | String |  Initialization Vector (max length: 8) |
- **Decrypt**  

    **API URL:** `https://encryptlab.tech/blowfish/encrypt`    
    **Method:**  `POST`     
    
    **Request body:**
    | Name | Type | Description | 
    | ---- | ---- | ----------- |
    | data | String | The encrypted text you want to decrypt |
    | key | String | Secret key when you encrypt |
    | mode | String | Available values: `cfb,cbc,ctr,gcm,ofb` |
    | iv   | String |  Initialization Vector (max length: 8) |
    
### Twofish
- **Encrypt**
    
    **API URL:** `https://encryptlab.tech/twofish/encrypt`  
    **Method:**  `POST`   
    
    **Request body:**
    | Name | Type | Description | 
    | ---- | ---- | ----------- |
    | data | String | The plain text you want to encrypt |
    | key | String | Encrypt secret key |
- **Decrypt**  

    **API URL:** `https://encryptlab.tech/twofish/encrypt`    
    **Method:**  `POST`     
    
    **Request body:**
    | Name | Type | Description | 
    | ---- | ---- | ----------- |
    | data | String | The encrypted text you want to decrypt |
    | key | String | Secret key when you encrypt |
    
### AES
- **Encrypt**
    
    **API URL:** `https://encryptlab.tech/aes/encrypt`  
    **Method:**  `POST`   
    
    **Request body:**
    | Name | Type | Description | 
    | ---- | ---- | ----------- |
    | data | String | The plain text you want to encrypt |
    | key | String | Encrypt secret key (max length: for 128 bit: 8, for 192 bit: 16, for 256 bit: 32) |
    | mode | String | Available values: `cfb,cbc,ctr,gcm,ofb` |
    | iv   | String |  Initialization Vector (max length: 8)  |
    | bit | Number | Number of bit | 
- **Decrypt**  

    **API URL:** `https://encryptlab.tech/aes/encrypt`    
    **Method:**  `POST`     
    
    **Request body:**
    | Name | Type | Description | 
    | ---- | ---- | ----------- |
    | data | String | The encrypted text you want to decrypt |
    | key | String | Secret key when you encrypt (max length: for 128 bit: 8, for 192 bit: 16, for 256 bit: 32) |
    | mode | String | Available values: `cfb,cbc,ctr,gcm,ofb` |
    | iv   | String |  Initialization Vector (max length: 8) |
    | bit | Number | Number of bit |
    
### Contributing

Want to make EncryptLab more perfect? Let's contribute and follow the [contribution guide](.github/CONTRIBUTING.md).

### License

EncryptLab is under the [MIT License](LICENSE.md)

[![ForTheBadge built-with-love](http://ForTheBadge.com/images/badges/built-with-love.svg)](https://gitHub.com/fauzan121002/)
