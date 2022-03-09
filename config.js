var config = {
    style: 'mapbox://styles/yafetbirhanu/ckz48fgzm000z14s0wk7uhsbb',
    accessToken: 'pk.eyJ1IjoieWFmZXRiaXJoYW51IiwiYSI6ImNrejNyc2hlMDA0dXIyeHFmNHh6eTdtajMifQ.FOQ08vFkwNRHCyjmU-qlDQ',
    showMarkers: false,
    theme: 'light',
    title: '',
    subtitle: '',
    byline: '',
    footer: '',
    chapters: [
        {
            id: 'phl',
            alignment: 'right',
            title: 'Chapter One',
            image: '',
            description: 'Getting around Philadelphia on two wheels is fast, fun, and cheap. As a typical East Coast large city, the urban core is dense, so there is a lot within reach of a 15 minute ride... even mountain bike trails. Paired with the public transit infrastructure, cycling can be more efficient and much less expensive than driving (and parking) a car.',
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
            title: 'Chapter Two',
            image: '',
            description: 'Philadelphia has XX miles of bike lanes, XX miles of which are protected. Drivers are getting more used to sharing the road, but ride defensively.',
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
