import React from 'react'
import Sound from 'react-native-sound'
import HapticFeedback from 'react-native-haptic-feedback'
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

Sound.setCategory('Playback')

const CustomImage = ({ imageName, name }) => {

	const button = () => {
		console.log(name)
		sound.play()
		HapticFeedback.trigger('notificationWarning')
	}

	const sound = new Sound('bark.mp3', Sound.MAIN_BUNDLE, (error) => {
		if (error) {
		  	console.log('failed to load the sound');
		}
	})

	return (
		<TouchableOpacity onPress={button}>
			<Image
				source={imageName}
				style={styles.image}
			/>
		</TouchableOpacity>
	)
}

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
						<CustomImage imageName={chihuahua} name='Angry Chihuahua' />
						<CustomImage imageName={husky} name='Husky' />
					</Row>
					<Row>
						<CustomImage imageName={shiba} name='Shiba' />
						<CustomImage imageName={shitzu} name='Shitzu' />
					</Row>
					<Row>
						<CustomImage imageName={golden} name='Golden Retriever' />
						<CustomImage imageName={chihua} name='Confused Chihuahua' />
					</Row>
					<Row>
						<CustomImage imageName={corgi} name='Corgi' />
						<CustomImage imageName={samoyed} name='Samoyed' />
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
	image: {
		height: 150,
		width: 150,
		borderRadius: 75
	},
	row: {
		flexDirection: 'row',
		justifyContent: 'space-evenly',
		marginVertical: 12
	}
})

export default App