require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom problem brown turtle chaos rare remember clump grace opera flower gas'; 
let testAccounts = [
"0x655fa7e022287f1a6e6aa364c9a451103e8f1b199ad273ee38b698c37c14de65",
"0x28744ec51f0f1fa7a19d7268de3a0ecb410ea878c849716030694d6b5dd5a810",
"0xdadc91c43af52ec98a0a72a3020f9083a029bc83862ef073086c56e7a52d5aa7",
"0x8f2e8d2f3e0495b323cd66cb5ad0bae0bdef36db769b77b7e1accf9024109903",
"0xe25f4003974565318127e85d06225a16e9b5d8d232182e555add748d26ce935a",
"0xa458be8983ebdadf1ffd848b3110a2862514c5eccb232d4336ecdec99ca75789",
"0x511732c3e812d6390c9c249b08d015859d7bc838046505779eecaa8401c5fe59",
"0xf3d3fc0a6c2df7bcd41fe9b8f0e13f8e2ef8df7623dd6bd0eef79871d82b1d27",
"0xec49463795821bd1c3165cc89bdcefc7b48dbdb27be9c5c1d423a76fdba01bc3",
"0x21fe672635aab86c77426727a3692051683cd663b21a13bd21ff3a24c3684137"
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

