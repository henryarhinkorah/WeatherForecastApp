import { StyleSheet, Text, View, Dimensions } from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

const ForecastItem = ({ day, weather, icon }) => {
  return (
    <View style={styles.itemContainer}>
      <Ionicons name={icon} size={30} color="white" />
      <Text style={styles.dayText}>{day}</Text>
      <Text style={styles.weatherText}>{weather}</Text>
    </View>
  );
};

export default ForecastItem;

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: width * 0.8,
    padding: 10,
    marginVertical: 5,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 10,
  },
  dayText: {
    color: 'white',
    fontSize: 16,
    marginLeft: 10,
    flex: 1,
  },
  weatherText: {
    color: 'white',
    fontSize: 14,
    marginRight: 10,
  },
});
