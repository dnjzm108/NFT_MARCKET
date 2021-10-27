
import { NavigationWrap, Logo, NavItemContainer } from '../../component/Navigation/Navigation.css'
import Link from 'next/link'
import Button from '../Button'
import { Management_Wrap, Right, Side_bar, Line, Container, Content_Box, Table, Btn_Box } from './Admin_Management.css'
import { useState } from 'react'

const Management = () => {

    const [menu, setMenu] = useState(1);

    const ChageMenu = (e) => {
        let { id } = e.target;
        if (id == "1") {
            setMenu(1)
        } else if (id == "2") {
            setMenu(2)
        } else if (id == "3") {
            setMenu(3)
        }
    }

    return (
        <>
            <NavigationWrap>
                <Logo>
                    <Link href="/">
                        <a><img src="/logo.png" alt="" /></a>
                    </Link>
                </Logo>
                <Right>
                    <Button value="로그아웃" color="blue" func={() => setIsLogin(true)} size="small" />
                </Right>
            </NavigationWrap>
            <Management_Wrap>

                <Side_bar>
                    <h2>회원관리</h2>
                    <ul>
                        {menu == 1 ? <li onClick={ChageMenu} id="1" style={{ color: "blue" }}>- 판매자 요청</li> : <li onClick={ChageMenu} id="1">- 판매자 요청</li>}
                        {menu == 2 ? <li onClick={ChageMenu} id="2" style={{ color: "blue" }}>- 판매자 승인</li> : <li onClick={ChageMenu} id="2">- 판매자 승인</li>}
                        {menu == 3 ? <li onClick={ChageMenu} id="3" style={{ color: "blue" }}>- 승인 반려</li> : <li onClick={ChageMenu} id="3">- 승인 반려</li>}

                    </ul>
                    <Line />
                </Side_bar>

                <Container>

                    
                    {menu == 1 ? <Content_Box>

                        <Table>
                            <tr>
                                <th>회원 닉네임</th>
                                <th>이메일</th>
                                <th>사업자 번호</th>
                            </tr>
                        </Table>
                        <Table>
                            <tr>
                                <th>정성진</th>
                                <th>jin@naver.com</th>
                                <th>92791409892479709</th>
                            </tr>
                            <Btn_Box>
                                <Button value="판매자 승인" url="/" size="small" color="sky" />
                                <Button value="판매자 반려" url="/" size="small" mt={5} />
                            </Btn_Box>
                        </Table>
                    </Content_Box> : ''}

       {menu == 2 ?
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
               <th>정성진</th>
               <th>jin@naver.com</th>
               <th>92791409892479709</th>
           </tr>
       </Table>
   </Content_Box> : ''
       }

       {menu == 3 ?
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
               <th>정성진</th>
               <th>jin@naver.com</th>
               <th>92791409892479709</th>
           </tr>
           <Btn_Box>
               <Button value="판매자 승인" url="/" size="small" color="sky" />
           </Btn_Box>
       </Table>
   </Content_Box>
    : ''}

                </Container>



            </Management_Wrap>

        </>

    )
}

export default Management

