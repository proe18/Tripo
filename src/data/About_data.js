import Team from "../images/about_1.jpg"
import InfoBg from '../images/background_about_1.jpg'
import Invite from "../images/about_2.jpg"
import DaisySuarez from "../images/founder_about_1.jpg"
import RayFinigan from "../images/founder_about_2.jpg"
import TaoDeng from "../images/founder_about_3.jpg"
import BenSingleton from "../images/founder_about_4.jpg"

export const aboutData = {
    header: {
        subTitle: "We Are Tripo",
        title: `We're creating the best in interactive entertainment
        by making games that change the way people have fun.`,
        img: Team,
        text: `I'm a paragraph. Click here to add your own text and edit me.
        It’s easy. Just click “Edit Text” or double click me to add your own content
        and make changes to the font. Feel free to drag and drop me anywhere you like on your page.
        I’m a great place for you to tell a story and let your users know a little more about you.`,
        text2: `This is a great space to write a long text about your company and your services.
        You can use this space to go into a little more detail about your company.
        Talk about your team and what services you provide.
        Tell your visitors the story of how you came up with the idea for your business
        and what makes you different from your competitors.
        Make your company stand out and show your visitors who you are.`
    },
    info: {
        title: "What We Are About",
        bg: InfoBg,
        contents: [
            {
                title: "Accomplishment",
                text: `I'm a paragraph. Click here to add your own text and edit me.
                I’m a great place for you to tell a story and let your users know a little more about you.`
            },
            {
                title: "Creativity",
                text: `I'm a paragraph. Click here to add your own text and edit me.
                I’m a great place for you to tell a story and let your users know a little more about you.`
            },
            {
                title: "Community",
                text: `I'm a paragraph. Click here to add your own text and edit me.
                I’m a great place for you to tell a story and let your users know a little more about you.`
            }
        ]
    },
    founder: {
        title: "Meet the Founders",
        founders: [
            {
                img: DaisySuarez,
                founderName: "Daisy Suarez",
                position: "CTO"
            },
            {
                img: RayFinigan,
                founderName: "Ray Finigan",
                position: "Senior Game Developer"
            },
            {
                img: TaoDeng,
                founderName: "Tao Deng",
                position: "Senior Game Designer"
            },
            {
                img: BenSingleton,
                founderName: "Ben Singleton",
                position: "Senior Game Developer"
            }
        ]
    },
    offices: {
        title: "Our Offices",
        place: "Our Studio in San Francisco",
        text: `I'm a paragraph.
        Click here to add your own text and edit me. It’s easy.
        Just click “Edit Text” or double click me to add your own content and make changes to the font.
        I’m a great place for you to tell a story and let your users know a little more about you.`,
        box: {
            img: Invite,
            title: "We’d Love to Work With You",
            text: `I'm a paragraph.
            Click here to add your own text and edit me.
            Let your users get to know you.`
        }
    },
}