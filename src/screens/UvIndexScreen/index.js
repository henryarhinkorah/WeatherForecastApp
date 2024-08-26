import React from 'react';
import { StyleSheet, Text, View, ScrollView, Dimensions, TouchableOpacity } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import Ionicons from 'react-native-vector-icons/Ionicons';

const screenWidth = Dimensions.get('window').width;

const UVIndexScreen = ({ navigation }) => {
  // Sample UV Index data for the day
  const uvData = {
    labels: ['6 AM', '9 AM', '12 PM', '3 PM', '6 PM', '9 PM'],
    datasets: [
      {
        data: [1, 3, 6, 8, 5, 2],
      },
    ],
  };

  return (
    <ScrollView style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>

      <Text style={styles.title}>UV Index Throughout the Day</Text>

      {/* UV Index Graph */}
      <View style={styles.graphContainer}>
        <LineChart
          data={uvData}
          width={screenWidth * 0.9}
          height={220}
          yAxisLabel=""
          yAxisSuffix=" UV"
          withHorizontalLabels={true}
          withVerticalLines={false}
          withHorizontalLines={true}
          chartConfig={{
            backgroundColor: '#fff',
            backgroundGradientFrom: '#fff',
            backgroundGradientTo: '#fff',
            decimalPlaces: 1,
            color: (opacity = 1) => `rgba(0, 105, 146, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(0, 105, 146, ${opacity})`,
            style: {
              borderRadius: 16,
            },
            propsForDots: {
              r: '6',
              strokeWidth: '2',
              stroke: '#fff',
            },
          }}
          bezier
        />
      </View>

      {/* Recommendations */}
      <View style={styles.contentContainer}>
        <View style={styles.section}>
          <Text style={styles.subtitle}>Recommendations</Text>
          <Text style={styles.text}>- Wear sunscreen with at least SPF 30.</Text>
          <Text style={styles.text}>- Wear protective clothing and a hat.</Text>
          <Text style={styles.text}>- Seek shade, especially during midday hours.</Text>
        </View>
      </View>

      {/* UV Index Forecast */}
      <View style={styles.contentContainer}>
        <View style={styles.section}>
          <Text style={styles.subtitle}>UV Index Forecast</Text>
          <Text style={styles.text}>- Morning: Low (1-3)</Text>
          <Text style={styles.text}>- Midday: High (6-8)</Text>
          <Text style={styles.text}>- Evening: Moderate (2-5)</Text>
        </View>
      </View>

      {/* UV Index Explanation */}
      <View style={styles.contentContainer}>
        <View style={styles.section}>
          <Text style={styles.subtitle}>What is UV Index?</Text>
          <Text style={styles.text}>
            The UV Index is a measure of the strength of ultraviolet (UV) radiation from the sun. It is used to help people understand the potential for skin damage and to take appropriate precautions.
          </Text>
        </View>
      </View>

      {/* Spacer at the bottom */}
      <View style={styles.spacer} />
    </ScrollView>
  );
};

export default UVIndexScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },
  backButton: {
    marginTop: 30,
    marginLeft: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 20,
    marginTop: 30,
  },
  graphContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  contentContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
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
  section: {
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    color: '#666',
    marginBottom: 5,
  },
  spacer: {
    height: 20,
  },
});
