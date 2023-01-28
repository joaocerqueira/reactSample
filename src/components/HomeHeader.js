import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Icon, withBadge } from 'react-native-elements';
import { colors, parameters } from '../global/styles';

export default function HomeScreen({navigation}) {

	const BadgeIcon = withBadge(0)(Icon);

	return (
		<View style={styles.header}>
			<View style={{ marginLeft: 15, alignItems: 'center', justifyContent: 'center' }}>
				<Icon
					type='material-community'
					name="menu"
					color={colors.cardbackground}
					size={32}
					onPress={() => {navigation.toggleDrawer()}}
				/>
			</View>
			<View style={{ alignItems: 'center', justifyContent: 'center' }}>
				<Text style={styles.headerText}>XpressFood</Text>
			</View>

			<View style={{ padding: 3, alignItems: 'center', justifyContent: 'center', marginRight: 15 }}>
				<BadgeIcon
					type='material-community'
					name="cart"
					color={colors.cardbackground}
					size={32} 
				/>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	header: {
		flexDirection: 'row',
		backgroundColor: colors.buttons,
		height: parameters.headerHeight,
		justifyContent: 'space-between',
	},
	headerText: {
		color: colors.cardbackground,
		fontSize: 25,
		fontWeight: 'bold',
	}
});