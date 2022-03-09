var config = {
    style: 'mapbox://styles/yafetbirhanu/ckz48fgzm000z14s0wk7uhsbb',
    accessToken: 'pk.eyJ1IjoieWFmZXRiaXJoYW51IiwiYSI6ImNrejNyc2hlMDA0dXIyeHFmNHh6eTdtajMifQ.FOQ08vFkwNRHCyjmU-qlDQ',
    showMarkers: false,
    theme: 'light',
    title: 'Bridging the e-Learning Gap in Ethiopia',
    subtitle: '',
    byline: '',
    footer: 'Powered by: iceaddis',
    chapters: [
        {
            id: 'phl',
            alignment: 'left',
            title: 'Current State in Ethiopia + Problem Statement',
            image: '',
            description: 'Today in Ethiopia access to quality education remains limited and a luxury to those who have access to the internet. Despite advancements by the Ministry of Education to enable Ethiopian youth with digital, open resources; most of the country still remains in the dark. With wifi penetration at only',
            location: {
				center: [39.00225, 9.04662],
				zoom: 5.18,
				pitch: 15.00,
				bearing: 0.00
            },
            onChapterEnter: [
				{
                    layer: 'ethiopian-schools',
                    opacity: 1
                },
				                {
                    layer: 'eep-selected-tower',
                    opacity: 0
                },
				                {
                    layer: 'eep-buffer-merg',
                    opacity: 0
                },
				                {
                    layer: 'school-view-wgs',
                    opacity: 0
                },
				                {
                    layer: 'snnp-region',
                    opacity: 0
                },
				                {
                    layer: 'snnp-eep-buffer',
                    opacity: 0
                },
				              
				                {
                    layer: 'snnp-eep-locations',
                    opacity: 0
                },
				                {
                    layer: 'snnp-schools-grouped',
                    opacity: 0
                },
				                {
                    layer: 'alaba-zone',
                    opacity: 0
                }
            ],
            onChapterExit: [

            ]
        },
        {
            id: 'bike-lanes',
            alignment: 'right',
            title: 'Connectivity Insights / Research Findings',
            image: '',
            description: 'How many students in ethiopia currently use e-learning? What projections can be made on how can this number can expand with increased connectivity? What does educational inequity driven by lack of connectivity in Ethiopia look like? (need stats)',
            location: {
				center: [38.45382, 7.53192],
				zoom: 5.79,
				pitch: 0.00,
				bearing: 0.00
            },
            onChapterEnter: [
 			
				
				{
                    layer: 'ethiopian-schools',
                    opacity: 0
                },
				                {
                    layer: 'eep-selected-tower',
                    opacity: 1
                },
				                {
                    layer: 'eep-buffer-merg',
                    opacity: 1
                },
				                {
                    layer: 'school-view-wgs',
                    opacity: 1
                },
				                {
                    layer: 'snnp-region',
                    opacity: 0
                },
				                {
                    layer: 'snnp-eep-buffer',
                    opacity: 0
                },
				              
				                {
                    layer: 'snnp-eep-locations',
                    opacity: 0
                },
				                {
                    layer: 'snnp-schools-grouped',
                    opacity: 0
                },
				                {
                    layer: 'alaba-zone',
                    opacity: 0
                }
            ],
			onChapterExit: [
							
						]
        },
        {
            id: 'indego',
            alignment: 'right',
            title: 'Chapter Three',
            image: '',
            description: 'Indego has been operating in Philadelphia since 20XX. The system initally was focused on Center City, but has expanded service to neighboring areas to support equitable mobility options to the city\'s residents.',
            location: {
				center: [36.54895, 6.46459],
				zoom: 6.55,
				pitch: 0.00,
				bearing: 0.00
            },
            onChapterEnter: [
   
				
				{
                    layer: 'ethiopian-schools',
                    opacity: 0
                },
				                {
                    layer: 'eep-selected-tower',
                    opacity: 0
                },
				                {
                    layer: 'eep-buffer-merg',
                    opacity: 0
                },
				                {
                    layer: 'school-view-wgs',
                    opacity: 0
                },
				                {
                    layer: 'snnp-region',
                    opacity: 1
                },
				                {
                    layer: 'snnp-eep-buffer',
                    opacity: 1
                },
				              
				                {
                    layer: 'snnp-eep-locations',
                    opacity: 1
                },
				                {
                    layer: 'snnp-schools-grouped',
                    opacity: 1
                },
				                {
                    layer: 'alaba-zone',
                    opacity: 0
                }

            ],
			onChapterExit: [
							
						]
        },
        {
            id: 'belmont',
            alignment: 'right',
            title: 'Chapter Four',
            image: '',
            description: 'A short ride along the Schuylkill River Trail from the Art Museum, Belmont is a twisty, log-ridden rollercoaster of a trail network. It is easy to get turned around, the underbrush is at times impenetrable, and short steep sections come out of nowhere. In other words, it\'s really fun',
            location: {
				center: [38.10846, 7.17448],
				zoom: 8.64,
				pitch: 0.00,
				bearing: 0.00
            },
            onChapterEnter: [
				
				{
                    layer: 'ethiopian-schools',
                    opacity: 0
                },
				                {
                    layer: 'eep-selected-tower',
                    opacity: 0
                },
				                {
                    layer: 'eep-buffer-merg',
                    opacity: 0
                },
				                {
                    layer: 'school-view-wgs',
                    opacity: 0
                },
				                {
                    layer: 'snnp-region',
                    opacity: 1
                },
				                {
                    layer: 'snnp-eep-buffer',
                    opacity: 1
                },
				              
				                {
                    layer: 'snnp-eep-locations',
                    opacity: 1
                },
				                {
                    layer: 'snnp-schools-grouped',
                    opacity: 1
                },
				                {
                    layer: 'alaba-zone',
                    opacity: 1
                }
				
            ],
			onChapterExit: [
							
						]
        }
    ]
};
