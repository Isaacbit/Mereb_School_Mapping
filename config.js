var config = {
    style: 'mapbox://styles/yafetbirhanu/ckz48fgzm000z14s0wk7uhsbb',
    accessToken: 'pk.eyJ1IjoieWFmZXRiaXJoYW51IiwiYSI6ImNrejNyc2hlMDA0dXIyeHFmNHh6eTdtajMifQ.FOQ08vFkwNRHCyjmU-qlDQ',
    showMarkers: true,
    markerColor: '#3FB1CE',
    theme: 'dark',
    use3dTerrain: false,
    title: 'Ethiopian Schools With a Modern Network Connectivity.',
    subtitle: 'Opportunity to access free knowledge and use distance learning in times like Covid19.',
    byline: 'iceaddis in Partnership with Ministry of Education',
    footer: 'Powered by: iceaddis',
    chapters: [
        {
            id: 'slug-style-id',
            alignment: 'left',
            hidden: false,
            title: 'Opportunity to access free knowledge',
            image: 'https://github.com/Isaacbit/Mereb_School_Mapping/blob/main/images/pic1.jpg?raw=true',
            description: 'Iceaddis will create an educational network in Ethiopia and interconnect all schools wireless with K3 Air technology and on premise with Cambium Networks With most advanced technology with the most cost effective approach.',
            location: {
                center: [38.75349, 8.99678],
                zoom: 11.66,
                pitch: 34.50,
                bearing: -20.00
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
            id: 'slug-style-id',
            alignment: 'right',
            hidden: false,
            title: 'Network Infrastructure Solution: K3 Air',
            image: 'https://github.com/Isaacbit/Mereb_School_Mapping/blob/main/images/pic1.jpg?raw=true',
            description: '1. Integrated security and content filters <br> 2. Unlimited data <br> 3. Fast <br> 4. Reliable in all weather <br> 5. Highest service standards',
            location: {
                center: [38.74488, 9.01491],
                zoom: 14.19,
                pitch: 60.00,
                bearing: -21.60
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
            alignment: 'left',
            hidden: false,
            title: 'Network Equipment ',
            image: '',
            description: 'On the last mile the K3 towers are equipped with Solar and Batteries and a Generator to avoid power outages. On premise Motorola Canopy WIFI Devices are installed for campus coverage.',
            location: {
                center: [38.73760, 9.02531],
                zoom: 15.19,
                pitch: 38.50,
                bearing: -21.60
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
