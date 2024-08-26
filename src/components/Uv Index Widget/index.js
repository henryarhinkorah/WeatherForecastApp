import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const UV = ({ weatherComment, onPress}) => {
  const navigation = useNavigation(); // Get navigation object
  return (
    <TouchableOpacity
      style={[styles.container, weatherComment.toLowerCase() === 'cloudy' && styles.blackContainer]}
      onPress={() => navigation.navigate('UVIndex')} // Add the onPress handler here
    >
      <Text style={styles.title}>
        UV INDEX <Ionicons name="sunny" size={21} color="white" />
      </Text>

      <View style={styles.numberContainer}>
        <Text style={styles.number}>1</Text>
      </View>

      <View>
        <Text style={styles.level}>Low</Text>
      </View>

      <View>
        <Text style={styles.comment} numberOfLines={2}>
          Low for the rest of the day
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default UV;

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
    alignItems: 'center', // Center items horizontally
    justifyContent: 'center', // Center items vertically
  },

  title: {
    fontSize: 13,
    color: 'white',
    // Adjust marginLeft or use Flexbox for better positioning
  },

  numberContainer: {
    // Additional styling for the container of the UV index number
  },

  number: {
    fontSize: 40,
    color: 'white',
    // Adjust styling if needed
  },

  level: {
    fontSize: 20,
    color: 'white',
    // Adjust styling if needed
  },

  blackContainer: {
    backgroundColor: 'black',
    opacity: 0.8,
  },

  comment: {
    fontSize: 14,
    color: 'white',
    // Adjust styling if needed
  },
});
