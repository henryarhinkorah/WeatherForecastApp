import { StyleSheet, Text, View,ScrollView,ImageBackground, ActivityIndicator, TextInput, TouchableOpacity} from 'react-native'
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
import CloudinessWidget from '../../components/CloudWidget';
import SearchBar from '../../components/SearchBar';


const cityName = 'Accra';

const apiKey = '6b13006e25b05078cc05f51179e74641'; 




const HomeScreen = () => {

  const [weather, setWeather] = useState({
    description: 'clear',
    name: '',
    weather:[{main: 'Rain'}],

    "main":{
      "temp":306, //current temperature
      "pressure":1013,
      "humidity":44,
      "temp_min":306.15, 
      "temp_max":306.15,
      "pressure":9
    },  })

    const [cityName, setCityName] = useState('Accra'); 



  const navigation = useNavigation();
  // Initialize as a default comment

  const fetchWeather = async (cityName) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=6b13006e25b05078cc05f51179e74641&units=metric`;
      console.log("Fetch data");
      const results = await fetch(url);
      const data = await results.json();
      console.log(JSON.stringify(data, null, 2));
     setWeather(data); // Update the weather state including description
     setWeatherComment(data.weather[0]?.main || 'Clear'); // Update weatherComment
  };

  useEffect(() => {fetchWeather(cityName);},[cityName])
 if(!weather) {
    return <ActivityIndicator/>
  }
  
  const handleCityNameChange = (newCityName) => {
    setCityName(newCityName); // Update cityName and trigger useEffect
  };
 
  const [weatherComment, setWeatherComment] = useState("Clear");
  const getBackgroundImage = (comment) => {
    switch (comment.toLowerCase()) {
      case 'clouds':
        return 'https://th.bing.com/th/id/OIP.5DPujA7kyWEYSkz317y5iwHaLH?rs=1&pid=ImgDetMain';
      case 'clear':
      default:
        return 'https://images.pexels.com/photos/2931915/pexels-photo-2931915.jpeg?auto=compress&cs=tinysrgb&w=400';
    }
  };  

  
  
  
  return (
           
   

    
    <ImageBackground
    //source=  {{uri: 'https://images.pexels.com/photos/6195041/pexels-photo-6195041.jpeg?auto=compress&cs=tinysrgb&w=400'}}
    source={{ uri: getBackgroundImage(weatherComment) }}
    style ={styles.background}
    > 



    <ScrollView >

<SearchBar   onSearch={handleCityNameChange}/>
   
        

     <View style={styles.container}>
  <Text style={styles.location}>{weather.name}</Text>
  <Text style={styles.temperature}>{Math.round(weather.main.temp)}°C</Text>
  <Text style={styles.weathercomment}>{weather.weather[0].main}</Text>
  <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
    <Text style={{ color: 'white' }}>L: {Math.round(weather.main.temp_min)}°C</Text>
    <Text style={{ color: 'white', marginHorizontal: 10 }}> | </Text>
    <Text style={{ color: 'white' }}>H: {Math.round(weather.main.temp_max)}°C</Text>
  </View>


              
              <TodayPredictions weatherComment={weatherComment} onPress={() => navigation.navigate('UVIndex')} />
              <TenDayForecast weatherComment={weatherComment} cityName={cityName} apiKey={apiKey} />
              
            <View style ={styles.widgetsContainer}>
            <CloudinessWidget weatherComment={weatherComment} cityName={cityName}  onPress={() => navigation.navigate('WindWidgetScreen')} />
            <WindWidget weatherComment={weatherComment} cityName={cityName}  onPress={() => navigation.navigate('WindWidgetScreen')} />
            <PrecipitationWidget weatherComment={weatherComment} cityName={cityName} onPress={() => navigation.navigate('PrecipitationScreen')} />
            <HumidityWidget weatherComment={weatherComment} cityName={cityName}   onPress={() => navigation.navigate('HumidityScreen')} />
            <PressureWidget weatherComment={weatherComment} cityName={cityName} onPress={() => navigation.navigate('PressureScreen')} />
            </View>
             
      </View>

    </ScrollView>
    </ImageBackground>
  )
}



export default HomeScreen;

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
    color: 'white'
  },

temperature:{
fontSize:85,
marginTop:10,
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

searchContainer: {
  flexDirection: 'row',
  alignItems: 'center',
  marginTop: 20,
  width: '90%',
  alignSelf: 'center',
},
searchBar: {
  height: 40,
  borderColor: 'white',
  borderWidth: 1,
  borderRadius: 20, // Rounded corners
  width: '80%',
  paddingHorizontal: 10,
  color: 'white',
  backgroundColor: 'rgba(255, 255, 255, 0.2)', // Slightly transparent background
},
searchButton: {
  marginLeft: 10,
  padding: 10,
  borderRadius: 20, // Rounded corners for consistency
  backgroundColor: 'rgba(255, 255, 255, 0.3)', // Slightly transparent background for button
},



})