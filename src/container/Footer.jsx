import { Logo } from '../components'
import { Footer } from '../components'

const FooterContainer = ({ data }) => {
    console.log(data.nav);
    return (
        <Footer>
            <Footer.Wrapper>
                <Footer.Heading>
                    <Logo />
                    <Footer.Text>{data.text}</Footer.Text>
                </Footer.Heading>
                <Footer.Wrap>
                    {data.nav.map(({title, list}, index) =>
                        <Footer.NavList key={index}>
                            <Footer.ListTitle>{title}</Footer.ListTitle>
                            {list.map((item, index) => 
                                <Footer.Item key={index}></Footer.Item>
                            )}
                        </Footer.NavList>
                    )}
                </Footer.Wrap>
                <Footer.CoppyRight>
                    <Footer.Text>{data.coppyRight}</Footer.Text>
                </Footer.CoppyRight>
            </Footer.Wrapper>
        </Footer>
    )
}

export default FooterContainer