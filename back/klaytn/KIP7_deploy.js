const config = require('./config');
const accessKeyId = config.accessKeyId;
const secretAccessKey = config.secretAccessKey;
const authorization = config.authorization;
const caver = config.caver;
const developerKey = config.developerKey;


const keyring = caver.wallet.keyring.createFromPrivateKey(developerKey);
if (!caver.wallet.getKeyring(keyring.address)) {
  const singleKeyRing = caver.wallet.keyring.createFromPrivateKey(
    developerKey
  );
  caver.wallet.add(singleKeyRing);
}


const KIP7token = async() => {

const kip7 = await caver.kct.kip7.deploy(
  {
    name: 'Perro',
    symbol: 'PRR',
    decimals: 18,
    initialSupply: '80000000000000000000000000',
  },
  keyring.address
);
console.log(`Deployed KIP-7 token contract address: ${kip7.options.address}`);

// console.log(`Token name: ${await kip7.name()}`);
// console.log(`Token symbol: ${await kip7.symbol()}`);
// console.log(`Token decimals: ${await kip7.decimals()}`);
// console.log(`Token totalSupply: ${await kip7.totalSupply()}`);


}

const tranferAll = async() =>{
  const kip7Instance = new caver.kct.kip7('0x4f6BA898732BF37d9df22F3e2dDe496bB7654f01')
  
  const opts = { from: keyring.address }
  //보낼 account 주소를 입력 시키기
  const recipientAddress = '0xC04a226684ED39C0341071af53f34E98aFA06156'
  const value = '80000000000000000000000000';
  const receipt = await kip7Instance.transfer(recipientAddress,value, opts)
  console.log(receipt)
}

// KIP7token();
// tranferAll();


const transferKlay = async()=>{
  
  const lt = await caver.transaction.legacyTransaction.create({
    to: '0xC04a226684ED39C0341071af53f34E98aFA06156',
    from:  keyring.address,
    value: caver.utils.toPeb(1, 'KLAY'),
    gas: 25000,
})

  const signed = await caver.wallet.sign(keyring.address,lt)
  console.log(signed)
  const receipt = await caver.rpc.klay.sendRawTransaction(signed);
  console.log(receipt)

console.log(receipt)
}



// transferKlay()

const x = '0xde0b6b3a7640000'
const base = '0xde0b6b3a7640000'
const y  ='1000000000000000000'
console.log(Number(x)/Number(y));





