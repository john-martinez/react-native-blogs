import React from 'react';
import { TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from './src/context/BlogContext';
import { AntDesign } from '@expo/vector-icons'; 
import HomeScreen from './src/screens/HomeScreen';
import ShowScreen from './src/screens/ShowScreen';
import CreateScreen from './src/screens/CreateScreen';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Home" 
          component={ HomeScreen } 
          options={ ({ navigation }) => ({
            headerTitle: "Blog Posts",
            headerRight: (props) => {
              return <TouchableOpacity onPress={ ()=> navigation.navigate('Create') } >
                <AntDesign name="plus" style={{ fontSize: 30, marginRight: 10 }}/>
              </TouchableOpacity>
            }
          }) }
        />
        <Stack.Screen name="Show" component={ ShowScreen } />
        <Stack.Screen name="Create" component={ CreateScreen } />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default () => {
  return <Provider>
    <App />
  </Provider>
};
