# Denarius Crypto
The cryptographic primitives (ECDSA and HMAC) implementations in this package have been reviewed by the BitPay engineering team. More audits and reviews are welcomed.

## Random
The `denariicore.crypto.Random` namespace contains a single function, named `getRandomBuffer(size)` that returns a `Buffer` instance with random bytes. It may not work depending on the engine that denariicore is running on (doesn't work with IE versions lesser than 11).

## BN
The `denariicore.crypto.BN` class contains a wrapper around [bn.js](https://github.com/indutny/bn.js), the bignum library used internally in denariicore.

## Point
The `denariicore.crypto.Point` class contains a wrapper around the class Point of [elliptic.js](https://github.com/indutny/elliptic), the elliptic curve library used internally in denariicore.

## Hash
The `denariicore.crypto.Hash` namespace contains a set of hashes and utilities. These are either the native `crypto` hash functions from `node.js` or their respective browser shims as provided by the `browserify` library.

## ECDSA
`denariicore.crypto.ECDSA` contains a pure JavaScript implementation of the elliptic curve DSA signature scheme based on [elliptic.js](https://github.com/indutny/elliptic).
