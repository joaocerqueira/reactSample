import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, ScrollView, FlatList, Image, Dimensions } from 'react-native';
import { Icon } from 'react-native-elements';

export default function BusinessConsoleScreen() {
	return (
		<View style={styles.container}>
			<Text>Business</Text>
		</View>
	)
};

const styles = StyleSheet.create({
	container: {
		flex:1, 
		alignItems: 'center', 
		justifyContent:'center'}
});
