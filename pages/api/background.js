const background = [
    {
        eduCards: [
            {
                id: 0,
                title: 'National Inter College Moonda Diha Beg Sant Kabir Nagar Uttar Pradesh',
                degree: 'Metric/HighSchool',
                detail: " Completed From Metric/HighSchool from National Inter College",
                year: '2019-2021'
            },
            {
                id: 1,
                title: 'Unique Science Senior Secondary School. Rauta Chauraha Basti Uttar Pradesh',
                degree: 'Intermediate/Higher Secondary ',
                detail: "Completed Intermediate/Higher Secondary from Unique Science Senior Secondary School.",
                year: '2021-2023'
            },
            {
                id: 2,
                title: 'A.R.C Degree College Moonda diha Beg Sant Kabir Nagar Uttar Pradseh',
                degree: 'Bachelor of Computer Applications',
                detail: "Pursuing",
                year: '2023-Present'
            },
        ]
    },
    {
        expCards: [
            {
                id: 1,
                title: '   ',
                role: 'Frontend Developer',
                url: 'No Website',
                desc: 'As a frontend developer, I use React, Next & JavaScript to build user interfaces for web applications.',
                year: '03/2023 - Present',
                location: 'New Delhi ,India'
            },
            {
                id: 2,
                title: 'Netguru Solution India Pvt. Ltd.',
                role: 'Internee',
                url: 'No Website',
                desc: 'As an Internee, I learned how to use React & JavaScript to build interactive websites.',
                year: '11/2021-11/2022',
                location: 'Pune, India'
            },
           

        ]
    }
]


export default function handler(req, res) {
    res.status(200).json(background)
}
