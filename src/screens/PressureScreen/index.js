import React from 'react';
import { StyleSheet, Text, View, ScrollView, Dimensions, ImageBackground, TouchableOpacity } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const screenWidth = Dimensions.get('window').width;

const pressureData = {
  today: {
    labels: ['6 AM', '9 AM', '12 PM', '3 PM', '6 PM', '9 PM'],
    datasets: [
      {
        data: [1015, 1016, 1018, 1017, 1016, 1015],
      },
    ],
  },
  forecast: [
    { day: 'Tomorrow', pressure: 1017, icon: 'speedometer-outline' },
    { day: 'Tuesday', pressure: 1016, icon: 'speedometer-outline' },
    { day: 'Wednesday', pressure: 1015, icon: 'speedometer-outline' },
    { day: 'Thursday', pressure: 1014, icon: 'speedometer-outline' },
    { day: 'Friday', pressure: 1013, icon: 'speedometer-outline' },
  ],
};

const PressureScreen = () => {
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={24} color="#333" />
      </TouchableOpacity>

      <Text style={styles.title}>Atmospheric Pressure Details</Text>

      {/* Today's Pressure Graph */}
      <View style={styles.section}>
        <ImageBackground
          source={{ uri: 'https://example.com/today-bg.jpg' }}
          style={styles.background}
          imageStyle={{ borderRadius: 15 }}
        >
          <View style={styles.contentContainer}>
            <Text style={styles.sectionTitle}>Today's Pressure</Text>
            <View style={styles.graphContainer}>
              <LineChart
                data={pressureData.today}
                width={screenWidth * 0.9}
                height={220}
                yAxisLabel=""
                yAxisSuffix=" hPa"
                chartConfig={{
                  backgroundColor: '#fff',
                  backgroundGradientFrom: '#fff',
                  backgroundGradientTo: '#fff',
                  decimalPlaces: 0,
                  color: (opacity = 1) => `rgba(75, 0, 130, ${opacity})`,
                  labelColor: (opacity = 1) => `rgba(75, 0, 130, ${opacity})`,
                  style: { borderRadius: 16 },
                  propsForDots: { r: '6', strokeWidth: '2', stroke: '#fff' },
                }}
                bezier
              />
            </View>
          </View>
        </ImageBackground>
      </View>

      {/* Pressure Recommendations */}
      <View style={styles.section}>
        <View style={styles.contentContainer}>
          <Text style={styles.sectionTitle}>Recommendations</Text>
          <Text style={styles.text}>- Be aware of weather changes.</Text>
          <Text style={styles.text}>- Monitor health if sensitive to pressure changes.</Text>
          <Text style={styles.text}>- Ensure windows and doors are closed during low pressure.</Text>
        </View>
      </View>

      {/* 5-Day Forecast */}
      <View style={styles.section}>
        <ImageBackground
          source={{ uri: 'https://example.com/forecast-bg.jpg' }}
          style={styles.background}
          imageStyle={{ borderRadius: 15 }}
        >
          <View style={styles.contentContainer}>
            <Text style={styles.sectionTitle}>5-Day Pressure Forecast</Text>
            {pressureData.forecast.map((item, index) => (
              <View key={index} style={styles.forecastItem}>
                <Text style={styles.text}>{item.day}</Text>
                <View style={styles.forecastDetails}>
                  <Ionicons name={item.icon} size={24} color="#4B0082" />
                  <Text style={styles.text}>Pressure: {item.pressure} hPa</Text>
                </View>
              </View>
            ))}
          </View>
        </ImageBackground>
      </View>

      {/* Atmospheric Pressure Information */}
      <View style={styles.section}>
        <View style={styles.contentContainer}>
          <Text style={styles.sectionTitle}>About Atmospheric Pressure</Text>
          <Text style={styles.text}>
            Atmospheric pressure is the force exerted by the weight of the air above. It affects weather patterns and can influence physical conditions and well-being.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default PressureScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    padding: 15,
  },
  backButton: {
    marginTop: 30,
    marginBottom: 10,
    marginLeft: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 20,
  },
  section: {
    marginBottom: 20,
    
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 10,
  },
  graphContainer: {
    alignItems: 'center',
    marginBottom: 20,
    overflow:'hidden'
  },
  text: {
    fontSize: 16,
    color: '#666',
    marginBottom: 5,
  },
  forecastItem: {
    marginBottom: 10,
  },
  forecastDetails: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
    padding: 10,
    borderRadius: 10,
  },
  contentContainer: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
});
