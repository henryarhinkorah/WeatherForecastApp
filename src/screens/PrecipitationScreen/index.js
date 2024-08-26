import React from 'react';
import { View, Text, ScrollView, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import { Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const precipitationData = [
  { time: '12 AM', percentage: 10 },
  { time: '1 AM', percentage: 20 },
  { time: '2 AM', percentage: 30 },
  // ... more data
];

const PrecipitationScreen = () => {
  const screenWidth = Dimensions.get('window').width;
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>
      
      <Text style={styles.title}>Precipitation Prediction</Text>
      <Text style={styles.summary}>Today's forecast indicates scattered showers with a high chance of rain in the afternoon.</Text>

      <View style={styles.chartContainer}>
        <LineChart
          data={{
            labels: precipitationData.map(item => item.time),
            datasets: [{ data: precipitationData.map(item => item.percentage) }]
          }}
          width={screenWidth - 40}
          height={220}
          chartConfig={{
            backgroundColor: '#e26a00',
            backgroundGradientFrom: '#fb8c00',
            backgroundGradientTo: '#ffa726',
            decimalPlaces: 2,
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: { borderRadius: 16 },
            propsForDots: { r: '6', strokeWidth: '2', stroke: '#ffa726' },
          }}
          bezier
          style={styles.chart}
        />
      </View>

      <FlatList
        data={precipitationData}
        keyExtractor={(item) => item.time}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.time}>{item.time}</Text>
            <Text style={styles.percentage}>{item.percentage}%</Text>
          </View>
        )}
        style={styles.list}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  backButton: {
    marginTop: 20,
    marginBottom: 10,
  },
  title: {
    marginTop: 10,
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  summary: {
    fontSize: 16,
    marginBottom: 20,
  },
  chartContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  chart: {
    borderRadius: 16,
  },
  list: {
    marginTop: 10,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  time: {
    fontSize: 16,
  },
  percentage: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default PrecipitationScreen;
