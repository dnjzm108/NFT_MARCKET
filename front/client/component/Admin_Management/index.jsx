
import { NavigationWrap, Logo, NavigationContainer, NavItemContainer } from '../Navigation/Navigation.css'
import Link from 'next/link'
import Button from '../Button'
import { Management_Wrap, Right, Side_bar, Line, Container, Content_Box, Table, Btn_Box } from './Admin_Management.css'
import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Router from "next/router"
import { Get_Seller_Info , Admin_Logout , Change_Seller_REQUEST} from "../../reducers/admin"

const Management = () => {

    const dispatch = useDispatch();
    const state_data = useSelector(state => state.admin)
    const { seller_info,logdding } = state_data
    const [menu, setMenu] = useState("2");
    
    useEffect(() => {
        let data = menu
        let send = { data }
        dispatch(Get_Seller_Info(send))
    }, [])

    useEffect(() => {
        if(logdding == false){
            console.log("화면",seller_info);
        }
    }, [state_data])

    const ChageMenu = async (e) => {
        let { id } = e.target;
        let data = ''
        if (id == "request") {
            setMenu("2")
            data = '2'
        } else if (id == "success") {
            setMenu("3")
            data = '3'
        } else if (id == "false") {
            setMenu("1")
            data = '1'
        }
        let send = { data }
        dispatch(Get_Seller_Info(send))
    }

    const update_seller = async (e, v) => {
        let data = {
            status: v,
            nickname: e
        }
dispatch(Change_Seller_REQUEST(data))
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
                            <Button value="로그아웃" color="blue" func={() => { logOut_func() }} size="small" mt={20} mb={20} />
                        </Right>
                    </NavItemContainer>
                </NavigationContainer>
            </NavigationWrap>
            <Management_Wrap>

                <Side_bar>
                    <h2>회원관리</h2>
                    <ul>
                        {menu == "2" ? <li onClick={ChageMenu} id="request" style={{ color: "blue" }}>- 판매자 요청</li> : <li onClick={ChageMenu} id="request">- 판매자 요청</li>}
                        {menu == "3" ? <li onClick={ChageMenu} id="succes" style={{ color: "blue" }}>- 판매자 승인</li> : <li onClick={ChageMenu} id="success">- 판매자 승인</li>}
                        {menu == "1" ? <li onClick={ChageMenu} id="false" style={{ color: "blue" }}>- 승인 반려</li> : <li onClick={ChageMenu} id="false">- 승인 반려</li>}

                    </ul>
                    <Line />
                </Side_bar>

                <Container>


                    {menu == "2" ?
                    seller_info[0] == undefined ?
                    <span>데이터가 없습니다.</span>
                    :
                        <>
                            {seller_info.map((v) => {
                                return (
                                    <Content_Box>
                                        <Table>
                                            <tr>
                                                <th>회원 닉네임</th>
                                                <th>이메일</th>
                                                <th>사업자 번호</th>
                                                <th> <Button value="판매자 승인" func={() => { update_seller(v.nickname, "3") }} size="small" color="sky" ml={100} /> </th>
                                            </tr>
                                        </Table>
                                        <Table>
                                            <tr>
                                                <th>{v.nickname}</th>
                                                <th>{v.email}</th>
                                                <th>{v.seller_no}</th>
                                                <th><Button value="판매자 반려" func={() => { update_seller(v.nickname, "1") }} size="small" mt={5} ml={100} /></th>
                                            </tr>
                                            <Btn_Box>
                                            </Btn_Box>
                                        </Table>
                                    </Content_Box>
                                )
                            })}
                        </>
                        : ''}

                    {menu == "3" ?
                        seller_info[0] == undefined ?
                            <span> 데이터가 없습니다.</span>
                            :
                            <>
                                {seller_info.map((v) => {
                                    return (
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
                            </>

                        : ''
                    }

                    {menu == "1" ?
                    seller_info[0] == undefined ?
                    <span>데이터가 없습니다.</span>
                    :
                        <>
                            {seller_info.map((v) => {
                                return (
                                    <Content_Box>
                                        <Table>
                                            <tr>
                                                <th>회원 닉네임</th>
                                                <th>이메일</th>
                                                <th>사업자 번호</th>
                                                <th> <Button value="판매자 승인" func={() => { update_seller(v.nickname, "3") }} size="small" color="sky" ml={100} /> </th>
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
                        </> : ''}

                </Container>



            </Management_Wrap>

        </>

    )
}

export default Management

