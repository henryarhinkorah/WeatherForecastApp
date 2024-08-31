import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import { useEffect } from 'react';



const HumidityWidget = ({ cityName,weatherComment,onPress }) => {
  
  const [weather, setWeather] = useState({
    "main":{
      "humidity":44,
    }
  })

 
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
        HUMIDITY <Entypo name="air" size={21} color="white" />
      </Text>

      <View style={styles.humidityInfoContainer}>
        <Text style={styles.percentage}>{weather.main.humidity}%</Text>
      </View>

      <View>
        <Text style={styles.comment} numberOfLines={2}>
          Current humidity
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default HumidityWidget;

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
  blackContainer: {
    backgroundColor: 'black',
    opacity: 0.8,
  },

  title: {
    fontSize: 13,
    color: 'white',
  },

  humidityInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  percentage: {
    fontSize: 40,
    color: 'white',
  },

  comment: {
    fontSize: 14,
    color: 'white',
  },
});
