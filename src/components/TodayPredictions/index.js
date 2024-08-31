import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'


const TodayPredictions = ({ weatherComment}) => {
  return (
    <View style={[styles.container, weatherComment.toLowerCase() === 'clouds' && styles.blackContainer]}>
      <Text style ={styles.toptext}>Partly cloudy conditions from 12AM - 8AM, with mostly cloudy conditions expected at 8AM</Text>
     
      <View style ={styles.icons}> 
          <Text style ={styles.interval}> Now  </Text>
          <Text style ={styles.interval}> 1PM  </Text>
          <Text style ={styles.interval}> 2PM  </Text>
          <Text style ={styles.interval}> 3PM  </Text>
          <Text style ={styles.interval}> 4PM  </Text>
          <Text style ={styles.interval}> 5PM  </Text>
      </View>

      <View style ={styles.icons}> 
          <Ionicons name ={'sunny'} size ={25} color = {'yellow'}/>
          <Ionicons name ={'sunny'} size ={25} color = {'yellow'} />
          <Ionicons name ={'sunny'} size ={25} color = {'yellow'} />
          <Ionicons name ={'sunny'} size ={25} color = {'yellow'} />
          <Ionicons name ={'sunny'} size ={25} color = {'yellow'} />
          <Ionicons name ={'partly-sunny'} size ={25} color = {'white'}/>
      </View>

      <View style ={styles.icons}>

        <Text style ={styles.temperature}> 24°</Text>
        <Text style ={styles.temperature}> 34°</Text>
        <Text style ={styles.temperature}> 27°</Text>
        <Text style ={styles.temperature}> 26°</Text>
        <Text style ={styles.temperature}> 24°</Text>
        <Text style ={styles.temperature}> 22°</Text>

      </View >
     
     
    </View>
  )
}

export default TodayPredictions

const styles = StyleSheet.create({

    container:{
      backgroundColor: 'rgba(0, 105, 146, 0.5)',
        borderRadius: 8,
        marginTop:30,
        padding:25,
        width:'90%',
        height:'14%',
        fontWeight:'400',
        paddingBottom:30,
        
    },
    blackContainer: {
      backgroundColor: 'black',
      opacity:0.8
    },

    toptext:{
      
        color:'white',
        fontWeight:'400',
        borderBottomWidth:1,
        borderBottomColor: 'rgba(255, 255, 255, 0.5)', // Lighter border color
        paddingBottom: 10, // Distance between text and border bottom
        
        
    },
    
    interval:{
      color:'white',
      marginTop:20,
      marginBottom:15,
      
    },
    
    temperature:{
      fontSize:18,
      color:'white',
     marginTop:5,
     marginBottom:0
      
    },
    icons:{
      flexDirection:'row',
      justifyContent: 'space-between',
     
      

      
    }
})