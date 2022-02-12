import { useContext } from 'react'
import { Screenshots } from '../../components'
import { GamesPageContext } from '../../context/GamesPageContext'

const ScreenshotsContainer = ({ data }) => {
    const heightElement = useContext(GamesPageContext)
    
    return (
        <Screenshots paddingTop={heightElement}>
            <Screenshots.Wrapper>
                <Screenshots.Title>{data.title}</Screenshots.Title>
                <Screenshots.Group>
                    {data.listImage.map((image, index) =>
                        <Screenshots.Wrap key={index}>
                            <Screenshots.Image src={image.img} alt={image.alt} />
                        </Screenshots.Wrap>
                    )}
                </Screenshots.Group>
            </Screenshots.Wrapper>
        </Screenshots>
    )
}

export default ScreenshotsContainer