import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, } from 'react-native';
import HomeScreen from './src/screens/HomeScreen';
import UVIndexScreen from './src/screens/UvIndexScreen';
import WindWidgetScreen from './src/screens/WindWidgetScreen';
import PrecipitationScreen from './src/screens/PrecipitationScreen';
import HumidityScreen from './src/screens/HumidityScreen';
import PressureScreen from './src/screens/PressureScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

 
  const Stack = createStackNavigator();
  
  const App = () => {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen}  options={{ headerShown: false }} />
          <Stack.Screen name="UVIndex" component={UVIndexScreen}  options={{ headerShown: false }} />
          <Stack.Screen name="WindWidgetScreen" component={WindWidgetScreen}  options={{ headerShown: false }}  />
          <Stack.Screen name="PrecipitationScreen" component={PrecipitationScreen}  options={{ headerShown: false }}  />
          <Stack.Screen name="HumidityScreen" component={HumidityScreen} options={{ headerShown: false }} />
          <Stack.Screen name="PressureScreen" component={PressureScreen} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  };
  export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    
  },
});
