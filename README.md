Denariicore Library
=======

[![NPM Package](https://img.shields.io/npm/v/denariicore-lib.svg?style=flat-square)](https://www.npmjs.org/package/denariicore-lib)
[![Build Status](https://img.shields.io/travis/carsenk/denariicore-lib.svg?branch=master&style=flat-square)](https://travis-ci.org/carsenk/denariicore-lib)
[![Coverage Status](https://img.shields.io/coveralls/carsenk/denariicore-lib.svg?style=flat-square)](https://coveralls.io/r/carsenk/denariicore-lib)

A pure and powerful JavaScript Denarius library.

## Principles

Denarius is a powerful new peer-to-peer platform for the next generation of financial technology. The decentralized nature of the Denarius network allows for highly resilient denarius infrastructure, and the developer community needs reliable, open-source tools to implement denarius apps and services.

## Get Started

```
npm install denariicore-lib
```

```
bower install denariicore-lib
```

## Documentation

The complete docs are hosted here: [denariicore documentation](http://denariicore.io/guide/). There's also a [denariicore API reference](http://denariicore.io/api/) available generated from the JSDocs of the project, where you'll find low-level details on each denariicore utility.

- [Read the Developer Guide](http://denariicore.io/guide/)
- [Read the API Reference](http://denariicore.io/api/)

To get community assistance and ask for help with implementation questions, please use our [community forums](https://forum.denariicore.io/).

## Examples

* [Generate a random address](https://github.com/carsenk/denariicore-lib/blob/master/docs/examples.md#generate-a-random-address)
* [Generate a address from a SHA256 hash](https://github.com/carsenk/denariicore-lib/blob/master/docs/examples.md#generate-a-address-from-a-sha256-hash)
* [Import an address via WIF](https://github.com/carsenk/denariicore-lib/blob/master/docs/examples.md#import-an-address-via-wif)
* [Create a Transaction](https://github.com/carsenk/denariicore-lib/blob/master/docs/examples.md#create-a-transaction)
* [Sign a Denarius message](https://github.com/carsenk/denariicore-lib/blob/master/docs/examples.md#sign-a-denarius-message)
* [Verify a Denarius message](https://github.com/carsenk/denariicore-lib/blob/master/docs/examples.md#verify-a-denarius-message)
* [Create an OP RETURN transaction](https://github.com/carsenk/denariicore-lib/blob/master/docs/examples.md#create-an-op-return-transaction)
* [Create a 2-of-3 multisig P2SH address](https://github.com/carsenk/denariicore-lib/blob/master/docs/examples.md#create-a-2-of-3-multisig-p2sh-address)
* [Spend from a 2-of-2 multisig P2SH address](https://github.com/carsenk/denariicore-lib/blob/master/docs/examples.md#spend-from-a-2-of-2-multisig-p2sh-address)


## Security

We're using Denariicore in production, as are [many others](http://denariicore.io#projects), but please use common sense when doing anything related to finances! We take no responsibility for your implementation decisions.

If you find a security issue, please email admin@denarius.io

## Contributing

Please send pull requests for bug fixes, code optimization, and ideas for improvement. For more information on how to contribute, please refer to our [CONTRIBUTING](https://github.com/carsenk/denariicore-lib/blob/master/CONTRIBUTING.md) file.

## Building the Browser Bundle

To build a denariicore-lib full bundle for the browser:

```sh
gulp browser
```

This will generate files named `denariicore-lib.js` and `denariicore-lib.min.js`.

## Development & Tests

```sh
git clone https://github.com/carsenk/denariicore-lib
cd denariicore-lib
npm install
```

Run all the tests:

```sh
gulp test
```

You can also run just the Node.js tests with `gulp test:node`, just the browser tests with `gulp test:browser`
or create a test coverage report (you can open `coverage/lcov-report/index.html` to visualize it) with `gulp coverage`.

## License

Code released under [the MIT license](https://github.com/carsenk/denariicore-lib/blob/master/LICENSE).

Copyright 2013-2017 BitPay, Inc. - Modified for Denarius (denariicore) by Carsen Klock
