
import { NavigationWrap, Logo, NavigationContainer, NavItemContainer } from '../Navigation/Navigation.css'
import Link from 'next/link'
import Button from '../Button'
import { Management_Wrap, Right, Side_bar, Line, Container, Content_Box, Table, Btn_Box } from './Admin_Management.css'
import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Router from "next/router"
import { Get_Seller_Info, Admin_Logout, Change_Seller_REQUEST } from "../../reducers/admin"

const Management = () => {

    const dispatch = useDispatch();
    const state_data = useSelector(state => state.admin)
    const { seller_info, loadding } = state_data
    const [menu, setMenu] = useState("2");

    useEffect(() => {
        let data = menu
        let send = { data }
        dispatch(Get_Seller_Info(send))
    }, [])

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
        let info = {
            status: v,
            nickname: e
        }
        dispatch(Change_Seller_REQUEST(info))
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
                            <Button value="๋ก๊ทธ์์" color="blue" func={() => { logOut_func() }} size="small" mt={20} mb={20} />
                        </Right>
                    </NavItemContainer>
                </NavigationContainer>
            </NavigationWrap>
            <Management_Wrap>

                <Side_bar>
                    <h2>ํ์๊ด๋ฆฌ</h2>
                    <ul>
                        {menu == "2" ? <li onClick={ChageMenu} id="request" style={{ color: "blue" }}>- ํ๋งค์ ์์ฒญ</li> : <li onClick={ChageMenu} id="request">- ํ๋งค์ ์์ฒญ</li>}
                        {menu == "3" ? <li onClick={ChageMenu} id="succes" style={{ color: "blue" }}>- ํ๋งค์ ์น์ธ</li> : <li onClick={ChageMenu} id="success">- ํ๋งค์ ์น์ธ</li>}
                        {menu == "1" ? <li onClick={ChageMenu} id="false" style={{ color: "blue" }}>- ์น์ธ ๋ฐ๋?ค</li> : <li onClick={ChageMenu} id="false">- ์น์ธ ๋ฐ๋?ค</li>}

                    </ul>
                    <Line />
                </Side_bar>

                <Container>


                    {menu == "2" ?
                        seller_info[0] == undefined ?
                            <span>๋ฐ์ดํฐ๊ฐ ์์ต๋๋ค.</span>
                            :
                            <>
                                {seller_info.map((v) => {
                                    return (
                                        <Content_Box>
                                            <Table>
                                                <tbody>
                                                <tr>
                                                    <th>ํ์ ๋๋ค์</th>
                                                    <th>์ด๋ฉ์ผ</th>
                                                    <th>์ฌ์์ ๋ฒํธ</th>
                                                    <th> <Button value="ํ๋งค์ ์น์ธ" func={() => { update_seller(v.nickname, 3) }} size="small" color="sky" ml={100} /> </th>
                                                </tr>
                                                </tbody>
                                            </Table>
                                            <Table>
                                                <tbody>
                                                <tr>
                                                    <th>{v.nickname}</th>
                                                    <th>{v.email}</th>
                                                    <th>{v.seller_no}</th>
                                                    <th><Button value="ํ๋งค์ ๋ฐ๋?ค" func={() => { update_seller(v.nickname, 1) }} size="small" mt={5} ml={100} /></th>
                                                </tr>
                                                </tbody>
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
                            <span> ๋ฐ์ดํฐ๊ฐ ์์ต๋๋ค.</span>
                            :
                            <>
                                {seller_info.map((v) => {
                                    return (
                                        <Content_Box>
                                            <Table>
                                                <tbody>
                                                <tr>
                                                    <th>ํ์ ๋๋ค์</th>
                                                    <th>์ด๋ฉ์ผ</th>
                                                    <th>์ฌ์์ ๋ฒํธ</th>
                                                </tr>
                                                </tbody>
                                            </Table>
                                            <Table>
                                                <tbody>
                                                <tr>
                                                    <th>{v.nickname}</th>
                                                    <th>{v.email}</th>
                                                    <th>{v.seller_no}</th>
                                                </tr>
                                                </tbody>
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
                            <span>๋ฐ์ดํฐ๊ฐ ์์ต๋๋ค.</span>
                            :
                            <>
                                {seller_info.map((v) => {
                                    return (
                                        <Content_Box>
                                            <Table>
                                                <tbody>
                                                <tr>
                                                    <th>ํ์ ๋๋ค์</th>
                                                    <th>์ด๋ฉ์ผ</th>
                                                    <th>์ฌ์์ ๋ฒํธ</th>
                                                    <th> <Button value="ํ๋งค์ ์น์ธ" func={() => { update_seller(v.nickname, 3) }} size="small" color="sky" ml={100} /> </th>
                                                </tr>
                                                </tbody>
                                            </Table>
                                            <Table>
                                                <tbody>
                                                <tr>
                                                    <th>{v.nickname}</th>
                                                    <th>{v.email}</th>
                                                    <th>{v.seller_no}</th>
                                                </tr>
                                                </tbody>
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

