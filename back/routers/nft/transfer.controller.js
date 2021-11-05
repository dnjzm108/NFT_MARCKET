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
  caver.wallet.keyring.createFromPrivateKey('0x496af4eb7999023ae32f53556b4528e8d1b325d850481cc95c995223961822fd')
)

let KIP7token = async() => {

const kip7 = await caver.kct.kip7.deploy(
  {
    name: 'Perro',
    symbol: 'PRR',
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

const kip7Instance = new caver.kct.kip7('0x9700a87945766F28B461ddB4f4097Cb69270fa94')
  kip7Instance.name().then(console.log)
  const opts = { from: keyring.address }
  //보낼 account 주소를 입력 시키기
  const recipientAddress = '0xbf39AC77B62577D4c8e9c16F278B1C05E87D17E5'
  const value = 100000000000000000000
  const receipt = await kip7Instance.transfer(recipientAddress, value, opts)
  console.log(receipt)

}

// KIP7token();

  //https://forum.klaytn.com/t/kip7/273/2
// export const KIPaddress = "0x9700a87945766F28B461ddB4f4097Cb69270fa94"
// Token name: Test
// Token symbol: td
// Token decimals: 18
// Token totalSupply: 100000000000000000000

module.exports = {
    KIP7token
}
