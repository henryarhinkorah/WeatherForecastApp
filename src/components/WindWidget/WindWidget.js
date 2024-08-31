import React,  { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ActivityIndicator  } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import { useEffect } from 'react';

//gets properties and info passed from parent - Homescreen
const WindWidget = ({ cityName, weatherComment, onPress }) => {

  // for deriving actual values from api
  const [weather, setWeather] = useState({ 
   "wind": {
    "speed": 0.2,
    "deg":9
   }
  })

  //general api key used for getting city name from homescreen
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=6b13006e25b05078cc05f51179e74641&units=metric`;



//actual logic for fetching the weather data and updating from homescreen
  const [setWeatherComment] = useState(" ");// Initialize as a default comment
  const fetchWeather = async () => {
      console.log("Fetch data");
      const results = await fetch(url);
      const data = await results.json();
      console.log(JSON.stringify(data, null, 2));
  
      // Update the weather state including description
      setWeather(data); 
  };

  useEffect(() => {
    fetchWeather();
  },  [cityName])

  //for returning a loading button until info loads
  if(!weather) {
    return <ActivityIndicator/>
  }

  return (
    <TouchableOpacity
      style={[styles.container, weatherComment.toLowerCase() === 'clouds' && styles.blackContainer]}
      onPress={onPress}
    >
      <Text style={styles.title}>
        WIND <FontAwesome6 name="wind" size={21} color="white" />
      </Text>

      <View style={styles.windInfoContainer}>
        <Ionicons name="arrow-up" size={40} color="white" style={styles.arrowIcon} />
        <Text style={styles.speed}>{weather.wind.speed}m/s</Text>
      </View>

      <View>
        <Text style={styles.direction}>{weather.wind.deg}°</Text>
      </View>

      <View>
        <Text style={styles.comment} numberOfLines={2}>
          Breeze for the rest of the day
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default WindWidget;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(0, 105, 146, 0.5)',
    width: '42%',
    height: '50%',
    color: 'white',
    borderRadius: 10,
    fontSize: 13,
    padding: 9,
    opacity: 1,
  },

  title: {
    fontSize: 13,
    color: 'white',
  },

  windInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  arrowIcon: {
    transform: [{ rotate: '45deg' }],
  },
  blackContainer: {
    backgroundColor: 'black',
    opacity: 0.8,
  },

  speed: {
    fontSize: 20,
    color: 'white',
  },

  direction: {
    fontSize: 20,
    color: 'white',
  },

  comment: {
    fontSize: 14,
    color: 'white',
  },
});
