
import { NavigationWrap, Logo, NavItemContainer } from '../../component/Navigation/Navigation.css'
import Link from 'next/link'
import Button from '../Button'
import { Management_Wrap, Right, Side_bar, Line, Container, Content_Box, Table, Btn_Box } from './Admin_Management.css'

const Management = () => {
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
                    <Line />
                </Side_bar>

                <Container>
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
                                <Button value="판매자 승인" url="/" />
                            </Btn_Box>
                        </Table>
                    </Content_Box>

                </Container>

            </Management_Wrap>

        </>

    )
}

export default Management

