import { Reviews } from '../../components'
import { AiFillStar } from 'react-icons/ai'
import { useContext } from 'react'
import { GalleryContext } from '../../context'

const ReviewsContainer = ({ data }) => {
    const { isCloseGallery } = useContext(GalleryContext)
    
    return (
        <Reviews hideReviews={isCloseGallery}>
            <Reviews.Wrapper>
                <Reviews.Heading>
                    <Reviews.Rating>
                        <Reviews.Group>
                            <Reviews.Icon>
                                <AiFillStar />
                            </Reviews.Icon>
                            <Reviews.Text>{data.rating}</Reviews.Text>
                        </Reviews.Group>
                    </Reviews.Rating>
                    <Reviews.Title>{data.title}</Reviews.Title>
                </Reviews.Heading>
                <Reviews.Group>
                    {data.listReview.map((review, index) =>
                        <Reviews.Box key={index}>
                            <Reviews.Content>
                                <Reviews.Text>{review.review}</Reviews.Text>
                                <Reviews.Name>{review.reviewer}</Reviews.Name>
                            </Reviews.Content>
                        </Reviews.Box>
                    )}
                </Reviews.Group>
            </Reviews.Wrapper>
            <Reviews.Background bg={data.content.bg}>
                <Reviews.Overlay>
                    <Reviews.Content>
                        {data.content?.subTitle &&
                            <Reviews.SubTitle>{data.content.subTitle}</Reviews.SubTitle>
                        }
                        <Reviews.Title>{data.content.title}</Reviews.Title>
                        <Reviews.Text>{data.content.text}</Reviews.Text>
                    </Reviews.Content>
                </Reviews.Overlay>
            </Reviews.Background>
            <Reviews.BoxPlatForms>
                <Reviews.Title>{data.content.title_2}</Reviews.Title>
                <Reviews.Platforms>
                    {data.content.platForms.map(platform =>
                        <Reviews.Wrap key={platform.alt} href={'/'}>
                            <Reviews.Image src={platform.img} alt={platform.alt} />
                        </Reviews.Wrap>
                    )}
                </Reviews.Platforms>
            </Reviews.BoxPlatForms>
        </Reviews>
    )
}

export default ReviewsContainer