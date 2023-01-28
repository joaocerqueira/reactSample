import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { colors, parameters, title } from '../../global/styles';
import Header from '../../components/Header';
import * as Animatable from 'react-native-animatable';
import { Icon, Button, SocialIcon } from 'react-native-elements';

export default function SignInScreen({navigation}) {

	const [textInput2Focused, setTextInput2Focused] = useState(false);
	const textInput1 = useRef(1);
	const textInput2 = useRef(2);

	return (
		<View style={styles.container}>
			<Header title={'MY ACCOUNT'} type='arrow-left' navigation={navigation} />
			<View style={{ marginLeft: 20, marginTop: 20 }}>
				<Text style={title} >Sign-in</Text>
			</View>
			<View style={{ alignItems: 'center', marginTop: 10, }}>
				<Text style={styles.text1} >Please enter the email and password</Text>
				<Text style={styles.text1} >registered with your account</Text>
			</View>

			<View style={{ marginTop: 20 }}>
				<View>
					<TextInput
						style={styles.TextInput1}
						placeholder='Email address'
						ref={textInput1}
					/>
				</View>
				<View style={styles.TextInput2}>
					<Animatable.View animation={textInput2Focused ? '' : "fadeInLeft"} duration={400}>
						<Icon
							name='lock'
							iconStyle={{ color: colors.grey3 }}
							type='material'
						/>
					</Animatable.View>
					<TextInput
						placeholder='Password'
						style={{ width: '80%' }}
						ref={textInput2}
						onFocus={() => {
							setTextInput2Focused(false);
						}}
						onBlur={() => {
							setTextInput2Focused(true);
						}}
					/>
					<Animatable.View animation={textInput2Focused ? '' : "fadeInLeft"} duration={400}>
						<Icon
							name='visibility-off'
							iconStyle={{ color: colors.grey3 }}
							type='material'
						/>
					</Animatable.View>
				</View>

				<View style={{ marginHorizontal: 20, marginTop: 30 }}>
					<Button
						title='SIGN IN'
						buttonStyle={parameters.styledButton}
						titleStyle={parameters.buttonTitle} 
						onPress={() => {navigation.navigate('DrawerNavigator')}}
					/>
				</View>

				<View style={{ alignItems: 'center', marginTop: 15 }}>
					<Text style={{ ...styles.text1, textDecorationLine: 'underline' }}>Forgot your password ?</Text>
				</View>

				<View style={{ alignItems: 'center', marginTop: 20, marginBottom: 20 }}>
					<Text style={{ fontSize: 16, fontWeight: 'bold' }}>OR</Text>
				</View>

				<View style={{ marginHorizontal: 20, marginTop: 10 }}>
					<SocialIcon
						title='Sign in with Facebook'
						button
						type='facebook'
						style={styles.SocialIcon}
						onPress={() => { }}
					/>
				</View>

				<View style={{ marginHorizontal: 20, marginTop: 10 }}>
					<SocialIcon
						title='Sign in with Google'
						button
						type='google'
						style={styles.SocialIcon}
						onPress={() => { }}
					/>
				</View>

				<View style={{ marginLeft: 25, marginTop: 15 }}>
					<Text style={{ ...styles.text1, }}>New on xpressFood ?</Text>
				</View>

				<View style={{alignItems: 'flex-end', marginHorizontal: 20}}>
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
	container: {
		flex: 1,
	},
	text1: {
		color: colors.grey3,
		fontSize: 16,
		marginLeft: 20,
	},
	TextInput1: {
		borderWidth: 1,
		borderColor: '#86939e',
		marginHorizontal: 20,
		borderRadius: 12,
		marginBottom: 20,
		padding: 10,
	},
	TextInput2: {
		borderWidth: 1,
		borderRadius: 12,
		marginHorizontal: 20,
		borderColor: '#86939e',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignContent: 'center',
		alignItems: 'center',
		padding: 10,
	},
	SocialIcon: {
		borderRadius: 12,
		height: 50,
	},
	createButton: {
		backgroundColor: 'white',
		alignContent: 'center',
		justifyContent: 'center',
		borderRadius: 12,
		borderWidth: 1,
		borderColor: '#ff8c52',
		height: 40,
		paddingHorizontal: 20,
		},

	createButtonTitle: {
		color: '#ff8c52',
		fontSize: 16,
		fontWeight: 'bold',
		alignContent: 'center',
		justifyContent: 'center',
		marginTop: -3,
	}
});