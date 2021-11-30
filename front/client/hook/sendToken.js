
export const sendToken = async (price,logout) => {

    if (window.klaytn.selectedAddress == undefined){
        logout()
        alert('로그인을 진행해주세요')
    } else {

        let standard = '1000000000000000000'
        let send_Token = `${Number(price) * Number(standard)}`
        const kip7 = new window.caver.klay.KIP7(process.env.NEXT_PUBLIC_TOKEN)

        const exchangeToken = await kip7.transfer(
            process.env.NEXT_PUBLIC_TOKEN,
            send_Token,
            {
                from: window.klaytn.selectedAddress
            }).catch(() => {
                alert('취소 되었습니다.')
                return false
            })
        if (exchangeToken !== false) {
            let { from, to, value } = exchangeToken.events.Transfer.returnValues;
            let Amount = `${Number(value) / Number(standard)}`
            const data = {
                paider: from,
                price: Amount,
            }
            return data
        }
    }
}