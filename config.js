var config = {
    style: 'mapbox://styles/sayali2611/cljp7p2je00tr01pk0tzrdtjk',
    accessToken: 'pk.eyJ1Ijoic2F5YWxpMjYxMSIsImEiOiJjbGpvNTJ0bzcwY2VkM2lxaWhzcXl3OTNjIn0.U4_JbMs8fQU6DjtE475OyQ',
    showMarkers: true,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    theme: 'dark',
    use3dTerrain: true, 
    auto: false,
    title: 'Van Gujjar migration',
    subtitle: 'Following the footsteps of Pastoralists',
    byline: 'By Centre for Pastoralism',
    footer: '',
    chapters: [
        {
            id: 'Tradational routes going towards the nortern alpines',
            alignment: 'left',
            hidden: false,
            title: 'Tradational routes going towards the nortern alpines',
            image: 'https://www.oneearth.org/ecoregions/northwestern-himalayan-alpine-shrub-and-meadows/',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            location: {
                center: [78.29050, 30.10773],
                zoom: 11.73,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'mapbox-satellite',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'mapbox-satellite',
                //     opacity: 1
                // }
            ]
        },
        {
            id: 'The Migratory routes',
            alignment: 'right',
            hidden: false,
            title: 'The Migratory routes',
            image: 'http://www.himalayanmigration.com/',
            description: 'The people of northern India’s Van Gujjar tribe are nomadic water buffalo herders whose lives revolve around caring and finding food for their animals. Winters are spent in the lowland wilderness of the Shivalik Hills, where the thick jungle foliage provides plenty of fodder – and plenty of isolation from the rest of the world. By April, however, temperatures soar above 110 degrees; leaves and grasses wither and die; creeks run dry. With nothing left for their buffaloes to eat or drink, the Van Gujjars must move. Entire families, from infants to the elderly, trek with their herds up into the Himalayas, where melting snows reveal lush alpine meadows laced by gurgling streams.',
            location: {
                center: [77.74538, 31.19580],
                zoom: 8.5,
                pitch: 0,
                bearing: 0,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [final-unique-routes],
            onChapterExit: [final-unique-routes]
        },
       
    ]
};
