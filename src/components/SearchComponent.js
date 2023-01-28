import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback, Modal, FlatList, TouchableOpacity,Keyboard } from 'react-native';
import { colors } from '../global/styles';
import { Icon } from 'react-native-elements';
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';
import { TextInput } from 'react-native-gesture-handler';
import { filterData } from '../global/Data';


export default function SearchComponent() {

	const [data, setData] = useState([...filterData]);
	const [modalVisible, setModalVisible] = useState(false);
	const [textInputFocused, setTextInputFocused] = useState(true);
	const textInput = useRef(0);
	const navigation = useNavigation();
	// console.log(filterData);

	return (
		<View style={{ alignItems: 'center' }}>
			<TouchableWithoutFeedback
				onPress={() => {			
					setModalVisible(true);
				}
				}
			>
				<View style={styles.searchArea}>
					<Icon
						type='material'
						name="search"
						iconStyle={{ marginLeft: 5 }}
						size={32}
					/>
					<Text style={{ fontSize: 15 }}>Type here </Text>
				</View>
			</TouchableWithoutFeedback>




			{/* MODAL BUSCA */}
			<Modal
				animationType='fade'
				transparent={false}
				visible={modalVisible}
			>
				<View style={styles.modalStyle}>
					<View style={styles.view1}>
						<View style={styles.textInput}>
							<Animatable.View>
								<Icon
									name={textInputFocused ? 'arrow-back' : 'search'}
									onPress={() => {
										if (textInputFocused)
											setModalVisible(false)
										setTextInputFocused(false)
									}}
									style={styles.icon2}
									type='material'
									size={32}
									iconStyle={{ marginLeft: 0 /* MEU */ }}
								/>
							</Animatable.View>
							<TextInput
								style={{ width: '82%', paddingLeft: 5 /* MEU */ }}
								placeholder="..."
								autoFocus={false}
								ref={textInput}
							/>
							<Animatable.View style={{ paddingRight: -10, marginLeft: 5 }}>
								<Icon
									name={textInputFocused ? 'cancel' : null}
									iconStyle={{ color: colors.grey3 }}
									type='material'
									style={{ marginRight: 10 }}
									onPress={() => {
										textInput.current.clear();
										// handleSearch();
									}}
								/>
							</Animatable.View>
						</View>
					</View>

					<FlatList
						data={data}
						renderItem={({ item }) => (
							<TouchableOpacity
								onPress={() => {
									Keyboard.dismiss
									navigation.navigate("SearchResultScreen", { item: item.name })
									setModalVisible(false)
									setTextInputFocused(true)
								}} >
								<View style={styles.view2}>
									<Text style={{ color: colors.grey2, fontSize: 15 }}>{item.name}</Text>
								</View>
							</TouchableOpacity>
						)}
						keyExtractor={item => item.id}
					/>

				</View>
			</Modal>

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
	},
	textInput: {
		borderWidth: 1,
		borderRadius: 12,
		marginHorizontal: 0,
		borderColor: '#86939e',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignContent: 'center',
		alignItems: 'center',
		paddingLeft: 10,
		paddingRight: 10,
		height: 50,// meu
		backgroundColor: colors.grey5, // meu
	},
	searchArea: {
		width: '94%',
		height: 50,
		backgroundColor: colors.grey5,
		borderRadius: 15,
		borderWidth: 1,
		borderColor: colors.grey4,
		flexDirection: 'row',
		alignItems: 'center',
		marginTop: 10, // meu
	},
	searchIcon: {
		fontSize: 24,
		padding: 5,
		color: colors.grey2,
	},
	view1: {
		height: 70,
		justifyContent: "center",
		paddingHorizontal: 10,
	},
	view2: {
		flexDirection: 'row',
		padding: 15,
		alignItems: 'center',
	},
	icon2: {
		fontSize: 24,
		padding: 5,
		color: colors.grey2,
	},
	modalStyle: {
		flex: 1,
		marginTop: 10, // meu
	}
});
