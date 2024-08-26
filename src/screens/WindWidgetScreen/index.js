import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const WindWidgetScreen = ({ weatherComment }) => {
  const screenWidth = Dimensions.get('window').width;
  const navigation = useNavigation();

  // Sample wind data
  const windData = {
    labels: ['Now', '1PM', '2PM', '3PM', '4PM', '5PM'],
    datasets: [
      {
        data: [5, 10, 8, 12, 6, 7], // Wind speed in km/h
      },
    ],
  };

  const getBackgroundColor = (weatherComment) => {
    return 'white'; // Background color is white
  };

  const getTextColor = (weatherComment) => {
    return weatherComment === 'cloudy' ? 'black' : '#333'; // Use a darker color for better readability
  };

  return (
    <View style={[styles.container, { backgroundColor: getBackgroundColor(weatherComment) }]}>
      <ScrollView>
        <View style={styles.innerContainer}>
          {/* Back Button */}
          <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={24} color={getTextColor(weatherComment)} />
          </TouchableOpacity>

          <Text style={[styles.subtitle, { color: getTextColor(weatherComment) }]}>Wind Speed Throughout the Day</Text>

          <LineChart
            data={windData}
            width={screenWidth - 30}
            height={220}
            chartConfig={{
              backgroundColor: getBackgroundColor(weatherComment),
              backgroundGradientFrom: getBackgroundColor(weatherComment),
              backgroundGradientTo: getBackgroundColor(weatherComment),
              color: (opacity = 1) => getTextColor(weatherComment),
              labelColor: (opacity = 1) => getTextColor(weatherComment),
              strokeWidth: 2,
            }}
            style={styles.graph}
          />

          <View style={[styles.contentContainer, { backgroundColor: '#f0f0f0' }]}>
            <Text style={[styles.summaryTitle, { color: getTextColor(weatherComment) }]}>Summary of Forecast</Text>
            <Text style={[styles.summaryText, { color: getTextColor(weatherComment) }]}>
              The wind will vary throughout the day with the highest speeds expected in the afternoon. Be prepared for occasional strong gusts.
            </Text>
          </View>

          <View style={[styles.contentContainer, { backgroundColor: '#f0f0f0' }]}>
            <Text style={[styles.recommendationsTitle, { color: getTextColor(weatherComment) }]}>Recommendations</Text>
            <Text style={[styles.recommendationsText, { color: getTextColor(weatherComment) }]}>
              It's a good day for flying kites or sailing. However, if you're planning outdoor activities, be cautious of sudden gusts.
            </Text>
          </View>

          <View style={[styles.contentContainer, { backgroundColor: '#f0f0f0' }]}>
            <Text style={[styles.infoTitle, { color: getTextColor(weatherComment) }]}>What is Wind?</Text>
            <Text style={[styles.infoText, { color: getTextColor(weatherComment) }]}>
              Wind is the movement of air from high to low pressure areas. It plays a crucial role in weather patterns and can affect various outdoor activities.
            </Text>
          </View>

          {/* Spacer at the bottom */}
          <View style={styles.spacer} />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  innerContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
    marginTop: 20,
  },
  backButton: {
    alignSelf: 'flex-start',
  },
  subtitle: {
    fontSize: 18,
    marginVertical: 10,
    marginTop: 10,
    fontWeight: 'bold',
  },
  graph: {
    marginVertical: 20,
  },
  contentContainer: {
    marginHorizontal: 15,
    borderRadius: 15,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
    marginBottom: 20,
  },
  summaryTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  summaryText: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  recommendationsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  recommendationsText: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  infoTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  infoText: {
    fontSize: 16,
    textAlign: 'center',
  },
  spacer: {
    height: 20,
  },
});

export default WindWidgetScreen;
