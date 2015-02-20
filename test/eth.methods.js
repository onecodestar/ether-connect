var assert = require('assert');
var web3 = require('../index.js');
var u = require('./test.utils.js');

describe('web3', function() {
    describe('eth', function() {
        u.methodExists(web3.eth, 'getBalance');
        u.methodExists(web3.eth, 'getState');
        u.methodExists(web3.eth, 'getStorage');
        u.methodExists(web3.eth, 'getTransactionCount');
        u.methodExists(web3.eth, 'getCode');
        u.methodExists(web3.eth, 'sendTransaction');
        u.methodExists(web3.eth, 'call');
        u.methodExists(web3.eth, 'getBlock');
        u.methodExists(web3.eth, 'getTransaction');
        u.methodExists(web3.eth, 'getUncle');
        u.methodExists(web3.eth, 'getCompilers');
        u.methodExists(web3.eth.compile, 'lll');
        u.methodExists(web3.eth.compile, 'solidity');
        u.methodExists(web3.eth.compile, 'serpent');
        u.methodExists(web3.eth, 'logs');
        u.methodExists(web3.eth, 'getBlockTransactionCount');
        u.methodExists(web3.eth, 'getBlockUncleCount');

        u.propertyExists(web3.eth, 'coinbase');
        u.propertyExists(web3.eth, 'listening');
        u.propertyExists(web3.eth, 'mining');
        u.propertyExists(web3.eth, 'gasPrice');
        u.propertyExists(web3.eth, 'accounts');
        u.propertyExists(web3.eth, 'peerCount');
        u.propertyExists(web3.eth, 'defaultBlock');
        u.propertyExists(web3.eth, 'blockNumber');
    });
});


