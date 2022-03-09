var config = {
    style: 'mapbox://styles/yafetbirhanu/ckz48fgzm000z14s0wk7uhsbb',
    accessToken: 'pk.eyJ1IjoieWFmZXRiaXJoYW51IiwiYSI6ImNrejNyc2hlMDA0dXIyeHFmNHh6eTdtajMifQ.FOQ08vFkwNRHCyjmU-qlDQ',
    showMarkers: false,
    theme: 'dark',
    title: 'Bridging the e-Learning Gap in Ethiopia',
    subtitle: 'Connecting Ethiopian Youth to Educational Equity',
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
	    
	    mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
		
            onChapterEnter: [
				{
                    layer: 'ethiopian-schools',
                    opacity: 1
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
                    opacity: 1
                },
				                {
                    layer: 'snnp-eep-buffer',
                    opacity: 1
                },
				              
				                {
                    layer: 'snnp-eep-locations',
                    opacity: 0
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
		    {
                    layer: 'alaba-zone',
                    opacity: 0
                }

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
                    opacity: 0
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
            alignment: 'left',
            title: 'Proposal + The Solution',
            image: '',
            description: 'Iceaddis created this proposal for supplying a crucial component in this endeavor. With K3 Telecom technology it is intended to bridge the last mile to the schools from the EEP towers and provide high speed connections to the Data center with a guaranteed bandwidth of minimum 300 Mbit per school or receiver.',
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
                    opacity: 1
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
                    opacity: 1
                },
				                {
                    layer: 'snnp-schools-grouped',
                    opacity: 0
                },
				                {
                    layer: 'alaba-zone',
                    opacity: 1
                }

            ],
			onChapterExit: [
							
						]
        },
        {
            id: 'belmont',
            alignment: 'right',
            title: 'Impact + Added Value',
            image: '',
            description: 'One K3 tower can cover a surrounding area of 50km and more. Iceaddis analyzed the geographical topology of Addis Ababa and can cover all schools and the entire city perimeter with 6 Towers. ',
            location: {
				center: [38.10846, 7.17448],
				zoom: 8.64,
				pitch: 0.00,
				bearing: 0.00
            },
            onChapterEnter: [
				
				{
                    layer: 'ethiopian-schools',
                    opacity: 1
                },
				                {
                    layer: 'eep-selected-tower',
                    opacity: 1
                },
				                {
                    layer: 'eep-buffer-merg',
                    opacity: 0
                },
				                {
                    layer: 'school-view-wgs',
                    opacity: 1
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
