import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useState } from "react";
import { useEffect } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import TestsSample from "./src/utils/TestsSample" ;

// import MainNavigator from './src/navigate/MainNavigator';
import Stacks  from './src/navigate/Stacks';


const Tab = createBottomTabNavigator();

export default function App() {

  useEffect( async() => {
    await AsyncStorage.removeItem("accessToken");
  }, []);

  return (
    <NavigationContainer>

      <Stacks>
        <TestsSample/>
      </Stacks>
      
      {/* <MainNavigator></MainNavigator> */}

    </NavigationContainer>
  );
}
