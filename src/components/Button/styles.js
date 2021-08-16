import { Dimensions } from 'react-native'

const { width, height } = Dimensions.get('window')

const styles = {
  width: width - 36,
  height: 40,

  _labelStyle: {
    height: 25,
    width: 80,
  },
}

export default styles
