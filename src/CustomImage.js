import Sound from 'react-native-sound'
import HapticFeedback from 'react-native-haptic-feedback'
import {
    TouchableOpacity,
    Image,
    StyleSheet
} from 'react-native'

Sound.setCategory('Playback')

const CustomImage = ({ imageName, name, rapsSound }) => {

	const button = () => {
		sound.play()
		HapticFeedback.trigger('notificationWarning')
	}

	const sound = new Sound(rapsSound, Sound.MAIN_BUNDLE, (error) => {
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

const styles = StyleSheet.create({
    image: {
		height: 150,
		width: 150,
		borderRadius: 75
	}
})

export default CustomImage