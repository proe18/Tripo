import * as ROUTES from '../constants/routes'

import Manager from "../images/careers_1.jpg"
import Tester from "../images/careers_2.jpg"
import Designer from "../images/careers_3.jpg"
import Developer from "../images/careers_4.jpg"

export const careersData = {
    header: {
        subTitle: "Help Us Change the Way People Play",
        title: "We’re Hiring",
        text: `I'm a paragraph.
        Click here to add your own text and edit me.
        It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.
        I’m a great place for you to tell a story and let your users know a little more about you.`
    },
    jobsPosition: {
        title: 'Job Openings',
        jobs: [
            {
                img: Manager,
                title: "Community Manager",
                path: ROUTES.MANAGER,
                place: "San Francisco, CA",
                text: `I'm a paragraph. 
                Click here to add your own text and edit me.
                I’m a great place for you to tell a story and let your users know a little more about you.
                `,
                button: 'Apply'
            },
            {
                img: Tester,
                title: "QA Tester",
                path: ROUTES.TESTER,
                place: "San Francisco, CA",
                text: `I'm a paragraph. 
                Click here to add your own text and edit me.
                I’m a great place for you to tell a story and let your users know a little more about you.
                `,
                button: 'Apply'
            },
            {
                img: Designer,
                title: "Game Designer",
                path: ROUTES.DESIGNER,
                place: "San Francisco, CA",
                text: `I'm a paragraph. 
                Click here to add your own text and edit me.
                I’m a great place for you to tell a story and let your users know a little more about you.
                `,
                button: 'Apply'
            },
            {
                img: Developer,
                title: "Game Developer",
                path: ROUTES.DEVELOPER,
                place: "San Francisco, CA",
                text: `I'm a paragraph. 
                Click here to add your own text and edit me.
                I’m a great place for you to tell a story and let your users know a little more about you.
                `,
                button: 'Apply'
            }
        ],
        sendCV: {
            subTitle: "Didn’t Find the Position You’re Looking For?",
            title: "Send Us Your CV",
            button: 'Apply Now'
        }
    }
}