import { Dimensions } from 'react-native'

const { width, height } = Dimensions.get('window')

const styles = {
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  width: width - 36,
  height: 40,
}

export default styles
