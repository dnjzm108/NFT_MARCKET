
import { NavigationWrap, Logo, NavItemContainer } from '../../component/Navigation/Navigation.css'
import Link from 'next/link'
import Button from '../Button'
import {Management_Wrap,Right,Side_bar,Line,Container,Content_Box} from './Admin_Management.css'

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
                    <Line/>
                </Side_bar>

                <Container>
                    <Content_Box>
                        <div></div>
                        <div>
                            <h3>회원닉네임</h3>
                            <h3></h3>
                            <h3></h3>
                        </div>
                    </Content_Box>

                </Container>

            </Management_Wrap>

        </>

    )
}

export default Management

