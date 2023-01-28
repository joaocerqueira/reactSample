import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { colors } from './src/global/styles';
import RootNavigator from './src/navigation/RootNavigator';


export default function App() {
	return (

		<View style={styles.container}>
			<StatusBar
				barStyle="Light-content"
				backgroundColor={colors.statusbar}
			/>
			<RootNavigator />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginTop: 27,
	},
});
