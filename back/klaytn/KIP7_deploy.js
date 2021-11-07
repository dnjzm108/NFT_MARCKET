const authorization = "Basic " + Buffer.from("KASK11R9S7LO3L180GXU0TKN" + ":" + "C2FZEXjlPlR7_V7-aa2r7mIUtnA04UUdSWnPchL8").toString("base64")

const option = {
  headers: [
    {
      name: "Authorization",
      value: authorization,
    },
    { name: 'x-chain-id', value: '1001:node' },
  ],
};

const Caver = require("caver-js");
// const caver = new Caver(
//   new Caver.providers.HttpProvider(
//     "https://node-api.klaytnapi.com/v1/klaytn",
//     option
//   )
// );


// caver-js v1.5.0 이상 버전
const caver = new Caver('https://api.baobab.klaytn.net:8651/', option)
const deployer = caver.wallet.add(
  caver.wallet.keyring.createFromPrivateKey('0x0dec2557893f73c40f1c513f65562f4ba1b046ae83a3de4e37624168fcf36554')
)

let KIP7token = async() => {

const kip7 = await caver.kct.kip7.deploy(
  {
    name: 'Test',
    symbol: 'td',
    decimals: 18,
    initialSupply: '100000000000000000000',
  },
  deployer.address
);
console.log(`Deployed KIP-7 token contract address: ${kip7.options.address}`);

console.log(`Token name: ${await kip7.name()}`);
console.log(`Token symbol: ${await kip7.symbol()}`);
console.log(`Token decimals: ${await kip7.decimals()}`);
console.log(`Token totalSupply: ${await kip7.totalSupply()}`);

}

// KIP7token();

  //https://forum.klaytn.com/t/kip7/273/2
export const KIPaddress = "0x91D7AF72BDE2C731E56810f38dd24A2E58b561f8"
// Token name: Test
// Token symbol: td
// Token decimals: 18
// Token totalSupply: 100000000000000000000