import { StyleSheet, Text, View,} from 'react-native'
import React from 'react'



const Forecast = ({item}) => {
  return (
    
      
      <Text style = {styles.forecasttext}>{item.textarr} </Text>
   
  )
}
export default Forecast

const styles = StyleSheet.create({
  forecasttext:{
  
    width:340,
    height:50,
    marginLeft: 25,
    opacity:0.8,
    color:'white',
    marginTop:8,
    padding:15,
    fontSize:15,
    borderRadius:10,
  },
  




  
})