import { PlatForms } from './Platforms_data'

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
                    path: "/"
                },
                {
                    title: "Careers",
                    path: "/careers"
                },
                {
                    title: "About",
                    path: "/about"
                },
                {
                    title: "Contact",
                    path: "/"
                },
                {
                    title: "Privacy Policy",
                    path: "/privacy-policy"
                },
                {
                    title: "Terms & Conditions",
                    path: "/terms-and-conditions"
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