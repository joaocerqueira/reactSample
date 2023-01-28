import React from 'react';
import { View, StyleSheet } from 'react-native';
import SearchComponent from '../components/SearchComponent';

export default function SearchScreen() {
	return (
		<View style={{marginHorizontal: 10}}>
			<SearchComponent />
		</View>
	)
};

const styles = StyleSheet.create({
});
