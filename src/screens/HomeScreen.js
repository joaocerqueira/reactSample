import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, ScrollView, FlatList, Image, Dimensions } from 'react-native';
import { Icon } from 'react-native-elements';
import { filterData, restaurantData } from '../global/Data';
import FoodCard from '../components/FoodCard';
import HomeHeader from '../components/HomeHeader';
import { colors } from '../global/styles';
import CountDown from 'react-native-countdown-component';

const SCREEN_WIDTH = Dimensions.get('window').width;

export default function HomeScreen({ navigation }) {

	const [delivery, setDelivery] = useState(true);
	const [indexCheck, setIndexCheck] = useState('0');

	function setIndexCheckClick(item) {
		setIndexCheck(item.id);
	}

	return (
		<View style={styles.container}>
			<HomeHeader navigation={navigation}/>
			<ScrollView
				stickyHeaderIndices={[0]}
				showsVerticalScrollIndicator={true}
			>


				{/* DELIVERY/PICK UP BUTTONS */}
				<View style={{ backgroundColor: 'white', paddingBottom: 15 }}>
					<View style={{ marginTop: 10, flexDirection: 'row', justifyContent: 'space-evenly' }}>
						<TouchableOpacity
							onPress={() => {
								setDelivery(true);
							}}>
							<View style={{ ...styles.deliveryButton, backgroundColor: delivery ? colors.buttons : colors.grey4 }}>
								<Text style={styles.deliveryText}>Delivery</Text>
							</View>
						</TouchableOpacity>
						<TouchableOpacity
							onPress={() => {
								setDelivery(false);
								navigation.navigate('RestaurantsMapScreen');
							}}>
							<View style={{ ...styles.deliveryButton, backgroundColor: delivery ? colors.grey5 : colors.buttons }}>
								<Text style={styles.deliveryText}>Pick up</Text>
							</View>
						</TouchableOpacity>
					</View>
				</View>


				{/* ADDRESS FILTER */}
				<View style={styles.filterView}>
					<View style={styles.adressView}>
						<View style={styles.mapMarkerView}>
							<Icon
								type='material-community'
								name="map-marker"
								color={colors.grey1}
								size={26}
							/>
							<Text style={{ marginLeft: 5 }}>Rua Guadalajara 5</Text>
						</View>
						<View style={styles.clockView}>
							<Icon
								type='material-community'
								name="clock-time-four"
								color={colors.grey1}
								size={26}
							/>
							<Text style={{ marginLeft: 5, marginRight: 10 }}>Now</Text>
						</View>
					</View>
					<View style={styles.tuneView}>
						<Icon
							type='material-community'
							name="tune"
							color={colors.grey1}
							size={26}
						/>
					</View>
				</View>


				{/* FLATLIST MINI HORIZONTAL */}
				<View style={styles.headerTextView}>
					<Text style={styles.headerText}>Categories</Text>
				</View>
				<View>
					<FlatList
						horizontal={true}
						showsHorizontalScrollIndicator={false}
						data={filterData}
						keyExtractor={(item, index) => item.id}
						extraData={indexCheck}
						renderItem={({ item, index }) => (
							<TouchableOpacity
								onPress={() => { setIndexCheckClick(item) }}
								activeOpacity={0.5}
							>
								<View style={indexCheck === item.id ? { ...styles.smallCardSelected } : { ...styles.smallCard }}>
									<Image style={styles.smallCardImage} source={item.image} />
									<View>
										<Text style={indexCheck === item.id ? { ...styles.smallCardTextSelected } : { ...styles.smallCardText }}>{item.name}</Text>
									</View>
								</View>
							</TouchableOpacity>
						)}
					/>
				</View>


				{/* FLATLIST CARD HORIZONTAL */}
				<View style={styles.headerTextView}>
					<Text style={styles.headerText}>Free Delivery Now</Text>
				</View>

				<View>

					{/* COUNTDOWN */}
					<View style={{ flexDirection: 'row', marginTop: 10 }}>
						<Text style={{ marginLeft: 15, fontSize: 16, marginTop: 10, marginRight: 5 }}>Options changing in</Text>
						<CountDown
							until={3600}
							size={14}
							digitStyle={{ backgroundColor: colors.lightgreen }}
							timeToShow={['M', 'S']}
							timeLabels={{ m: 'Min', s: 'Seg' }}
							digitTxtStyle={{ color: 'white' }}
						/>
					</View>

					<FlatList
						style={{ marginTop: 10, marginBottom: 10 }}
						horizontal={true}
						data={restaurantData}
						keyExtractor={(item, index) => index.toString()}
						showsHorizontalScrollIndicator={false}
						renderItem={({ item, index }) => (
							<View>
								<FoodCard
									screenWith={SCREEN_WIDTH * 0.8}
									images={item.images}
									restaurantName={item.restaurantName}
									averageReview={item.averageReview}
									numberOfReview={item.numberOfReview}
									businessAddress={item.businessAddress}
									farAway={item.farAway}
								/>
							</View>
						)}
					/>
				</View>

				{/* FLATLIST CARD VERTICAL */}
				<View style={styles.headerTextView}>
					<Text style={styles.headerText}>Restaurantes in Area</Text>
				</View>
				<View style={{ width: SCREEN_WIDTH, paddingTop: 10 }}>
					{
						restaurantData.map(item => (
							<View key={item.id} style={{ paddingBottom: 20 }}>
								<FoodCard
									screenWith={SCREEN_WIDTH * 0.95}
									images={item.images}
									restaurantName={item.restaurantName}
									averageReview={item.averageReview}
									numberOfReview={item.numberOfReview}
									businessAddress={item.businessAddress}
									farAway={item.farAway}
								/>
							</View>
						))
					}
				</View>


			</ScrollView>

			{/* MAP ICON */}
			{delivery &&
				<View styles={styles.mapFloatingButton}>
					<TouchableOpacity
						onPress={() => {
							navigation.navigate('RestaurantsMapScreen');
						}}
					>
						<Icon
							name="place"
							type="material"
							size={32}
							color={colors.buttons}
						/>
						<Text styles={{ color: colors.grey2  }}>Map</Text>
					</TouchableOpacity>
				</View>
			}
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	deliveryButton: {
		paddingHorizontal: 20,
		borderRadius: 20,
		paddingVertical: 5
	},
	deliveryText: {
		marginLeft: 5,
		fontSize: 16,
	},
	filterView: {
		flexDirection: 'row',
		alignItems: 'center',
		alignItems: 'flex-end', // meu fix
		justifyContent: 'space-evenly',
		marginHorizontal: 10,
		marginVertical: 10,
		marginTop: 15, // meu
		marginLeft: 20 // meu
	},
	mapMarkerView: {
		flexDirection: 'row',
		alignItems: 'center',
		paddingLeft: 10
	},
	adressView: {
		flexDirection: 'row',
		backgroundColor: colors.grey5,
		borderRadius: 15,
		paddingVertical: 3,
		justifyContent: 'space-between',
		paddingHorizontal: 10
	},
	clockView: {
		flexDirection: 'row',
		alignItems: 'center',
		marginLeft: 20,
		backgroundColor: colors.cardbackground,
		borderRadius: 15,
		paddingHorizontal: 5,
		marginRight: 20
	},
	tuneView: {

	},

	headerTextView: {
		backgroundColor: colors.grey5,
		paddingVertical: 5,
		marginTop: 10, // meu
	},
	headerText: {
		color: colors.grey2,
		fontSize: 24,
		fontWeight: "bold",
		paddingLeft: 20,
	},

	smallCard: {
		borderRadius: 30,
		backgroundColor: colors.grey5,
		justifyContent: "center",
		alignItems: "center",
		padding: 5,
		width: 80,
		margin: 10,
		height: 100
	},
	smallCardSelected: {
		borderRadius: 30,
		backgroundColor: colors.buttons,
		justifyContent: "center",
		alignItems: "center",
		padding: 5,
		width: 80,
		margin: 10,
		height: 100
	},
	smallCardText: {
		fontWeight: "bold",
		color: colors.grey2,

	},
	smallCardTextSelected: {
		fontWeight: "bold",
		color: colors.cardbackground,

	},
	smallCardImage: {
		borderRadius: 20,
		width: 60,
		height: 50,
	},

	mapFloatingButton: {
		position: 'absolute',
		bottom: 10,
		right: 15,
		backgroundColor: 'white',
		elevation: 10,
		width: 60,
		height: 60,
		borderRadius: 30,		
		alignItems: 'center',
		borderColor: colors.grey1, // meu
		borderWidth: 10, // meu
	},
});