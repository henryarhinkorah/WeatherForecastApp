import React from 'react';
import { StyleSheet, Text, View, ScrollView, Dimensions, ImageBackground, TouchableOpacity } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const screenWidth = Dimensions.get('window').width;

const humidityData = {
  today: {
    labels: ['6 AM', '9 AM', '12 PM', '3 PM', '6 PM', '9 PM'],
    datasets: [
      {
        data: [85, 80, 75, 70, 65, 60],
      },
    ],
  },
  forecast: [
    { day: 'Tomorrow', humidity: 70, dewPoint: 16 },
    { day: 'Tuesday', humidity: 65, dewPoint: 15 },
    { day: 'Wednesday', humidity: 60, dewPoint: 14 },
    { day: 'Thursday', humidity: 68, dewPoint: 15 },
    { day: 'Friday', humidity: 72, dewPoint: 16 },
  ],
};

const HumidityScreen = () => {

 
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={24} color="#333" />
      </TouchableOpacity>

      <Text style={styles.title}>Humidity Details</Text>

      {/* Today's Humidity Graph */}
      <View style={styles.section}>
        <ImageBackground
          source={{ uri: 'https://example.com/today-bg.jpg' }}
          style={styles.background}
          imageStyle={{ borderRadius: 15 }}
        >
          <Text style={styles.sectionTitle}>Today's Humidity</Text>
          <View style={styles.graphContainer}>
            <LineChart
              data={humidityData.today}
              width={screenWidth * 0.9}
              height={220}
              yAxisLabel=""
              yAxisSuffix="%"
              chartConfig={{
                backgroundColor: '#fff',
                backgroundGradientFrom: '#fff',
                backgroundGradientTo: '#fff',
                decimalPlaces: 1,
                color: (opacity = 1) => `rgba(34, 139, 34, ${opacity})`,
                labelColor: (opacity = 1) => `rgba(34, 139, 34, ${opacity})`,
                style: { borderRadius: 16 },
                propsForDots: { r: '6', strokeWidth: '2', stroke: '#fff' },
              }}
              bezier
            />
          </View>
        </ImageBackground>
      </View>

      {/* Humidity Recommendations */}
      <View style={styles.section}>
        <View style={styles.contentContainer}>
          <Text style={styles.sectionTitle}>Recommendations</Text>
          <Text style={styles.text}>- Drink plenty of water.</Text>
          <Text style={styles.text}>- Use a dehumidifier if necessary.</Text>
          <Text style={styles.text}>- Wear breathable clothing.</Text>
        </View>
      </View>

      {/* 5-Day Forecast */}
      <View style={styles.section}>
        <ImageBackground
          source={{ uri: 'https://example.com/forecast-bg.jpg' }}
          style={styles.background}
          imageStyle={{ borderRadius: 15 }}
        >
          <Text style={styles.sectionTitle}>5-Day Humidity Forecast</Text>
          {humidityData.forecast.map((item, index) => (
            <View key={index} style={styles.forecastItem}>
              <Text style={styles.text}>{item.day}</Text>
              <View style={styles.forecastDetails}>
                <Ionicons name="water-outline" size={24} color="#228B22" />
                <Text style={styles.text}>Humidity: {item.humidity}%</Text>
                <Ionicons name="thermometer-outline" size={24} color="#228B22" />
                <Text style={styles.text}>Dew Point: {item.dewPoint}°C</Text>
              </View>
            </View>
          ))}
        </ImageBackground>
      </View>

      {/* Relative Humidity Information */}
      <View style={styles.section}>
        <View style={styles.contentContainer}>
          <Text style={styles.sectionTitle}>About Relative Humidity</Text>
          <Text style={styles.text}>
            Relative humidity is the amount of moisture in the air compared to what the air can "hold" at that temperature. High humidity levels can make it feel hotter than it actually is.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default HumidityScreen;

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
