import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';

const Wind = ({ weatherComment, onPress }) => {
  return (
    <TouchableOpacity
      style={[styles.container, weatherComment.toLowerCase() === 'cloudy' && styles.blackContainer]}
      onPress={onPress}
    >
      <Text style={styles.title}>
        WIND <FontAwesome6 name="wind" size={21} color="white" />
      </Text>

      <View style={styles.windInfoContainer}>
        <Ionicons name="arrow-up" size={40} color="white" style={styles.arrowIcon} />
        <Text style={styles.speed}>10 km/h</Text>
      </View>

      <View>
        <Text style={styles.direction}>NNE</Text>
      </View>

      <View>
        <Text style={styles.comment} numberOfLines={2}>
          Breezy for the rest of the day
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default Wind;

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
