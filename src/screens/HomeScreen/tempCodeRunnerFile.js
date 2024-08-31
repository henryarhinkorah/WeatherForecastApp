import { StyleSheet, Text, View,ScrollView,ImageBackground, ActivityIndicator } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import TodayPredictions from '../../components/TodayPredictions'
import PrecipitationWidget from '../../components/PrecipitationWidget'
import UV from '../../components/Uv Index Widget'
import TenDayForecast from '../../components/TenDayForecast'
import WindWidget from '../../components/WindWidget/WindWidget'
import HumidityWidget from '../../components/HumidityWidget'
import PressureWidget from '../../components/PressureWidget'
import { useEffect } from 'react';


const url = 'https://api.openweathermap.org/data/2.5/weather?q=California&appid=6b13006e25b05078cc05f51179e74641&units=metric'


const HomeScreen = () => {

  const [weather, setWeather] = useState({
    name: '',
    "main":{
      "temp":306.15, //current temperature
      "pressure":1013,
      "humidity":44,
      "temp_min":306.15, //min current temperature in the city
      "temp_max":306.15 //max current temperature in the city
    }
  })

  const navigation = useNavigation();
  const weatherComment = "Clear"; // Can be replaced with dynamic weather comment

  const fetchWeather = async()  => {
    console.log("Fetch data")
   const results= await fetch(url)
   const data = await results.json()
   console.log(JSON.stringify(data,null, 2))
   setWeather(data)
  }
  
  useEffect(() => {
    fetchWeather();
  },  [])

  if(!weather) {
    return <ActivityIndicator/>
  }
  
 

  const getBackgroundImage = (comment) => {
    switch (comment.toLowerCase()) {
      case 'cloudy':
        return 'https://th.bing.com/th/id/OIP.5DPujA7kyWEYSkz317y5iwHaLH?rs=1&pid=ImgDetMain';
      case 'Mostly clear':
      default:
        return 'https://images.pexels.com/photos/2931915/pexels-photo-2931915.jpeg?auto=compress&cs=tinysrgb&w=400';
    }
  };  return (
           

    
    <ImageBackground
    //source=  {{uri: 'https://images.pexels.com/photos/6195041/pexels-photo-6195041.jpeg?auto=compress&cs=tinysrgb&w=400'}}
    source={{ uri: getBackgroundImage(weatherComment) }}
    style ={styles.background}
    > 

    <ScrollView >
      <View style = {styles.container}>

              
              <Text style ={styles.location}> {weather.name} </Text>
              <Text style ={styles.temperature}> {weather.main.temp}</Text>
              <Text style ={styles.weathercomment}>{weatherComment}</Text>
              <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
              <Text style={{ color: 'white' }}>{weather.main.temp_min}°C</Text>
              <Text style={{ color: 'white', marginHorizontal: 10 }}> | </Text>
              <Text style={{ color: 'white' }}>{weather.main.temp_max}°C</Text>
            </View>

              
              <TodayPredictions weatherComment={weatherComment} onPress={() => navigation.navigate('UVIndex')} />
              <TenDayForecast weatherComment={weatherComment} />
              
            <View style ={styles.widgetsContainer}>
            <UV weatherComment={weatherComment}  onPress={() => navigation.navigate('UVIndex')}/>
            <WindWidget weatherComment={weatherComment} onPress={() => navigation.navigate('WindWidgetScreen')} />
            <PrecipitationWidget weatherComment={weatherComment}  onPress={() => navigation.navigate('PrecipitationScreen')} />
            <HumidityWidget weatherComment={weatherComment}   onPress={() => navigation.navigate('HumidityScreen')} />
            <PressureWidget weatherComment={weatherComment} onPress={() => navigation.navigate('PressureScreen')} />
            </View>
             
      </View>

    </ScrollView>
    </ImageBackground>
  )
}



export default HomeScreen

const styles = StyleSheet.create({

  container:{
  alignItems:'center',
  justifyContent:'center',
      
  },
  blackContainer: {
    backgroundColor: 'black',
    opacity:0.8,
  },

  location:{
    fontSize:26,
   fontWeight:'400',
    alignSelf: 'center',
    marginTop:90,
    color: 'white'
  },

temperature:{
fontSize:85,
marginTop:20,
alignSelf: 'center',
fontWeight:'100',
color: 'white'

},

background:{
flex:1,
flexDirection:'row',


},

weathercomment:{

  fontSize:15,
alignSelf: 'center',

color: 'white'
},

hl:{
  fontSize:15,
  
  alignSelf: 'center',
  
  color: 'white'
},

widgetsContainer: {
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'space-between',  // Or 'space-around', 'center' depending on your layout preference
  marginVertical: 10,
  alignItems:'center',
  width:'90%',
  height:'22%',
  

},



})