const {send_Token,send_Klay} = require('../../klaytn/KIP7_deploy')

const authorization = "Basic " + Buffer.from("KASK11R9S7LO3L180GXU0TKN" + ":" + "C2FZEXjlPlR7_V7-aa2r7mIUtnA04UUdSWnPchL8").toString("base64")

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

let KIP7Token_transfer = async () => {

  // 해당 토큰으로 구매하기

  const keyring = caver.wallet.keyring.createFromPrivateKey(
    "0x637e352fed89ae10d1875e96ef19b9f328f1e4dc58572a64cc46351bfac53e0c"
  );
  // wallet에 keyring이 추가되지 않은 경우에만 keyring을 추가합니다.
  // 자기 것의 개인키를 keyring 시키고
  if (!caver.wallet.getKeyring(keyring.address)) {
    const singleKeyRing = caver.wallet.keyring.createFromPrivateKey(
      "0x637e352fed89ae10d1875e96ef19b9f328f1e4dc58572a64cc46351bfac53e0c"
    );
    caver.wallet.add(singleKeyRing);
  }

  const kip7Instance = new caver.kct.kip7('0x04feb1c6d54c38c4e0c5af14d11e12f3eb2ad32e')
  kip7Instance.name().then(console.log)
  const opts = { from: keyring.address }
  //보낼 account 주소를 입력 시키기
  const recipientAddress = '0x544C995914d37f4300b375073A9EFCABb8e6d881'
  const value = 1000000000
  const receipt = await kip7Instance.transfer(recipientAddress, value, opts)
  console.log(receipt)



  // 구매 완료 후 nft transfer

  let senderPrivateKey = "0x637e352fed89ae10d1875e96ef19b9f328f1e4dc58572a64cc46351bfac53e0c";
  const senderKeyring = caver.wallet.keyring.createFromPrivateKey(
    senderPrivateKey
  );
  // wallet에 keyring이 추가되지 않은 경우에만 keyring을 추가합니다.
  if (!caver.wallet.getKeyring(senderKeyring.address)) {
    const singleKeyRing = caver.wallet.keyring.createFromPrivateKey(
      senderPrivateKey
    );
    caver.wallet.add(singleKeyRing);
  }

    let contractAddr = "0xe7aB6CD5318F26f1610c21Fa49742451E51789B3";

        const KIP_17 = new caver.kct.kip17(contractAddr);

        transferResult = await KIP_17.transferFrom(
          senderKeyring.address,
          "0x544C995914d37f4300b375073A9EFCABb8e6d881",
          // 5511296877575945, 토큰 ID값
          { from: senderKeyring.address, gas: 200000 }
        );
        console.log(transferResult);
    

}


const creator = "0x637e352fed89ae10d1875e96ef19b9f328f1e4dc58572a64cc46351bfac53e0c"


let KIP7token_swap = async (req,res) => {
  let {recipientAddress,perroAmount,chage} = req.body

  if(chage){
    //클레이를 토큰으로 바꿀때
    let result = await send_Token(recipientAddress,perroAmount)
    console.log(result);
  }else if(!chage){
    //토큰을 클레이로 바꿀때
    let result =await send_Klay(recipientAddress,perroAmount)
    console.log(result);
  }
  
}


module.exports = {
  KIP7token_swap,
  KIP7Token_transfer
}

