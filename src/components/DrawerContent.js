import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { Icon, Avatar } from 'react-native-elements';
import { colors } from '../global/styles';


export default function DrawerContent(props) {
	return (
		<View style={styles.container}>
			<DrawerContentScrollView {...props} >

				<View style={{ backgroundColor: colors.buttons }}>
					<View style={styles.avatarContainer}>
						<Avatar
							rounded={true}
							avatarStyle={styles.avatar}
							source={require('../assets/avatar.jpg')}
							size={75}
						/>
						<View style={{ marginLeft: 10 }}>
							<Text style={styles.profileText}>Joao</Text>
							<Text style={styles.profileTextEmail}>john@xpressfood.com</Text>
						</View>
					</View>

					<View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginBottom: 10}}>
							<View style={styles.infoProfileView}>
								<Text style={styles.infoProfileNumber}>1</Text>
								<Text style={styles.profileText}>My Favorites</Text>
							</View>

							<View style={styles.infoProfileView}>
								<Text style={styles.infoProfileNumber}>0</Text>
								<Text style={styles.profileText}>My Cart</Text>
							</View>
					</View>

				</View>

				<DrawerItemList {...props} />
				
				<DrawerItem
					label="Payment"
					icon= {
						({color,size}) => (
							<Icon 
								type="material-community"
								name="credit-card-outline"
								color={color}
								size={size}
							/>
						)}
				 />

				
				 
			</DrawerContentScrollView>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	avatarContainer: {
		paddingVertical: 10,
		paddingLeft: 20,
		flexDirection: 'row',
		alignItems: 'center',
		// backgroundColor: colors.buttons,
	},
	avatar: {
		borderWidth: 4,
		borderColor: colors.pagebackground,
	},
	profileText: {
		fontSize: 18,
		fontWeight: 'bold',
		color: colors.pagebackground,
	},
	profileTextEmail: {
		fontSize: 14,
		color: colors.pagebackground,
	},

	infoProfileView: { marginLeft: 10, alignItems: 'center', justifyContent: 'center' },
	infoProfileNumber: { fontWeight: 'bold', color: colors.pagebackground, fontSize: 18 },
	infoProfileText: { color: colors.pagebackground, fontSize: 14 }

});