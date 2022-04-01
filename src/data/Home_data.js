import Kipon from '../images/kipon_avatar.jpg'
import Robotrix from '../images/robotrix_avatar.jpg'
import Treasure from '../images/treasure_avatar.jpg'
import KiponBg from '../images/background_kipon_1.jpg'
import RobotrixBg from '../images/background_robotrix_1.jpg'
import TreasureBg from '../images/background_treasure_2.jpg'
import MainImage from '../images/home_1.jpg'
import SubImage from '../images/home_2.jpg'
import OurGameImage from '../images/home_3.jpg'
import JoinTeamImage from '../images/home_4.jpg'
import AppStore from "../images/app_store.jpg"
import GooglePlay from "../images/google_play.jpg"
import * as ROUTES from '../constants/routes'

export const homeData = {
    header: {
        title: "Made to Be Played",
        text: "The Very Best in Mobile Gaming",
        platForms: [
            {
                img: AppStore,
                alt: "App Store"
            }, 
            {
                img: GooglePlay,
                alt: "Google Play"
            }
        ],
        listGames: [
            {
                title: "Kipon",
                path: ROUTES.KIPON,
                text: "Casual - Free",
                img: KiponBg,
                description: `I'm a paragraph. Click here to add your own text and edit me.
                ’m a great place for you to tell a story and let your users know a little more about you.`
            },
            {
                title: "Robotrix",
                path: ROUTES.ROBOTRIX,
                text: "RPG - Free",
                img: RobotrixBg,
                description: `I'm a paragraph. Click here to add your own text and edit me.
                I’m a great place for you to tell a story and let your users know a little more about you.`
            },
            {
                title: "Treasure Box",
                path: ROUTES.TREASURE,
                text: "Adventure - Free",
                img: TreasureBg,
                description: `I'm a paragraph. Click here to add your own text and edit me.
                I’m a great place for you to tell a story and let your users know a little more about you.`
            },
        ],
    },
    about: {
        subTitle: "About Tripo",
        title: "Your Source for Mobile Entertainment",
        text: `I'm a paragraph.
        Click here to add your own text and edit me. It’s easy.
        Just click “Edit Text” or double click me to add your own content and make changes to the font.
        I’m a great place for you to tell a story and let your users know a little more about you.`,
        button: {
            name: 'Learn More',
            path: ROUTES.ABOUT
        },
        images: [
            {
                img: MainImage,
                alt: "MainPhoto"
            },
            {
                img: SubImage,
                alt: "SubPhoto"
            }
        ]
    },
    ourGames: {
        title: "Our Games",
        text: `I'm a paragraph. Click here to add your own text and edit me.
        I’m a great place for you to tell a story and let your users know a little more about you.`,
        games: [
            {
                avatar: Kipon,
                title: "Kipon",
                text: "Casual - Free",
                path: ROUTES.KIPON,
                description: `I'm a paragraph. Click here to add your own text and edit me.
                ’m a great place for you to tell a story and let your users know a little more about you.`,
                platForms: [
                    {
                        img: AppStore,
                        alt: "App Store"
                    }, 
                    {
                        img: GooglePlay,
                        alt: "Google Play"
                    }
                ]
            },
            {
                avatar: Robotrix,
                title: "Robotrix",
                text: "RPG - Free",
                path: ROUTES.ROBOTRIX,
                description: `I'm a paragraph. Click here to add your own text and edit me.
                I’m a great place for you to tell a story and let your users know a little more about you.`,
                platForms: [
                    {
                        img: AppStore,
                        alt: "App Store"
                    }, 
                    {
                        img: GooglePlay,
                        alt: "Google Play"
                    }
                ]
            },
            {
                avatar: Treasure,
                title: "Treasure Box",
                text: "Adventure - Free",
                path: ROUTES.TREASURE,
                description: `I'm a paragraph. Click here to add your own text and edit me.
                I’m a great place for you to tell a story and let your users know a little more about you.`,
                platForms: [
                    {
                        img: AppStore,
                        alt: "App Store"
                    }, 
                    {
                        img: GooglePlay,
                        alt: "Google Play"
                    }
                ]
            }
        ],
        img: OurGameImage,
    },
    joinTeam: {
        title: "Join Our Team",
        text: "It takes the world's best talent to change the game.",
        path: ROUTES.CAREERS,
        name: 'Explore Careers',
        img: JoinTeamImage
    }
}
