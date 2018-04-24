'use strict';

var denariicore = module.exports;

// module information
denariicore.version = 'v' + require('./package.json').version;
denariicore.versionGuard = function(version) {
  if (version !== undefined) {
    var message = 'More than one instance of denariicore-lib found. ' +
      'Please make sure to require denariicore-lib and check that submodules do' +
      ' not also include their own denariicore-lib dependency.';
    throw new Error(message);
  }
};
denariicore.versionGuard(global._denariicore);
global._denariicore = denariicore.version;

// crypto
denariicore.crypto = {};
denariicore.crypto.BN = require('./lib/crypto/bn');
denariicore.crypto.ECDSA = require('./lib/crypto/ecdsa');
denariicore.crypto.Hash = require('./lib/crypto/hash');
denariicore.crypto.Random = require('./lib/crypto/random');
denariicore.crypto.Point = require('./lib/crypto/point');
denariicore.crypto.Signature = require('./lib/crypto/signature');

// encoding
denariicore.encoding = {};
denariicore.encoding.Base58 = require('./lib/encoding/base58');
denariicore.encoding.Base58Check = require('./lib/encoding/base58check');
denariicore.encoding.BufferReader = require('./lib/encoding/bufferreader');
denariicore.encoding.BufferWriter = require('./lib/encoding/bufferwriter');
denariicore.encoding.Varint = require('./lib/encoding/varint');

// utilities
denariicore.util = {};
denariicore.util.buffer = require('./lib/util/buffer');
denariicore.util.js = require('./lib/util/js');
denariicore.util.preconditions = require('./lib/util/preconditions');

// errors thrown by the library
denariicore.errors = require('./lib/errors');

// main denarius library
denariicore.Address = require('./lib/address');
denariicore.Block = require('./lib/block');
denariicore.MerkleBlock = require('./lib/block/merkleblock');
denariicore.BlockHeader = require('./lib/block/blockheader');
denariicore.HDPrivateKey = require('./lib/hdprivatekey.js');
denariicore.HDPublicKey = require('./lib/hdpublickey.js');
denariicore.Networks = require('./lib/networks');
denariicore.Opcode = require('./lib/opcode');
denariicore.PrivateKey = require('./lib/privatekey');
denariicore.PublicKey = require('./lib/publickey');
denariicore.Script = require('./lib/script');
denariicore.Transaction = require('./lib/transaction');
denariicore.URI = require('./lib/uri');
denariicore.Unit = require('./lib/unit');

// dependencies, subject to change
denariicore.deps = {};
denariicore.deps.bnjs = require('bn.js');
denariicore.deps.bs58 = require('bs58');
denariicore.deps.Buffer = Buffer;
denariicore.deps.elliptic = require('elliptic');
denariicore.deps._ = require('lodash');

// Internal usage, exposed for testing/advanced tweaking
denariicore.Transaction.sighash = require('./lib/transaction/sighash');
