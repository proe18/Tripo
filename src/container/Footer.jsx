import { useContext, memo } from 'react'
import { Logo, Footer } from '../components'
import { GalleryContext, NavbarContext } from '../context'
import * as PAGESTITLE from '../constants/pages_title'

const FooterContainer = ({ data }) => {
    const { isCloseGallery } = useContext(GalleryContext)
    const { handleSwitchPage } = useContext(NavbarContext)
    
    const checkTitle = title => {
        if (title === 'Privacy Policy') {
            const titleLength = title.length
            const policyLength = PAGESTITLE.POLICY.length
            return title.slice(-policyLength, titleLength)
        }

        if (title === 'Terms & Conditions') {
            return title.slice(0, PAGESTITLE.TERMS.length)
        }

        return title
    }

    const handleOnClick = title => {
        switch (checkTitle(title)) {
            case PAGESTITLE.GAMES:
                return () => handleSwitchPage(PAGESTITLE.GAMES)
            case PAGESTITLE.CONTACT:
                return () => handleSwitchPage(PAGESTITLE.CONTACT)
            case PAGESTITLE.CAREERS:
                return () => handleSwitchPage(PAGESTITLE.CAREERS)
            case PAGESTITLE.ABOUT:
                return () => handleSwitchPage(PAGESTITLE.ABOUT)
            case PAGESTITLE.POLICY:
                return () => handleSwitchPage(PAGESTITLE.POLICY)
            case PAGESTITLE.TERMS:
                return () => handleSwitchPage(PAGESTITLE.TERMS)
            default: return
        }
    }

    const handleRenderList = item => {
        switch (typeof item) {
            case 'string':
                return <Footer.Text>{item}</Footer.Text>
            case 'object':
                if (item.path) {
                    if (item.path.includes('https://')) {
                        return <Footer.Link
                            href={item.path}
                            target='_blank'
                            rel='noreferrer'
                        >
                            {item.title}
                        </Footer.Link>
                    }
                    return <Footer.RouteLink
                        to={item.path}
                        onClick={handleOnClick(item.title)}
                    >
                        {item.title}
                    </Footer.RouteLink>
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
                        <Footer.Wrap key={index}>
                            <Footer.ListTitle>{title}</Footer.ListTitle>
                            <Footer.NavList>{list.map((item, index) =>
                                <Footer.Item key={index}>
                                    {handleRenderList(item)}
                                </Footer.Item>
                            )}
                            </Footer.NavList>
                        </Footer.Wrap>
                    )}
                </Footer.Box>
                <Footer.CoppyRight>
                    <Footer.Text>{data.coppyRight}</Footer.Text>
                </Footer.CoppyRight>
            </Footer.Wrapper>
        </Footer>
    )
}

export default memo(FooterContainer)