import React from 'react'
import CustomImage from './src/CustomImage'
import {
	StyleSheet,
	View,
	Text,
	SafeAreaView,
	Button,
	Image,
	ScrollView,
	TouchableOpacity
} from 'react-native'


const Row = ({ children }) => {
	
	return (
		<View style={styles.row}>
			{ children }
		</View>
	)
}

const App = () => {

	const chihuahua = require('./chihuahua2.png')
	const husky = require('./husky.jpg')
	const shiba = require('./Shiba.jpg')
	const shitzu = require('./shitzu.jpg')
	const golden = require('./golden.png')
	const chihua = require('./chihuahua1.jpg')
	const corgi = require('./corgi.jpg')
	const samoyed = require('./samoyed.jpg')

	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.container}>
				<ScrollView>
					<Row>
						<CustomImage imageName={chihuahua} name='Angry Chihuahua' rapsSound='angrychihua.mp3' />
						<CustomImage imageName={husky} name='Husky' rapsSound='husky.mp3' />
					</Row>
					<Row>
						<CustomImage imageName={shiba} name='Shiba' rapsSound='shiba.mp3' />
						<CustomImage imageName={shitzu} name='Shitzu' rapsSound='shitzu.mp3' />
					</Row>
					<Row>
						<CustomImage imageName={golden} name='Golden Retriever' rapsSound='golden.mp3' />
						<CustomImage imageName={chihua} name='Confused Chihuahua' rapsSound='chihua.mp3' />
					</Row>
					<Row>
						<CustomImage imageName={corgi} name='Corgi' rapsSound='corgi.mp3' />
						<CustomImage imageName={samoyed} name='Samoyed' rapsSound='samoyed.mp3' />
					</Row>
				</ScrollView>
			</View>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'white'
	},
	row: {
		flexDirection: 'row',
		justifyContent: 'space-evenly',
		marginVertical: 12
	}
})

export default App