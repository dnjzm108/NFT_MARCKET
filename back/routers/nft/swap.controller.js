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
  caver.wallet.keyring.createFromPrivateKey('0x7fd74d3f75fee42dc2a3f96096a86c2c7e021b292c4c6719c318691422c8da41')
)

console.log(deployer)

let KIP7token_swap = async () => {

  const kip7 = await caver.kct.kip7.deploy(
    {
      name: 'perroToken',
      symbol: 'PRR',
      decimals: 18,
      initialSupply: '10000000000000000000000',
    },
    deployer.address
  );
  console.log(`Deployed KIP-7 token contract address: ${kip7.options.address}`);

  console.log(`Token name: ${await kip7.name()}`);
  console.log(`Token symbol: ${await kip7.symbol()}`);
  console.log(`Token decimals: ${await kip7.decimals()}`);
  console.log(`Token totalSupply: ${await kip7.totalSupply()}`);


  const kip7Instance = new caver.kct.kip7('0xAdA4834Ca37A6a3f23a9A992809c30A21CB4FFc6')
  kip7Instance.name().then(console.log)
  const opts = { from: keyring.address }
  //보낼 account 주소를 입력 시키기
  const recipientAddress = '0x544C995914d37f4300b375073A9EFCABb8e6d881'
  const value = 100000000000000000000
  const receipt = await kip7Instance.transfer(recipientAddress, value, opts)
  console.log(receipt)
}




module.exports = {
  KIP7token_swap
}