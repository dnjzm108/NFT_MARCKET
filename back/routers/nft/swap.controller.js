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


const developerPrivateKey = '0x7fd74d3f75fee42dc2a3f96096a86c2c7e021b292c4c6719c318691422c8da41'
const caver = new Caver('https://api.baobab.klaytn.net:8651/', option)
const deployer = caver.wallet.add(
  caver.wallet.keyring.createFromPrivateKey(developerPrivateKey)
)

// console.log(deployer)

let KIP7token_swap = async (req,res) => {
  const {recipientAddress,perroAmount} = req.body; 
  console.log(req.body)

  // const kip7 = await caver.kct.kip7.deploy(
  //   {
  //     name: 'perroToken',
  //     symbol: 'PRR',
  //     decimals: 18,
  //     initialSupply: '10000000000000000000000',
  //   },
  //   deployer.address
  // );
  // console.log(`Deployed KIP-7 token contract address: ${kip7.options.address}`);

  // console.log(`Token name: ${await kip7.name()}`);
  // console.log(`Token symbol: ${await kip7.symbol()}`);
  // console.log(`Token decimals: ${await kip7.decimals()}`);
  // console.log(`Token totalSupply: ${await kip7.totalSupply()}`);
  // console.log(kip7);


  const kip7Instance = new caver.kct.kip7('0x00950113B6c29D7bd18aE1f19B9d9654e1d03229')
  const keyring = caver.wallet.keyring.createFromPrivateKey('0x7fd74d3f75fee42dc2a3f96096a86c2c7e021b292c4c6719c318691422c8da41')
  const opts = { from: keyring.address }
  //보낼 account 주소를 입력 시키기
  const _recipientAddress = recipientAddress; 
  const value = 100000;
  // const allow = await kip7Instance.allowance('0x544c995914d37f4300b375073a9efcabb8e6d881', _recipientAddress);
  // console.log('alllowwwwaaaancccee'+allow)
  // const approve = await kip7Instance.approve(_recipientAddress, value, opts)
  // console.log(approve);
 console.log('=====================================================================================')

  const receipt = await kip7Instance.transferFrom('0x544C995914d37f4300b375073A9EFCABb8e6d881',_recipientAddress, value, opts)
  console.log('value: '+receipt.value); 
  console.log(receipt); 
  const data = {
    success:true,
    receipt:receipt,
    amount:value,
  }
  
  res.json(data)
}




module.exports = {
  KIP7token_swap
}

