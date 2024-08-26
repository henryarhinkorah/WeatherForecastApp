import { StyleSheet, Text, View,ScrollView,ImageBackground} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import TodayPredictions from '../../components/TodayPredictions'
import PrecipitationWidget from '../../components/PrecipitationWidget'
import UV from '../../components/Uv Index Widget'
import TenDayForecast from '../../components/TenDayForecast'
import WindWidget from '../../components/WindWidget/WindWidget'
import HumidityWidget from '../../components/HumidityWidget'
import PressureWidget from '../../components/PressureWidget'


const HomeScreen = () => {
  const navigation = useNavigation();
  const weatherComment = "clear"; // Can be replaced with dynamic weather comment

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

              
              <Text style ={styles.location}> Ayeduase,Kumasi </Text>
              <Text style ={styles.temperature}> 36°</Text>
              <Text style ={styles.weathercomment}>{weatherComment}</Text>
              <Text style ={styles.hl}> H: 32°  L:25° </Text>
              
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