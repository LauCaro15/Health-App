import React, { useEffect, useState } from 'react'
import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import { Pedometer } from 'expo-sensors'

const PedometerAPP = () => {
  const [PedometerAvailability,setPedometerAvailability] = useState("");
  const [stepCount, updateStepCount] = useState(0);

  useEffect(()=>{
    subscribe();
  },[])

  subscribe = () => {
    const subscription = Pedometer.watchStepCount((result)=>{
      updateStepCount(result.steps);
    })

    Pedometer.isAvailableAsync().then(
      (result) => {
        setPedometerAvailability(String(result))
      },
      (error) => {
        setPedometerAvailability(error)
      }
    )
  }

  return (
    <View style={styles.container}>
        <ImageBackground
        style={{flex:1}}
        resizeMode='cover'
        source={require('../../assets/run.jpg')}
        >
            <View style={{flex:1, justifyContent: "center"}}>
                <Text style={styles.headingDesign}>Podometro activo: {PedometerAvailability}</Text>
                <Text>
                  {stepCount}
                </Text>
            </View>

        </ImageBackground>

    </View>
  )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:'#fff',
    },
    headingDesign:{
        color:"white",
        backgroundColor:'red',
        alignSelf:"center",
        fontSize:20,
        fontWeight:'bold',
        fontFamily:"Roboto",
    }
})

export default PedometerAPP
