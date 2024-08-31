import React,  { useState }  from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import { useEffect } from 'react';

const Precipitation = ({ cityName,weatherComment,onPress }) => {
  const [weather, setWeather] = useState({
    "main":{
      "temp":4.4,
    }
  })

  const [setWeatherComment] = useState(" ");// Initialize as a default comment
  const fetchWeather = async () => {
      console.log("Fetch data");
      const results = await fetch(url);
      const data = await results.json();
      console.log(JSON.stringify(data, null, 2));
      setWeather(data); 
  };
  useEffect(() => {
    fetchWeather();
  },  [cityName])
  if(!weather) {
    return <ActivityIndicator/>
  }
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=6b13006e25b05078cc05f51179e74641&units=metric`;
  

  return (
    <TouchableOpacity onPress={onPress} style={[styles.container, weatherComment.toLowerCase() === 'clouds' && styles.blackContainer]}>
      <Text style={styles.title}>
        PRECIPITATION <FontAwesome6 name="cloud-rain" size={21} color="white" />
      </Text>

      <View style={styles.precipInfoContainer}>
        <Ionicons name="water" size={40} color="white" style={styles.dropIcon} />
        <Text style={styles.amount}>{weather.rain?.['1h']} mm</Text>
      </View>

      <View>
        <Text style={styles.probability}>70%</Text>
      </View>

      <View>
        <Text style={styles.comment} numberOfLines={2}>
          Chance of rain for the rest of the day
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default Precipitation;

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
    marginTop: 30,
  },

  title: {
    fontSize: 13,
    color: 'white',
  },
  blackContainer: {
    backgroundColor: 'black',
    opacity: 0.8,
  },

  precipInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  dropIcon: {
    // Add any additional styles if needed
  },

  amount: {
    fontSize: 20,
    color: 'white',
  },

  probability: {
    fontSize: 20,
    color: 'white',
  },

  comment: {
    fontSize: 14,
    color: 'white',
  },
});
