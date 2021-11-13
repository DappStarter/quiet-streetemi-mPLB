require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'imitate prize flock tribe strong riot sister protect inner clock fog gather'; 
let testAccounts = [
"0xcecff19d881d1204db0eca538642652a5718ca4fd73556d121a69a40e7478ea9",
"0xb336f56a1af97939fd4fd9ecee1f56844ce0db0a4ec438522a1e766e4a39e960",
"0x2d0e162a98e38658feb1002467f5cc02dbc1392a3ba6b58ebd7fa80d215215b2",
"0xe29b4c4b7a04122fe6f336fa096fab172788e1c09902e3ef6315464cc411a47e",
"0xe007a471847b9c78a57dfb6173d2b06f3709b3719434162185825b033f0cab2c",
"0x847cfdc47d62c289169b1ad1817fc5f8495257fc88458c962bbbbfce98cc85eb",
"0x42740426134302ece7de044c99964142d4871094859bc8b7a84f45abc9a4afcc",
"0x73235cf2cf9cff7729fc910d152b05c1a8f6c23ad3aa6118aeb3771e4d7a97dd",
"0x622bfb4dbe5b80e33d61f1e80065d9e12f6074cd763752aa03a9372f0554c9c0",
"0xb56d63c2ad45c778200bfaaaf869e67976f39ce2749f9c0eda6c61cf6dad02ed"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

