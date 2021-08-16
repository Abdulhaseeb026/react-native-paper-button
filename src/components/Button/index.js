import * as React from 'react'
import { View } from 'react-native'
import { Button as PaperButton } from 'react-native-paper'
import styles from './styles'

const Button = (props) => {
  const {
    isLoading,
    color,
    mode,
    icon,
    label,
    labelStyle,
    width,
    height,
    onPress,
    onLongPress,
  } = props

  let _isLoading = isLoading || false
  let _color = color || 'blue'
  let _mode = mode || 'contained'
  let _icon = icon || null
  let _label = label || 'Press Me'
  let _labelStyle = labelStyle || {}
  let _width = width || styles.width
  let _height = height || styles.height
  let _onPress =
    onPress ||
    function () {
      console.log('onPress is Fired')
    }
  let _onLongPress =
    onLongPress ||
    function () {
      console.log('onLongPress is Fired')
    }

  return (
    <View style={styles.container}>
      <PaperButton
        icon={_icon}
        mode={_mode}
        onPress={_onPress}
        disabled={_isLoading}
        onLongPress={_onLongPress}
        loading={_isLoading}
        color={_color}
        labelStyle={_labelStyle}
        style={{ width: _width, height: _height }}
        {...props}
      >
        {_label}
      </PaperButton>
    </View>
  )
}

export default Button
