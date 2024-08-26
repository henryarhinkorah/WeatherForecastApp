import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';

const HumidityWidget = ({ weatherComment,onPress }) => {
  
  return (
    <TouchableOpacity onPress={onPress} style={[styles.container, weatherComment.toLowerCase() === 'cloudy' && styles.blackContainer]}>
      <Text style={styles.title}>
        HUMIDITY <Entypo name="air" size={21} color="white" />
      </Text>

      <View style={styles.humidityInfoContainer}>
        <Text style={styles.percentage}>70%</Text>
      </View>

      <View>
        <Text style={styles.comment} numberOfLines={2}>
          High humidity throughout the day
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
