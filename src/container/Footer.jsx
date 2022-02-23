import { useContext } from 'react'
import { Logo, Footer } from '../components'
import { GamesPageContext } from '../context'

const FooterContainer = ({ data }) => {
    const { isCloseGallery } = useContext(GamesPageContext)

    const handleRenderList = item => {
        switch (typeof item) {
            case 'string':
                return <Footer.Text>{item}</Footer.Text>

            case 'object':
                if (item.path) {
                    if (item.path.includes('https://')) {
                        return <Footer.Link href={item.path} target='_blank' rel='noreferrer'>{item.title}</Footer.Link>
                    }
                    return <Footer.RouteLink to={item.path}>{item.title}</Footer.RouteLink>
                }
                return (
                    <Footer.Link href={'/'}>
                        <Footer.Image src={item.img} alt={item.alt} />
                    </Footer.Link>
                )
            default: break
        }
    }

    return (
        <Footer hideFooter={isCloseGallery}>
            <Footer.Wrapper>
                <Footer.Heading>
                    <Logo />
                    <Footer.Text>{data.text}</Footer.Text>
                </Footer.Heading>
                <Footer.Box>
                    {data.nav.map(({ title, list }, index) =>
                        <Footer.NavList key={index}>
                            <Footer.ListTitle>{title}</Footer.ListTitle>
                            <Footer.Wrap>{list.map((item, index) =>
                                <Footer.Item key={index}>
                                    {handleRenderList(item)}
                                </Footer.Item>
                            )}
                            </Footer.Wrap>
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