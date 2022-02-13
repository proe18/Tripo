import AppStore from "../images/app_store.jpg"
import GooglePlay from "../images/google_play.jpg"
import KiponBg from '../images/background_kipon_1.jpg'
import KiponBg_2 from '../images/background_kipon_2.jpg'
import RobotrixBg from '../images/background_robotrix_1.jpg'
import RobotrixBg_2 from '../images/background_robotrix_2.jpg'
import TreasureBg from '../images/background_treasure_1.jpg'
import TreasureBg_2 from '../images/background_treasure_2.jpg'
import KiponAvatar from "../images/kipon_avatar.jpg"
import RobotrixAvatar from "../images/robotrix_avatar.jpg"
import TreasureAvatar from "../images/treasure_avatar.jpg"
import KiponScreenshot_1 from "../images/kipon_1.jpg"
import KiponScreenshot_2 from "../images/kipon_2.jpg"
import RobotrixScreenshot_1 from "../images/robotrix_1.jpg"
import RobotrixScreenshot_2 from "../images/robotrix_2.jpg"
import TreasureScreenshot_1 from "../images/treasure_1.jpg"
import TreasureScreenshot_2 from "../images/treasure_2.jpg"

export const gamesData = {
    kipon: {
        header: {
            bg: KiponBg,
            title: "Kipon",
            subTitle: "Casual - Free",
            avatar: KiponAvatar,
            alt: "Kipon Avatar",
            text: "A One-of-a-Kind Game That Offers Endless Excitement at Your Fingertips.",
            description: `I'm a paragraph.
            Click here to add your own text and edit me.
            It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.
            I’m a great place for you to tell a story and let your users know a little more about you.`
        },
        screenshots: {
            title: "Screenshots",
            listImage: [
                {
                    img: KiponScreenshot_1,
                    alt: "Screenshot 1"
                },
                {
                    img: KiponScreenshot_2,
                    alt: "Screenshot 2"
                },
            ]
        },
        reviews: {
            rating: "4.1 Rating",
            title: "Reviews",
            listReview: [
                {
                    review: `“I'm a testimonial. 
                    Click to edit me and add text that says something nice 
                    about you and your services.”`,
                    reviewer: "Wang Wai"
                },
                {
                    review: `“I'm a testimonial. 
                    Click to edit me and add text that says something nice about you and your services. 
                    Let your customers review you and tell their friends how great you are.”`,
                    reviewer: "Jose Pablo"
                },
                {
                    review: `“I'm a testimonial. 
                    Click to edit me and add text that says something nice 
                    about you and your services.”`,
                    reviewer: "Priya Gunga"
                }
            ],
            content: {
                title: "Challenge a Friend or Race Against the Clock as You Battle Through 20 Levels of Endless Fun",
                text: `I'm a paragraph.
                Click here to add your own text and edit me.
                It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.
                I’m a great place for you to tell a story and let your users know a little more about you.`,
                bg: KiponBg_2,
                title_2: 'Play Now',
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
        },
    },
    robotrix: {
        header: {
            bg: RobotrixBg,
            title: "Robotrix",
            subTitle: "RPG - Free",
            avatar: RobotrixAvatar,
            alt: "Robotrix Avatar",
            text: "Enjoy Tactical Combat and Secrets to Find With Robotrix.",
            description: `I'm a paragraph.
            Click here to add your own text and edit me.
            It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.
            I’m a great place for you to tell a story and let your users know a little more about you.`
        },
        screenshots: {
            title: "Screenshots",
            listImage: [
                {
                    img: RobotrixScreenshot_1,
                    alt: "Screenshot 1"
                },
                {
                    img: RobotrixScreenshot_2,
                    alt: "Screenshot 2"
                },
            ]
        },
        reviews: {
            rating: "4.1 Rating",
            title: "Reviews",
            listReview: [
                {
                    review: `“I'm a testimonial. 
                    Click to edit me and add text that says something nice 
                    about you and your services.”`,
                    reviewer: "Omar Zaine"
                },
                {
                    review: `“I'm a testimonial. 
                    Click to edit me and add text that says something nice about you and your services. 
                    Let your customers review you and tell their friends how great you are.”`,
                    reviewer: "Jay Jay"
                },
                {
                    review: `“I'm a testimonial. 
                    Click to edit me and add text that says something nice 
                    about you and your services.”`,
                    reviewer: "Danni Lopez"
                }
            ],
            content: {
                title: "Open-world playability wherever you are",
                text: `I'm a paragraph.
                Click here to add your own text and edit me.
                It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.
                I’m a great place for you to tell a story and let your users know a little more about you.`,
                bg: RobotrixBg_2,
                title_2: 'Play Now',
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
        }
    },
    treasure: {
        header: {
            bg: TreasureBg,
            title: "Treasure Box",
            subTitle: "Adventure - Free",
            avatar: TreasureAvatar,
            alt: "Treasure Box Avatar",
            text: "A Free-to-Play Adventure Game That Seriously Packs a Punch.",
            description: `I'm a paragraph.
            Click here to add your own text and edit me.
            It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.
            I’m a great place for you to tell a story and let your users know a little more about you.`
        },
        screenshots: {
            title: "Screenshots",
            listImage: [
                {
                    img: TreasureScreenshot_1,
                    alt: "Screenshot 1"
                },
                {
                    img: TreasureScreenshot_2,
                    alt: "Screenshot 2"
                },
            ]
        },
        reviews: {
            rating: "4.1 Rating",
            title: "Reviews",
            listReview: [
                {
                    review: `“I'm a testimonial. 
                    Click to edit me and add text that says something nice 
                    about you and your services.”`,
                    reviewer: "Max Ottis"
                },
                {
                    review: `“I'm a testimonial. 
                    Click to edit me and add text that says something nice about you and your services. 
                    Let your customers review you and tell their friends how great you are.”`,
                    reviewer: "Charlie K"
                },
                {
                    review: `“I'm a testimonial. 
                    Click to edit me and add text that says something nice 
                    about you and your services.”`,
                    reviewer: "Sofie Zacks"
                }
            ],
            content: {
                subTitle: "Play Against Other Players Worldwide",
                title: "Set Sail On Adventures to Win Tokens and Unlock Rare Items",
                text: `I'm a paragraph.
                Click here to add your own text and edit me.
                It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.
                I’m a great place for you to tell a story and let your users know a little more about you.`,
                bg: TreasureBg_2,
                title_2: 'Play Now',
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
        }
    }
}