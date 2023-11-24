import React, { useEffect, useState } from 'react'
import { ImageBackground, StyleSheet, Text, View, Dimensions } from 'react-native'
import { Pedometer } from 'expo-sensors'
import CircularProgress from 'react-native-circular-progress-indicator'

const PedometerAPP = () => {
  const [PedometerAvailability,setPedometerAvailability] = useState("");
  const [stepCount, updateStepCount] = useState(0);

  var WindowHeight = Dimensions.get("window").height;

  var Dist = StepCount / 1300;
  var DistanceCovered = Dist.toFixed(4);

  var cal = DistanceCovered * 60;
  var caloriesBurnt = cal.toFixed(4);

  useEffect(()=>{
    subscribe();
  },[])

  subscribe = () => {
    const subscription = Pedometer.watchStepCount((result) => {
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
          <Text style={styles.headingDesign}>
            Podometro activo: {PedometerAvailability}
          </Text>
        </View>
              {/* <Text>
                {stepCount}
              </Text> */}
        <View style={{ flex: 3 }}>
          <CircularProgress
            value={stepCount}
            maxValue={6500}
            radius={210}
            textColor={'#ECF0F1'}
            activeStrokeColor={'#F39C12'}
            inActiveStrokeColor={'#9B59B6'}
            inActiveStrokeOpacity={0.5}
            inActiveStrokeWidth={40}
            activeStrokeWidth={40}
            title={"Step Count"}
            titleColor={"#ECF0F1"}
            titleStyle={{fontWeight:"bold"}}
          />
        </View>
        <View style={{ flex: 1, justifyContent: "center" }}>
          <View style={{ flex: 1 }}>
            <Text
              style={[
                styles.textDesign,
                { paddingLeft: 20, marginLeft: '23%' },
              ]}
            >
              Target : 6500 steps(5kms)
            </Text>
          </View>
          <View style={{ flex: 1 }}>
            <Text
              style={[
                styles.textDesign,
                { width: "93%", paddingLeft: 20, marginLeft: '-3.5%' },
              ]}
            >
              Distance Covered : {DistanceCovered} km
            </Text>
          </View>
          <View style={{ flex: 1 }}>
            <Text
              style={[
                styles.textDesign,
                {  paddingLeft: 10, marginLeft: '23%' },
              ]}
            >
              Calories Burnt : {caloriesBurnt}
            </Text>
          </View>
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
    headingDesign: {
      color:"white",
      backgroundColor:'purple',
      alignSelf:"center",
      fontSize:20,
      fontWeight:'bold',
      fontFamily:"Roboto",
    },
    textDesign: {
      backgroundColor: 'purple',
      height: 50,
      width : '85%',
      borderColor: "white",
      borderWidth: 1,
      borderRadius: 20,
      overflow: "hidden",
      fontSize: 25,
      color: "white",
      fontWeight:'bold',
      fontFamily:"Roboto",
    },
})

export default PedometerAPP
