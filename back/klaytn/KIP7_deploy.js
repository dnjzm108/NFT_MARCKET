require('dotenv').config();

const accessKeyId = 'KASKZ307DKEQMVVDPFCFWNMR';
const secretAccessKey = 'Z0w8qm_a70Vh6vNal9oUO6gOn19FsXVszLEhDHaH'; 
const authorization = "Basic " + Buffer.from(accessKeyId + ":" + secretAccessKey).toString("base64");
const developerKey = '0x7fd74d3f75fee42dc2a3f96096a86c2c7e021b292c4c6719c318691422c8da41';

const option = {
  headers: [
    {
      name: "Authorization",
      value: authorization,
    },
    { name: "x-krn", value: "krn:1001:node" },
  ],
};

const Caver = require("caver-js");
const caver = new Caver(
  new Caver.providers.HttpProvider(
    "https://node-api.klaytnapi.com/v1/klaytn",
    option
  )
);

;
const keyring = caver.wallet.keyring.createFromPrivateKey(developerKey);

if (!caver.wallet.getKeyring(keyring.address)) {
  const singleKeyRing = caver.wallet.keyring.createFromPrivateKey(
    developerKey
  );
  caver.wallet.add(singleKeyRing);
}

let KIP7token = async() => {

const kip7 = await caver.kct.kip7.deploy(
  {
    name: 'Perro',
    symbol: 'PRR',
    decimals: 18,
    initialSupply: '100000000000000000000',
  },
  keyring.address
);
console.log(`Deployed KIP-7 token contract address: ${kip7.options.address}`);

// console.log(`Token name: ${await kip7.name()}`);
// console.log(`Token symbol: ${await kip7.symbol()}`);
// console.log(`Token decimals: ${await kip7.decimals()}`);
// console.log(`Token totalSupply: ${await kip7.totalSupply()}`);

// const kip7Instance = new caver.kct.kip7('0x9700a87945766F28B461ddB4f4097Cb69270fa94')
//   kip7Instance.name().then(console.log)
//   const opts = { from: caver.wallet.keyring.createFromPrivateKey('0x496af4eb7999023ae32f53556b4528e8d1b325d850481cc95c995223961822fd').address }
//   //보낼 account 주소를 입력 시키기
//   const recipientAddress = '0x544c995914d37f4300b375073a9efcabb8e6d881'
//   const value = '5000000000000000000';
//   const receipt = await kip7Instance.transfer(recipientAddress,value, opts)
//   console.log(receipt)
}

// KIP7token();c


