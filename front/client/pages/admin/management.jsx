import Admin_Mnagement_Component from '../../component/Admin_Management'
import { useSelector } from 'react-redux'
import { useEffect } from 'react';
import Router from "next/router"

const Management = () => {
    const state_data = useSelector(state => state.admin)
    const {IsLogin} = state_data

    useEffect(()=>{
        if(IsLogin == false){
            Router.push('/admin/login')
        }
    },[IsLogin])

    return (
        <>
           <Admin_Mnagement_Component/>
        </>

    )
}

export default Management

