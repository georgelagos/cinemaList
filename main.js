(function() {

window.App = {

	Models: {},
	Collections: {},
	Views: {}
	
};

App.Models.MapPoint =  Backbone.Model.extend({

	defaults: {
		chain: '',
		theatre: '',
		address: '',
		lat: 0,
		lng: 0
	},
	getLatLng: function () {
		
		return {lat: this.get('lat'), lng: this.get('lng')};		
	} 

});

App.Collections.MapPoints = Backbone.Collection.extend({

	model: App.Models.MapPoint,
	parse: function(data){
		return data.movieTheaters;
	}
});

App.Views.Checkbox = Backbone.View.extend({
	tagName: 'span',
	render: function() {
		var html = '<input type=\"checkbox\" checked=\"true\" id=\"'+ 
			this.model.get('chain') +'\">' + this.model.get('chain');
		this.$el.html(html);
		return this;
	
	}
});



App.Views.Checkboxes = Backbone.View.extend({
	el: '#options',
	initialize:  function () {
		this.removedMapPoints = new App.Collections.MapPoints ();
	},
	
	render: function () {
	
		var uniqColl = this.getUniq();
		
		uniqColl.each(function(model){
			this.addOne(model);
		}, this);
		
	return this;
	},
	addOne: function(mapPoint) {
		var checkboxView = new App.Views.Checkbox({model: mapPoint});
		checkboxView.render();
		this.$el.append(checkboxView.el);
	},
	getUniq: function () {
	
		var chainList = this.collection;
		var uniqColl = new App.Collections.MapPoints;
		var unique = "";
		
	
		this.collection.each( function(model)  {
			
			if (unique == model.get('chain') ){
				//do nothing
			}
			else {
				uniqColl.push(model);
				unique = model.get('chain');
			}
		
		});
		return uniqColl;
	},
	events: {
	
		'click input': 'clicked'
	
	},
	clicked: function (e) {

		isChecked = e.currentTarget.checked;
		chainClicked = e.currentTarget.id;

	
		if (isChecked) {
			//load data
			var itemsToLoad = this.removedMapPoints.where({'chain': chainClicked});
			this.removedMapPoints.remove(itemsToLoad);
			this.collection.add(itemsToLoad);
		}
		else {
			//remove data
			var itemsToRemove = this.collection.where({'chain': chainClicked});
			this.removedMapPoints.add(itemsToRemove);
			this.collection.remove(itemsToRemove);
			
		};
		
	}
	
});

App.Views.Map = Backbone.View.extend ( {

	initialize: function() {
	
		this.collection.on('update', this.render, this);		
	},
	render: function () {
	
		googleMap = new google.maps.Map(document.getElementById('map'), {
		center: {lat: 34.049857, lng: -118.243842}, // Los Angeles
		zoom: 10
		});
		
		this.collection.each(function(model) {
		
			var location = model.getLatLng();
			
			
			var marker = new google.maps.Marker({
				position: location,
				map: googleMap,
				label: model.get('chain')
			});
			
			var infoWindow = new google.maps.InfoWindow({

				content: '<div>'+model.get('theater')+'</div>'+
				'<div>'+ model.get('address')+'</div>'+'<div>'+
				'<a href=\"'+model.get('url')+'\">Website</a>' +
				'</div>'

			});

			marker.addListener('click', function () {

				infoWindow.open(googleMap, marker)
			})
		}, this)

	}

		

});


var mapPointsColl = new App.Collections.MapPoints (movieTheaters);

var checkboxesView = new App.Views.Checkboxes({collection: mapPointsColl});

checkboxesView.render();

var mapView = new App.Views.Map({collection: mapPointsColl});

mapView.render();

})();
