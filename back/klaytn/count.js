0x9A095A1F5079C4A2835E13C2E44e3d8F8466018E


myToken.events
    .Transfer(
        {
            fromBlock: 0,
        },
        function(error, event) {
            console.log(event)
        }
    )
    .on('data', function(event) {
        console.log(`event at '.on('data')'`)
        console.log(event)
    })
    .on('error', console.error)


  //   setTimeout(async () => {
  //     const receipt = await myToken.transfer(caver.wallet.keyring.generate().address, 10, { from: keyring.address })
  //     console.log(`First Transfer Status from Receipt: ${receipt.status}`)
  
  //     setTimeout(async () => {
  //         const receipt = await myToken.transfer(caver.wallet.keyring.generate().address, 20, { from: keyring.address })
  //         console.log(`Second Transfer Status from Receipt: ${receipt.status}`)
  //     }, 1000)
  // }, 1000)