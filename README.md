# react-native-paper-button

This is a custom component for React Native, a simple button from react native paper, compatible with ios and android.

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
  // Render the Button Component
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

#### params

| Param       | Type       | Description                                                                    | Default                         |
| :---------- | :--------- | :----------------------------------------------------------------------------- | :------------------------------ |
| isLoading   | Boolean    | Whether to show a loading indicator.                                           | false                           |
| color       | String     | Custom text color for button, or background color for contained button.        | 'teal'                          |
| mode        | contained  | Button with a background color and elevation shadow.                           | 'contained'                     |
| icon        | IconSource | Icon to display for the Button, should be taken from Material Community Icons. | null                            |
| label       | String     | Label for the button text.                                                     | 'Press Me'                      |
| labelStyle  | Object     | Style for the button text.                                                     | width:\_width, height:\_height  |
| width       | Number     | The width of the Button Component.                                             | width - 36                      |
| height      | Number     | The height of the Button Component.                                            | 40                              |
| onPress     | func       | Function to execute on press.                                                  | console.log('onPress is Fired') |
| onLongPress | func       | Function to execute on long press.                                             | console.log('onPress is Fired') |
| disabled    | Boolean    | A disabled button is greyed out and onPress is not called on touch.            | false                           |

<!--
## Contributing

## Credits -->

## Screenshot

|                                 Button                                  |                                 Button_Loading                                  |
| :---------------------------------------------------------------------: | :-----------------------------------------------------------------------------: |
| <img src="./src/components/Button/screenshots/Button.png" height="500"> | <img src="./src/components/Button/screenshots/Button_Loading.png" height="500"> |

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
