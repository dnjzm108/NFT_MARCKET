
import { NavigationWrap, Logo, NavigationContainer, NavItemContainer } from '../Navigation/Navigation.css'
import Link from 'next/link'
import Button from '../Button'
import { Management_Wrap, Right, Side_bar, Line, Container, Content_Box, Table, Btn_Box } from './Admin_Management.css'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Admin_Logout } from '../../reducers/user'
import Router from "next/router"
import axios from "axios"
import {url} from "../../saga/url"

const Management = () => {
    
    const dispatch = useDispatch();
    
    const [menu, setMenu] = useState("요청");
    const [seller,setSeller] = useState([])
    
    useEffect(async()=>{
        let data = menu
        let send = {data}
        let result = await axios.post(`${url}/user/checkseller`,send)
        setSeller(result.data)
        console.log(result.data);
    },[])

    const ChageMenu = async (e) => {
        let { id } = e.target;
        let data=''
        if (id == "request") {
            setMenu("요청")
            data='요청'
        } else if (id == "success") {
            setMenu("승인")
            data='승인'
        } else if (id == "false") {
            setMenu("반려")
            data='반려'
        }
        let send={data} 
    
        let result = await axios.post(`${url}/user/checkseller`,send)
        setSeller(result.data)

    }

const update_seller = async (e,v) =>{
let data ={
    status:v,
    nickname:e
}
let result = await axios.post(`${url}/user/chageseller`,data)
Router.push('/admin/login')
}

    const logOut_func = () => {
        dispatch(Admin_Logout())
        Router.push('/admin/login')
    }

    return (
        <>
            <NavigationWrap>
                <NavigationContainer>
                    <Logo>
                        <Link href="/">
                            <a><img src="/logo.png" alt="" /></a>
                        </Link>
                    </Logo>
                    <NavItemContainer>
                        <Right>
                            <Button value="로그아웃" color="blue" func={()=>{logOut_func()}} size="small" mt={20} mb={20} />
                        </Right>
                    </NavItemContainer>
                </NavigationContainer>
            </NavigationWrap>
            <Management_Wrap>

                <Side_bar>
                    <h2>회원관리</h2>
                    <ul>
                        {menu == "요청" ? <li onClick={ChageMenu} id="request" style={{ color: "blue" }}>- 판매자 요청</li> : <li onClick={ChageMenu} id="request">- 판매자 요청</li>}
                        {menu == "승인" ? <li onClick={ChageMenu} id="succes" style={{ color: "blue" }}>- 판매자 승인</li> : <li onClick={ChageMenu} id="success">- 판매자 승인</li>}
                        {menu == "반려" ? <li onClick={ChageMenu} id="false" style={{ color: "blue" }}>- 승인 반려</li> : <li onClick={ChageMenu} id="false">- 승인 반려</li>}

                    </ul>
                    <Line />
                </Side_bar>

                <Container>


                    {menu == "요청" ? 
                       <>
                        { seller.map((v)=>{
                            return(
                                <Content_Box>
                                <Table>
                                    <tr>
                                        <th>회원 닉네임</th>
                                        <th>이메일</th>
                                        <th>사업자 번호</th>
                                        <th> <Button value="판매자 승인" func={()=>{update_seller(v.nickname,"승인")}} size="small" color="sky" ml={100} /> </th>
                                    </tr>
                                </Table>
                                <Table>
                                    <tr>
                                        <th>{v.nickname}</th>
                                        <th>{v.email}</th>
                                        <th>{v.seller_no}</th>
                                        <th><Button value="판매자 반려" func={()=>{update_seller(v.nickname,"반려")}} size="small" mt={5} ml={100} /></th>
                                    </tr>
                                    <Btn_Box>
                                    </Btn_Box>
                                </Table>
                                </Content_Box>
                            )
                        })}
                        </>
                    : ''}

                    {menu == "승인" ?
                          <>
                          { seller.map((v)=>{
                              return(
                                  <Content_Box>
                                  <Table>
                                      <tr>
                                          <th>회원 닉네임</th>
                                          <th>이메일</th>
                                          <th>사업자 번호</th>
                                      </tr>
                                  </Table>
                                  <Table>
                                      <tr>
                                          <th>{v.nickname}</th>
                                          <th>{v.email}</th>
                                          <th>{v.seller_no}</th>
                                      </tr>
                                      <Btn_Box>
                                      </Btn_Box>
                                  </Table>
                                  </Content_Box>
                              )
                          })}
                          </>: ''
                    }

                    {menu == "반려" ?
                         <>
                         { seller.map((v)=>{
                             return(
                                 <Content_Box>
                                 <Table>
                                     <tr>
                                         <th>회원 닉네임</th>
                                         <th>이메일</th>
                                         <th>사업자 번호</th>
                                         <th> <Button value="판매자 승인" func={()=>{update_seller(v.nickname,"승인")}} size="small" color="sky" ml={100} /> </th>
                                     </tr>
                                 </Table>
                                 <Table>
                                     <tr>
                                         <th>{v.nickname}</th>
                                         <th>{v.email}</th>
                                         <th>{v.seller_no}</th>
                                     </tr>
                                     <Btn_Box>
                                     </Btn_Box>
                                 </Table>
                                 </Content_Box>
                             )
                         })}
                         </>: ''}

                </Container>



            </Management_Wrap>

        </>

    )
}

export default Management

