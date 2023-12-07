import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useState } from "react";
import TestsSample from "./src/utils/TestsSample" ;

// import MainNavigator from './src/navigate/MainNavigator';
import Stacks  from './src/navigate/Stacks';

const Tab = createBottomTabNavigator();

export default function App() {
  const [ userRegistered , setUserRegistered ] = useState(false);

  const handleRegistrationComplete = ()=> {
    setUserRegistered(!userRegistered);
  };

  return (
    <NavigationContainer>

      <TestsSample/>
      {/* <Stacks>
        <TestsSample/>
      </Stacks> */}
      
      {/* <MainNavigator></MainNavigator> */}

    </NavigationContainer>
  );
}
