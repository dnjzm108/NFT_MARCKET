import { Delivery_Address_Component } from '../../component/Delivery_Address'
import { Invoice } from '../../component/Invoice'
import  Footter  from '../../component/Footter'
import Release from '../../container/release'
import Notice_Delivery from '../../component/Notice_Delivery'
import  Seller_Apply  from '../../component/Seller_apply'
import Login from '../../component/Login'
import { useRouter } from 'next/router'

const Test = () => {
    const router = useRouter()
    const { id } = router.query
    return (
        <>
        {id == 1 ?   <Delivery_Address_Component/>:''}
        {id == 2 ?   <Invoice/>:''}
        {id == 3 ?    <Notice_Delivery/>:''}
        {id == 4 ?   <Seller_Apply/>:''}
        </>
    )

}
export default Test

