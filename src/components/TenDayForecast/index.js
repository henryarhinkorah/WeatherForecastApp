import { StyleSheet, Text, View,FlatList } from 'react-native'
import React from 'react'
import Forecastdata from '../../data/Forecastdata'
import ForecastItem from '../ForecastItem'


const TenDayForecast = ({ weatherComment, cityName, apiKey }) => {

  const url = `https://api.openweathermap.org/data/2.5/forecast/daily?q=${cityName}&cnt=7&appid=${apiKey}&units=metric`;
 
  const fetchForecast = async () =>{
    
  }
 
  return (
   
    <View style={[styles.container, weatherComment.toLowerCase() === 'clouds' && styles.blackContainer]}>
         
         <Text style={styles.header}>10 - DAY FORECAST</Text>
    
        <FlatList 
                data = {Forecastdata}
                renderItem={({item}) => (
                  <ForecastItem
                  day={item.day}
                  weather={item.weather}
                  icon={item.icon}
                />
              )}
              showsVerticalScrollIndicator={false}
              keyExtractor={item => item.id}
              contentContainerStyle={styles.flatListContent}
            />
          
    </View>
  )
}

export default TenDayForecast

const styles = StyleSheet.create({

  container: {
    backgroundColor: '#001A33',
    width: '90%',
    alignItems: 'center',
    borderRadius: 10,
    padding: 20,
    opacity: 0.8,
    marginVertical: 40,
  },

  blackContainer: {
    backgroundColor: 'black',
    opacity:0.8
  },
      forecasttext:{

        width:340,
        height:50,
        marginLeft: 25,
        opacity:0.8,
        color:'white',
        fontSize:15,
        borderBottomWidth: 0.2,
        borderBottomColor:'white',
      
      
      },
      
      header: {
        color: 'white',
        fontSize: 18,
        marginBottom: 20,
        textAlign: 'center',
      },

      flatListContent: {
        alignItems: 'center',
      },
})