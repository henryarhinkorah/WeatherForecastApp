import React,  { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { useEffect } from 'react';


const PressureWidget = ({cityName, weatherComment,onPress }) => {
const [weather, setWeather] = useState({ "main": {"pressure": 1013,}})
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
 
   //for returning a loading button until info loads
   if(!weather) {
     return <ActivityIndicator/>
   }
 

   const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=6b13006e25b05078cc05f51179e74641&units=metric`;
  return (
    <TouchableOpacity onPress={onPress} style={[styles.container, weatherComment.toLowerCase() === 'clouds' && styles.blackContainer]}>
      <Text style={styles.title}>
        PRESSURE <FontAwesome5 name="tachometer-alt" size={21} color="white" />
      </Text>

      <View style={styles.pressureInfoContainer}>
        <Text style={styles.pressureValue}>{weather.main.pressure} hPa</Text>
      </View>

      <View style={styles.scaleContainer}>
        <View style={styles.scale}>
          <View style={[styles.indicator, { width: '50%' }]} />
        </View>
        <View style={styles.scaleLabels}>
          <Text style={styles.scaleLabel}>Low</Text>
          <Text style={styles.scaleLabel}>High</Text>
        </View>
      </View>

      <View>
        <Text style={styles.comment} numberOfLines={2}>
          Normal atmospheric pressure
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default PressureWidget;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(0, 105, 146, 0.5)',
    width: '100%',
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

  pressureInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  pressureValue: {
    fontSize: 40,
    color: 'white',
  },

  scaleContainer: {
    alignItems: 'center',
    marginVertical: 10,
  },

  scale: {
    width: '100%',
    height: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderRadius: 5,
    overflow: 'hidden',
  },

  indicator: {
    height: '100%',
    backgroundColor: 'white',
  },

  scaleLabels: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 5,
  },

  scaleLabel: {
    fontSize: 12,
    color: 'white',
  },

  comment: {
    fontSize: 14,
    color: 'white',
  },
});
