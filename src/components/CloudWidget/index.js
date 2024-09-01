import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ActivityIndicator } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

  const CloudinessWidget = ({ cityName, weatherComment, onPress,apiKey }) => {
  const [weather, setWeather] = useState(null);
  

  const fetchWeather = async () => {
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;
      const results = await fetch(url);
      const data = await results.json();
      setWeather(data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  useEffect(() => {
    fetchWeather();
  }, [cityName]);

  if (!weather) {
    return <ActivityIndicator />;
  }

  return (
    <TouchableOpacity onPress={onPress} style={[styles.container, weatherComment.toLowerCase() === 'clouds' && styles.blackContainer]}>
      <Text style={styles.title}>
        CLOUDINESS <Ionicons name="cloud-outline" size={21} color="white" />
      </Text>

      <View style={styles.cloudinessInfoContainer}>
        <Ionicons name="cloud" size={40} color="white" style={styles.cloudIcon} />
        <Text style={styles.amount}>{weather.clouds?.all}%</Text>
      </View>

      <View>
        <Text style={styles.comment} numberOfLines={2}>
          Current cloud coverage
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default CloudinessWidget;

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

  cloudinessInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  cloudIcon: {
    // Add any additional styles if needed
  },

  amount: {
    fontSize: 20,
    color: 'white',
  },

  comment: {
    fontSize: 14,
    color: 'white',
  },
});
