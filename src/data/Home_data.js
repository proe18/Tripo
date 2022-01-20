import Kipon from "../Assets/images/kipon_avatar.jpg"
import Robotrix from "../Assets/images/robotrix_avatar.jpg"
import Treasure from "../Assets/images/treasure_avatar.jpg"
import BackGround from "../Assets/images/background_home_1.jpg"
import PrimayBg from "../Assets/images/background_home_2.jpg"
import KiponBg from "../Assets/images/background_kipon_1.jpg"
import RobotrixBg from "../Assets/images/background_robotrix_1.jpg"
import TreasureBg from "../Assets/images/background_treasure_2.jpg"
import MainImage from "../Assets/images/home_1.jpg"
import SubImage from "../Assets/images/home_2.jpg"
import OurGameImage from "../Assets/images/home_3.jpg"
import JoinOurImage from "../Assets/images/home_4.jpg"

export const homeData = {
    hero: {
        img: BackGround,
        title: "Made to Be Played",
        subtitle: "The Very Best in Mobile Gaming"
    },
    listGames: {
        games: [
            {
                title: "Kipon",
                path: "/kipon",
                cName: "dropdown-link",
                subtitle: "Casual - Free",
                img: KiponBg,
                avatar: Kipon,
                description: `I'm a paragraph. Click here to add your own text and edit me.
                              I’m a great place for you to tell a story and let your users know a little more about you.`
            },
            {
                title: "Robotrix",
                path: "/robotrix",
                cName: "dropdown-link",
                subtitle: "RPG - Free",
                img: RobotrixBg,
                avatar: Robotrix,
                description: `I'm a paragraph. Click here to add your own text and edit me.
                              I’m a great place for you to tell a story and let your users know a little more about you.`
            },
            {
                title: "Treasure Box",
                path: "/treasure-box",
                cName: "dropdown-link",
                subtitle: "Adventure - Free",
                img: TreasureBg,
                avatar: Treasure,
                description: `I'm a paragraph. Click here to add your own text and edit me.
                              I’m a great place for you to tell a story and let your users know a little more about you.`
            },
        ],
        title: "Explore Our Games"
    },
    about: {
        title: "About Tripo",
        subtitle: "Your Source for Mobile Entertainment",
        description: `I'm a paragraph.
        Click here to add your own text and edit me. It’s easy.
        Just click “Edit Text” or double click me to add your own content and make changes to the font.
        I’m a great place for you to tell a story and let your users know a little more about you.`,
        aboutImages: [
            {
                img: MainImage,
                alt: "MainPhoto",
                className: "main-image" 
            },
            {
                img: SubImage,
                alt: "SubPhoto",
                className: "sub-image" 
            } 
        ]
    },
    ourGames: {
        title: "Our Games",
        description: `I'm a paragraph. Click here to add your own text and edit me.
        I’m a great place for you to tell a story and let your users know a little more about you.`,
        img: OurGameImage
    },
    joinTeam: {
        title: "Join Our Team",
        subtitle: "It takes the world's best talent to change the game.",
        background: PrimayBg,
        img: JoinOurImage
    }
}
