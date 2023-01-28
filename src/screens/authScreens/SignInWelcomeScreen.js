import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { colors, parameters } from '../../global/styles';
import Swiper from 'react-native-swiper';
import { Button } from 'react-native-elements';

export default function SignInWelcomeScreen({navigation}) {

	return (
		<View style={{ flex: 1 }}>
			<View style={{ flex: 3, justifyContent: 'flex-start', alignItems: 'center', paddingTop: 20 }}>
				<Text style={{ fontSize: 26, color: colors.buttons, fontWeight: 'bold' }} >DISCOVER RESTAURANTS</Text>
				<Text style={{ fontSize: 26, color: colors.buttons, fontWeight: 'bold' }} >IN YOUR AREA</Text>
			</View>

			<View style={{ flex: 4, justifyContent: 'center' }}>
				<Swiper autoplay={true}>
					<View style={styles.slide1}>
						<Image
							source={require('../../images/food1.jpg')}
							style={{ height: '100%', width: '100%' }}
						/>
					</View>
					<View style={styles.slide2}>
						<Image
							source={require('../../images/food2.jpg')}
							style={{ height: '100%', width: '100%' }}
						/>
					</View>
					<View style={styles.slide3}>
						<Image
							source={require('../../images/food3.jpg')}
							style={{ height: '100%', width: '100%' }}
						/>
					</View>
					<View style={styles.slide3}>
						<Image
							source={require('../../images/food4.jpg')}
							style={{ height: '100%', width: '100%' }}
						/>
					</View>
				</Swiper>
			</View>

			<View style={{ flex: 4, justifyContent: 'flex-end', marginBottom: 20 }}>
				<View style={{ marginHorizontal: 20, marginTop: 20 }}>
					<Button
						title='SIGN IN'
						buttonStyle={parameters.styledButton}
						titleStyle={parameters.buttonTitle} 						
						onPress={() => {
							navigation.navigate('SignInScreen');
						}}
					/>
				</View>
				<View style={{marginHorizontal: 20, marginTop: 30}}>
					<Button 
						title='Create an account' 
						buttonStyle={styles.createButton} 
						titleStyle={styles.createButtonTitle} 
					/>
				</View>
			</View>
			
		</View>
	)
};

const styles = StyleSheet.create({
	slide1: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#9DD6EB'
	},
	slide2: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#97CAE5'
	},
	slide3: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#92BBD9'
	},
	createButton: {
		backgroundColor: 'white',
		alignContent: 'center',
		justifyContent: 'center',
		borderRadius: 12,
		borderWidth: 1,		
		height: 50,
		paddingHorizontal: 20,
		borderColor: colors.buttons,
	},
	createButtonTitle: {
		color: colors.grey1,
		fontSize: 20,
		fontWeight: 'bold',
		alignContent: 'center',
		justifyContent: 'center',
		marginTop: -3,
	}
});
