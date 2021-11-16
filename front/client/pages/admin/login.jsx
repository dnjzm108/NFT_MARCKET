import Admin_Login_Component from "../../component/Admin_Login"
import { useSelector } from 'react-redux'
import { useEffect } from 'react';
import Router from "next/router"

const Admin_Login = () => {
    const state_data = useSelector(state => state.admin)
    const {IsLogin} = state_data
    
    useEffect(()=>{
        if(IsLogin == true){
            Router.push('/admin/management')
        }
    },[IsLogin])
    return (

        <>
           <Admin_Login_Component/>
        </>
    )
}

export default Admin_Login

