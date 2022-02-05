import { OurGames } from '../../components'

const OurGamesContainer = ({ data }) => {
    return (
        <OurGames>
        <OurGames.Wrapper>
            <OurGames.Heading>
                <OurGames.Title>{data.title}</OurGames.Title>
                <OurGames.Text>{data.text}</OurGames.Text>
            </OurGames.Heading>
            <OurGames.BackGround>
                {data.games.map((game, index) =>
                    <OurGames.Game key={index}>
                        <OurGames.Heading>
                            <OurGames.Wrap>
                                <OurGames.Avatar src={game.avatar} alt={game.title} />
                            </OurGames.Wrap>
                            <OurGames.Info>
                                <OurGames.Title>{game.title}</OurGames.Title>
                                <OurGames.Text>{game.text}</OurGames.Text>
                            </OurGames.Info>
                        </OurGames.Heading>
                        <OurGames.Description>{game.description}</OurGames.Description>
                        <OurGames.PlatForms>
                            {game.platForms.map((platform, index) =>
                                <OurGames.Link key={index}>
                                    <OurGames.Image src={platform.img} alt={platform.alt} />
                                </OurGames.Link>
                            )}
                        </OurGames.PlatForms>
                    </OurGames.Game>
                )}
                <OurGames.Image src={data.img} alt='' />
            </OurGames.BackGround>
        </OurGames.Wrapper>
        </OurGames>
    )
}

export default OurGamesContainer