
import { useEffect } from 'react';

const Home = () => {
    let test;

    
    
    useEffect(()=>{
        const Caver = window.caver.klay
        test = new Caver.Contract(abi,'0x45F6221d779aBaC8356d0d181315199f9cAa0321', { gasPrice: '25000000000' })
    },[])

    const testplus = async() =>{
        const Caver = window.caver.klay
        test = new Caver.Contract(abi,'0x45F6221d779aBaC8356d0d181315199f9cAa0321', { gasPrice: '25000000000' })
        const result = await test.methods.plus().send({from: '0x8E37E7260eCe4bB95933fE9148E2Eb7a172B5f29',  gas: 1500000,})
        console.log(result)
    }

    return (
        <>
         
     <button onClick={()=>{testplus()}}>Plus</button>
        </>
    )
}

export default Home


const abi =[
    {
      "constant": true,
      "inputs": [],
      "name": "count",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "lastParticipant",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "message",
          "type": "string"
        },
        {
          "indexed": false,
          "name": "newCount",
          "type": "uint256"
        }
      ],
      "name": "Update",
      "type": "event"
    },
    {
      "constant": false,
      "inputs": [],
      "name": "plus",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [],
      "name": "minus",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ]