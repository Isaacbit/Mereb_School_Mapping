var config = {
    style: 'mapbox://styles/sgmapbox/ck8etv6jr25781jqhhq8clbzc',
    accessToken: 'pk.eyJ1Ijoic2dtYXBib3giLCJhIjoiY2s5NHViY251MDUweDNkbzVnYmJtbXYydCJ9.8Ra0D8yuCz7g6UMyWaMNpA',
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
                center: [38.75116, 9.00903],
                zoom: 13.05,
                pitch: 45.00,
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
            id: 'slug-style-id',
            alignment: 'right',
            hidden: false,
            title: 'Network Infrastructure Solution: K3 Air',
            image: 'https://github.com/Isaacbit/Mereb_School_Mapping/blob/main/images/pic1.jpg?raw=true',
            description: '1. Integrated security and content filters <br> 2. Unlimited data <br> 3. Fast <br> 4. Reliable in all weather <br> 5. Highest service standards',
            location: {
                center: [38.73701, 9.03248],
                zoom: 13.33,
                pitch: 60.00,
                bearing: 104.00
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
            image: 'https://github.com/Isaacbit/Mereb_School_Mapping/blob/main/images/pic2.jpg',
            description: 'On the last mile the K3 towers are equipped with Solar and Batteries and a Generator to avoid power outages. On premise Motorola Canopy WIFI Devices are installed for campus coverage.',
            location: {
                center: [38.77267, 8.99528],
                zoom: 10.85,
                pitch: 45.00,
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
