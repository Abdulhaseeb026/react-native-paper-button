import * as React from 'react'
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
  let _color = color || 'teal'
  let _mode = mode || 'contained'
  let _icon = icon || null
  let _label = label || 'Press Me'
  let _width = width || styles.width
  let _height = height || styles.height
  let _labelStyle = labelStyle || styles._labelStyle
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
  )
}

export default Button
