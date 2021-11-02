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


const deployTest = async ()=>{
  const kip17 = await caver.kct.kip17.deploy(
    {
      name: 'TEST',
      symbol: 'TDP'
    },
    keyring.address
  );
  console.log(kip17.options.address);
}

// deployTest();

export const NFT_ADDRESS = '0xe7aB6CD5318F26f1610c21Fa49742451E51789B3'





