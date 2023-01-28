
export const filterData = [
	{
	  id: '0',
	  name: 'Burgers',
	  image: require('../assets/food1.jpg'),
	}, {
		id: '1',
		name: 'Saladas',
		image: require('../assets/food2.jpg'),
	}, {
		id: '2',
		name: 'Mineiro',
		image: require('../assets/food3.jpg'),
	}, {
		id: '3',
		name: 'Pratos',
		image: require('../assets/food4.jpg'),
	}, {
		id: '4',
		name: 'Cat. 4',
		image: require('../assets/food1.jpg'),
	  }, {
		  id: '5',
		  name: 'Cat. 5',
		  image: require('../assets/food2.jpg'),
	  }, {
		  id: '6',
		  name: 'Cat. 6',
		  image: require('../assets/food3.jpg'),
	  }, {
		  id: '7',
		  name: 'Cat. 7',
		  image: require('../assets/food4.jpg'),
	  }

];

export const restaurantData = [
	{
		id: 0,
		restaurantName: 'Hamburgers',
		farAway: '21.2',
		businessAddress: 'Endereco A',
		images: require('../assets/food1.jpg'),
		averageReview: 4.9,
		numberOfReviews: 277,
		coordinates: {lat: -26.18888612, lng: 28.246325},
		discount: 10,
		deliveryTime: 15,
		collectTime: 5,
		foodType: 'Tipo A',
		productData: [
			{name:'food1 A', price: 29.30, image: require('../assets/food1.jpg')},
			{name:'food2 A', price: 16.10, image: require('../assets/food2.jpg')},		
		],
	},
	{
		id: 1,
		restaurantName: 'Saladas',
		farAway: '12',
		businessAddress: 'Endereco B',
		images: require('../assets/food2.jpg'),
		averageReview: 4.2,
		numberOfReviews: 277,
		coordinates: {lat: -26.18888612, lng: 28.246325},
		discount: 10,
		deliveryTime: 15,
		collectTime: 5,
		foodType: 'Tipo B',
		productData: [
			{name:'food1 B', price: 29.30, image: require('../assets/food1.jpg')},
			{name:'food2 B', price: 16.10, image: require('../assets/food2.jpg')},		
		],
	},
	{
		id: 2,
		restaurantName: 'Frutos Mar',
		farAway: '45',
		businessAddress: 'Endereco C',
		images: require('../assets/food3.jpg'),
		averageReview: 3.9,
		numberOfReviews: 277,
		coordinates: {lat: -26.18888612, lng: 28.246325},
		discount: 10,
		deliveryTime: 15,
		collectTime: 5,
		foodType: 'Tipo C',
		productData: [
			{name:'food1 C', price: 29.30, image: require('../assets/food1.jpg')},
			{name:'food2 C', price: 16.10, image: require('../assets/food2.jpg')},		
		],
	}

];
