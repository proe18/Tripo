import { Logo } from '../components'
import { Footer } from '../components'

const FooterContainer = ({ data }) => {
    const renderList = (list) => list.map((item, index) => {
        switch (typeof item) {
            case 'string':
                return (
                    <Footer.Item key={index}>
                        <Footer.Text>{item}</Footer.Text>
                    </Footer.Item>
                )
            case 'object':
                if (item.path) {
                    if (item.path.includes('https://')) {
                        return (
                            <Footer.Item key={index}>
                                <Footer.Link
                                    href={item.path}
                                    target='_blank'
                                    rel='noreferrer'
                                >
                                    {item.title}
                                </Footer.Link>
                            </Footer.Item>
                        )
                    }
                    if (!item.path.includes('https://')) {
                        return (
                            <Footer.Item key={index}>
                                <Footer.RouteLink to={item.path}>{item.title}</Footer.RouteLink>
                            </Footer.Item>
                        )
                    }
                } 
                return (
                    <Footer.Item key={index}>
                        <Footer.Link href={'/'}>
                            <Footer.Image src={item.img} alt={item.alt} />
                        </Footer.Link>
                    </Footer.Item>
                )
            default: break
        }
    })

    return (
        <Footer>
            <Footer.Wrapper>
                <Footer.Heading>
                    <Logo />
                    <Footer.Text>{data.text}</Footer.Text>
                </Footer.Heading>
                <Footer.Box>
                    {data.nav.map(({ title, list }, index) =>
                        <Footer.NavList key={index}>
                            <Footer.ListTitle>{title}</Footer.ListTitle>
                            <Footer.Wrap>{renderList(list)}</Footer.Wrap>
                        </Footer.NavList>
                    )}
                </Footer.Box>
                <Footer.CoppyRight>
                    <Footer.Text>{data.coppyRight}</Footer.Text>
                </Footer.CoppyRight>
            </Footer.Wrapper>
        </Footer>
    )
}

export default FooterContainer