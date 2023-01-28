import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';
import { colors, parameters } from '../global/styles';
import { useNavigation } from '@react-navigation/native';

export default function Header({ title, type, navigation }) {

	const nav = useNavigation(); 

	return (
		<View style={styles.header}>
			<View style={{ marginLeft: 20, marginTop: 10 }}>
				<Icon
					type='material-community'
					name={type}
					color={colors.headerTextColor}
					size={28}
					onPress={() => { nav.goBack() }}
				/>
			</View>
			<View style={{ marginTop: 10 }}>
				<Text style={styles.headerText}>{title}</Text>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	header: {
		padding: 3,
		flexDirection: 'row',
		backgroundColor: colors.buttons,
		height: parameters.headerHeight,
	},
	headerText: {
		color: colors.headerTextColor,
		fontSize: 22,
		fontWeight: 'bold',
		marginLeft: 30,
	}
});