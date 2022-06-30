
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import {useFonts} from 'expo-font';

import Home from "./screens/Home";
import Details from "./screens/Details";

import { Text } from 'react-native'

const Stack = createStackNavigator();

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "transparent"
  }
}

const App = () => {
  const [loaded] = useFonts({
    PlayfairBold: require("./assets/fonts/PlayfairDisplay-Bold.ttf"),
    PlayfairBlackItalic: require("./assets/fonts/PlayfairDisplay-BlackItalic.ttf"),
    PlayfairBoldItalic: require("./assets/fonts/PlayfairDisplay-BoldItalic.ttf"),
    PlayfairItalic: require("./assets/fonts/PlayfairDisplay-Italic.ttf"),
    PlayfairRegular: require("./assets/fonts/PlayfairDisplay-Regular.ttf"),
    PlayfairBlack: require("./assets/fonts/PlayfairDisplay-Black.ttf"),
  });
  
  if(!loaded) return null;
  
  return (
    <NavigationContainer theme={theme}>
    <Stack.Navigator screenOptions= {{ headerShown: false}} initialRouteName="Home">
      <Stack.Screen name="Home" component={Home}/>
      <Stack.Screen name="Details" component={Details}/>
    </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;