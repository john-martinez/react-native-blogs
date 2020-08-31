import React from 'react';
import { TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from './src/context/BlogContext';
import HomeScreen from './src/screens/HomeScreen';
import ShowScreen from './src/screens/ShowScreen';
import CreateScreen from './src/screens/CreateScreen';
import EditScreen from './src/screens/EditScreen';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={ HomeScreen } />
        <Stack.Screen name="Show" component={ ShowScreen } />
        <Stack.Screen name="Create" component={ CreateScreen } />
        <Stack.Screen name="Edit" component={ EditScreen } />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default () => {
  return <Provider>
    <App />
  </Provider>
};
