import { PlatForms } from './Platforms_data'
import * as ROUTES from '../constants/routes'

export const footerData = {
    text: 'An Immersive Gaming Experience',
    nav: [
        {
            title: "Contact",
            list: [
                "Info@mysite.com",
                "Tel: 123-456-7890",
                "500 Terry Francois St",
                "San Francisco, CA 94158"
            ]
        },
        {
            title: "Navigation",
            list: [
                {
                    title: "Games",
                    path: ROUTES.HOME
                },
                {
                    title: "Careers",
                    path: ROUTES.CAREERS
                },
                {
                    title: "About",
                    path: ROUTES.ABOUT
                },
                {
                    title: "Contact",
                    path: ROUTES.CONTACT
                },
                {
                    title: "Privacy Policy",
                    path: ROUTES.POLICY
                },
                {
                    title: "Terms & Conditions",
                    path: ROUTES.TERMS
                },
            ]
        },
        {
            title: "Social",
            list: [
                {
                    title: "Discord",
                    path: "https://discord.com/"
                },
                {
                    title: "Twitch",
                    path: "https://www.twitch.tv/"
                },
                {
                    title: "Facebook",
                    path: "https://www.facebook.com/"
                },
                {
                    title: "Youtube",
                    path: "https://www.youtube.com/"
                },
                {
                    title: "Twitter",
                    path: "https://twitter.com/"
                },
                {
                    title: "LinkedIn",
                    path: "https://www.linkedin.com/"
                },
            ]
        },
        {
            title: 'Find Us On',
            list: PlatForms
        }
    ],
    coppyRight: '© 2023 by Tripo.'
}