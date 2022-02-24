var config = {
    style: 'mapbox://styles/yafetbirhanu/ckz48fgzm000z14s0wk7uhsbb',
    accessToken: 'pk.eyJ1IjoieWFmZXRiaXJoYW51IiwiYSI6ImNrejNyc2hlMDA0dXIyeHFmNHh6eTdtajMifQ.FOQ08vFkwNRHCyjmU-qlDQ',
    showMarkers: true,
    markerColor: '#3FB1CE',
    theme: 'dark',
    use3dTerrain: false,
    title: 'Bridging the e-Learning Gap in Ethiopia.',
    subtitle: 'Opportunity to access free knowledge and use distance learning in times like Covid19.',
    byline: 'iceaddis in Partnership with Ministry of Education',
    footer: 'Powered by: iceaddis',
    chapters: [
        {
            id: 'slug-style-id',
            alignment: 'left',
            hidden: false,
            title: 'Current State in Ethiopia + Problem Statement',
            image: 'https://github.com/Isaacbit/Mereb_School_Mapping/blob/main/images/pic1.jpg?raw=true',
            description: 'Today in Ethiopia access to quality education remains limited and a luxury to those who have access to the internet. Despite advancements by the Ministry of Education to enable Ethiopian youth with digital, open resources; most of the country still remains in the dark. With wifi penetration at only…… <br> This in conjunction to the ongoing pandemic, which has globally redefined how students learn in the classroom has cemented e-learning at the forefront of the digital revolution and key component to ensuring learning continues through instability. Expanding connectivity in Ethiopia protects the right to schooling for its students despite their socioeconomic status or geographic location.',
            location: {
                center: [39.00225, 9.04662],
                zoom: 5.18,
                pitch: 15.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                     layer: 'ethiopian-border',
                     opacity: 1,
                     duration: 5000
                }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        
        {
            id: 'slug-style-id2',
            alignment: 'right',
            hidden: false,
            title: 'Connectivity Insights / Research Findings',
            image: 'https://github.com/Isaacbit/Mereb_School_Mapping/blob/main/images/pic1.jpg?raw=true',
            description: '1 - How many students in ethiopia currently use e-learning? What projections can be made on how can this number can expand with increased connectivity? <br> 2 - What does educational inequity driven by lack of connectivity in Ethiopia look like? (need stats) <br> 3 - How many students are there in ethiopia and how many don’t have access to the internet? <br> 4 - How many students have limited access to the internet, where the existing bandwidth isn’t sufficient for e-learning connection? <br> 5 - Demographic information on those with and without connection in Ethiopia',
            location: {
                center: [38.45382, 7.53192],
                zoom: 5.79,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'slug-style-id3',
            alignment: 'left',
            hidden: false,
            title: 'Proposal + The Solution',
            image: 'https://github.com/Isaacbit/Mereb_School_Mapping/blob/main/images/pic1.jpg?raw=true',
            description: '1. The Ministry of Education is planning to connect all schools in Ethiopia with an educational backbone to access e-learning services in their central data center in Addis Ababa and for interconnectivity between the schools. <br> 2. Iceaddis created this proposal for supplying a crucial component in this endeavor. With K3 Telecom technology it is intended to bridge the last mile to the schools from the EEP towers and provide high speed connections to the Data center with a guaranteed bandwidth of minimum 300 Mbit per school or receiver.',
            location: {
                center: [36.54895, 6.46459],
                zoom: 6.55,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'other-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Impact + Added Value ',
            image: '',
            description: 'One K3 tower can cover a surrounding area of 50km and more. Iceaddis analyzed the geographical topology of Addis Ababa and can cover all schools and the entire city perimeter with 6 Towers. <br> Further, the Ministry of Education can broadcast educational content and live lessons to everyone in the vicinity with more than 150 channels. <br> This project is intended to cover 3,500 secondary schools across Ethiopia.',
            location: {
                center: [38.10846, 7.17448],
                zoom: 8.64,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
