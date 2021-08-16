# react-native-paper-button

This is a custom component for React Native, a simple paper button, compatible with ios and android.

## Installation

#### yarn

```
yarn add https://github.com/abdulhaseeb026/react-native-paper-button
```

or

#### npm

```
npm i --save https://github.com/abdulhaseeb026/react-native-paper-button
```

## Usage

```js
import * as React from 'react'
import Button from 'react-native-paper-button'
import { View } from 'react-native'
import styles from './styles.js'

const App = () => {
  // Render the Button Component, recommended to use in initial screen
  return (
    <View style={styles.container}>
      <Button />
    </View>
  )
}

export default App
```

### PaperButton

The Paper Button component that displays the Button

> :warning: recommended to use in initial screen

#### params

| Param       | Type                 | Description                                                                  | Default                         |
| :---------- | :------------------- | :--------------------------------------------------------------------------- | :------------------------------ |
| isLoading   | Boolean              | Whether to show a loading indicator                                          | false                           |
| color       | String               | Custom text color for flat button, or background color for contained button. | 'blue'                          |
| mode        | contained            | Button with a background color and elevation shadow (high emphasis)          | 'contained'                     |
| icon        | IconSource           | Icon to display for the Button.                                              |                                 |
| label       | String               | Label for the button text.                                                   | 'Press Me'                      |
| labelStyle  | StyleProp<TextStyle> | Style for the button text.                                                   |                                 |
| width       | Int                  | The width of the Button Component.                                           | width - 36                      |
| height      | Int                  | The height of the Button Component.                                          | 40                              |
| onPress     | () => void           | Function to execute on press.                                                | console.log('onPress is Fired') |
| onLongPress | () => void           | Function to execute on long press.                                           | console.log('onPress is Fired') |
| disabled    | Boolean              | A disabled button is greyed out and onPress is not called on touch           |                                 |

<!--
## Contributing

## Credits -->

## Screenshot

<!-- <img src="./src/Components/Button/screenshots/button.png" height="500"> -->

|                             Solarized dark                              |                                 Solarized Ocean                                 |
| :---------------------------------------------------------------------: | :-----------------------------------------------------------------------------: |
| <img src="./src/Components/Button/screenshots/button.png" height="500"> | <img src="./src/Components/Button/screenshots/button_loading.png" height="500"> |

## License

MIT License

Copyright (c) 2021 Abdul Haseeb

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
