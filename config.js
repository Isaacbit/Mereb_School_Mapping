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
            id: 'first',
            alignment: 'left',
            title: 'Current State of Connectivity in Ethiopia',
            image: '<img src="/Pic1new.jpg" alt="Student">',
            description: 'Today access to quality education remains limited for the majority of the country. Despite advancements by the Ministry of Education to equip Ethiopian youth with digital, open resources; most Ethiopians still remain in the dark with wifi penetration at only 15%.',
            location: {
		center: [11.56910, 1.96241],
		zoom: 2.48,
		pitch: 0.00,
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
            id: 'phl',
            alignment: 'left',
            title: 'Redefining Educational Equity Through Connectivity',
            image: '',
            description: 'The ongoing global pandemic has redefined how students learn from the classroom over the world. Increased connectivity cements e-learning at the forefront of Africa’s digital transformation and serves as a key component to ensuring learning continues despite instability. ',
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
		    {
                    layer: 'alaba-zone',
                    opacity: 0
                }

            ]
        },
        {
            id: 'bike-lanes',
            alignment: 'right',
            title: 'Bridging the Connectivity Gap',
            image: '',
            description: 'The Ministry of Education is planning to connect all schools in Ethiopia with an educational backbone to access e-learning services in their central data center in Addis Ababa and for interconnectivity between the schools. <br> <br>Expanding connectivity in Ethiopia protects the right to schooling for students regardless of socioeconomic status or geographic location.',
            location: {
				center: [38.45382, 7.53192],
				zoom: 5.79,
				pitch: 0.00,
				bearing: 0.00
            },
            oonChapterEnter: [
 			
				
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
            alignment: 'left',
            title: 'The Solution',
            image: '',
            description: 'iceaddis created this proposal for supplying a crucial component in this endeavor. With K3 Telecom technology it is intended to bridge the last mile to the schools from the EEP towers and provide high speed connections to the Data center with a guaranteed bandwidth of minimum 300 Mbit per school or receiver.',
            location: {
				center: [36.54895, 6.46459],
				zoom: 6.55,
				pitch: 0.00,
				bearing: 0.00
            },
            nChapterEnter: [
   
				
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
            title: 'The Impact',
            image: '',
            description: 'One K3 tower can cover a surrounding area of 50km and more. Iceaddis conducted a pilot study and analyzed the geographical topology of Addis Ababa to discover the K3 technology can be used to cover all schools and the entire city perimeter with 6 Towers. <br> <br>Further, the Ministry of Education can broadcast educational content and live lessons to everyone in the vicinity with more than 150 channels. <br> <br>This project is intended to cover 3,500 secondary schools across Ethiopia.',
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
