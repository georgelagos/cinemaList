var rawData = [ ['AMC','AMC Century City 15','Westfield Century City, 10250 Santa Monica Blvd, Los Angeles, CA 90067',34.057361, -118.418573, 'https://www.amctheatres.com/movie-theatres/los-angeles/amc-century-city-15'],['AMC','AMC Dine-in Theatres Marina 6','Villa Marina Marketplace Mall, 13455 Maxella Ave #280, Marina Del Rey, CA 90292',33.987395, -118.440929,'https://www.amctheatres.com/movie-theatres/los-angeles/amc-dine-in-theatres-marina-6'],['AMC','AMC Universal CityWalk 19 with IMAX (Los Angeles)','100 Universal City Plaza, Universal City, CA 91608',34.137087, -118.352526,'https://www.amctheatres.com/movie-theatres/los-angeles/amc-universal-citywalk-19-los-angeles'],['AMC','AMC Atlantic Times Square 14','450 N Atlantic Blvd, Monterey Park, CA 91754',34.067551, -118.133540,'https://www.amctheatres.com/movie-theatres/los-angeles/amc-atlantic-times-square-14'],['AMC','AMC Montebello 10','1475 N Montebello Blvd, Montebello, CA 90640',34.033994, -118.092728,'https://www.amctheatres.com/movie-theatres/los-angeles/amc-montebello-10'],['Cinemark','Cinemark Playa Vista And XD','12746 W Jefferson Blvd #3190, Los Angeles, CA 90094',33.977456, -118.416450,'http://www.cinemark.com/theatre-detail.aspx?node_id=347542&'],['Cinemark','Cinemark Xd','6081 Center Dr, Los Angeles, CA 90045',33.978072, -118.391923,'http://www.cinemark.com/theatre-detail.aspx?node_id=83827'],['Cinemark','Cinemark 14','4480 Apollo Way, Downey, CA 90242',33.923830, -118.130323,'http://www.cinemark.com/theatre-detail.aspx?node_id=737078&'],['Cinemark','Cinemark Theatres','SouthBay Pavilion Mall, 20700 Avalon Blvd, Carson, CA 90746',33.844984, -118.261500,'http://www.cinemark.com/theatre-detail.aspx?node_id=538981&'],['Cinemark','Cinemark At the Pike','The Pike at Rainbow Harbor, 99 S Pine Ave, Long Beach, CA 90802',33.764735, -118.192981,'http://www.cinemark.com/theatre-detail.aspx?node_id=1587&'],['Laemmle','Laemmle Royal','11523 Santa Monica Blvd, Los Angeles, CA 90025',34.045433, -118.452794,'http://www.laemmle.com/theaters/1'],['Laemmle','Ahrya Fine Arts by Laemmle','8556 Wilshire Blvd, Beverly Hills, CA 90211',34.065296, -118.377898,'http://www.laemmle.com/theaters/25'],['Laemmle','Laemmle\'s Music Hall 3','9036 Wilshire Blvd, Beverly Hills, CA 90211',34.066833, -118.388923,'http://www.laemmle.com/theaters/4'],['Laemmle','LAEMMLE NoHo 7','5240 Lankershim Blvd, Los Angeles, CA 91601',34.166069, -118.374966,'http://www.laemmle.com/theaters/23'],['Laemmle','Laemmle Playhouse 7','673 E Colorado Blvd, Pasadena, CA 91101',34.146020, -118.136431,'http://www.laemmle.com/theaters/6'],['Landmark Theatres','Landmark Theatres','Westside Pavilion Mall, 10850 W Pico Blvd, Los Angeles, CA 90064',34.039621, -118.428939,'http://www.landmarktheatres.com/los-angeles/the-landmark'],['Landmark Theatres','Nuart Theatre','11272 Santa Monica Blvd, Los Angeles, CA 90025',34.046308, -118.447902,'http://www.landmarktheatres.com/los-angeles/nuart-theatre'],['Landmark Theatres','Landmark Regent','1045 Broxton Ave, Los Angeles, CA 90024',34.061555, -118.446680,'http://www.landmarktheatres.com/los-angeles/regent-theatre'],['Regal Cinemas','Regal LA LIVE Stadium 14','1000 W Olympic Blvd, Los Angeles, CA 90015',34.045740, -118.268026,'http://www.regmovies.com/theatres/theatre-folder/regal-la-live-stadium-14-8900'],['ArcLight Cinemas','ArcLight Hollywood','6360 W. Sunset Blvd., Los Angeles, CA 90028',34.097139, -118.327321,'https://www.arclightcinemas.com/en/locations/los-angeles/hollywood/showtimes?origin=Hollywood'],['ArcLight Cinemas','ArcLight Culver City','9500 Culver Blvd. Culver City, CA 90232',34.023451, -118.394085,'https://www.arclightcinemas.com/en/locations/los-angeles/culver-city/showtimes'],['ArcLight Cinemas','ArcLight Santa Monica','395 Santa Monica Place, Suite 330 Santa Monica, CA 90401',34.013934, -118.492886,'https://www.arclightcinemas.com/en/locations/los-angeles/santa-monica/showtimes'],['ArcLight Cinemas','ArcLight Beach Cities','831 S. Nash St., El Segundo, CA 90245',33.903497, -118.388973,'https://www.arclightcinemas.com/en/locations/los-angeles/beach-cities/showtimes'],['ArcLight Cinemas','ArcLight Pasadena','300 E Colorado Blvd, Pasadena, CA 91129',34.145626, -118.144021,'https://www.arclightcinemas.com/en/locations/los-angeles/pasadena/showtimes']];
movieTheaters = [];



for (i = 0; i < rawData.length; i++ ) {

	movieTheaters.push(toJSONObject(rawData[i]));

};

function toJSONObject (arr) {
	var jsonObj = {

		chain: '',
		theater: '',
		address: '',
		lat: 0,
		lng: 0,
		url: ''
	};

	jsonObj.chain = arr[0];
	jsonObj.theater = arr[1];
	jsonObj.address = arr[2];
	jsonObj.lat = arr[3];
	jsonObj.lng = arr[4];
	jsonObj.url = arr[5];
	
	
	return jsonObj;
		
};