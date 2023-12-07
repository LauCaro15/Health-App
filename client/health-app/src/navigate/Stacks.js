import { createStackNavigator } from '@react-navigation/stack';
import React, { useEffect, useState } from 'react';
import { Dimensions, StyleSheet } from 'react-native';

import PedometerAPP from "../screens/PedometerAPP"
/* import Pokemons from "../screens/Pokemons"
import Home from "../screens/Home"
import Movies from "../screens/Movies"
import Posts from "../screens/Posts" */
import RegisterForm from '../screens/RegisterForm';
import LoginForm from '../screens/LoginForm';
import PostsListTest from '../utils/tests/PostsListTest';
import CreatePost from '../screens/CreatePost';
/* import Case1 from "../screens/Case1" */
// import MainNavigator from './MainNavigator';

const Stack = createStackNavigator();

const Stacks = () => {
    const [orientation, setOrientation] = useState(null);

    const handleOrientationChange = ({ window: { width, height } }) => {
        const newOrientation = height > width ? "Portrait" : "Landscape";
        setOrientation(newOrientation);
    };

    useEffect(() => {
        Dimensions.addEventListener("change", handleOrientationChange);
        return () => {
          //Dimensions.removeEventListener("change", handleOrientationChange);
        };
    }, []);

    useEffect(() => {
        console.log("Orientation:", orientation);
    }, [orientation]); // Se ejecutará cuando cambie la orientación

  return (
    <Stack.Navigator
    initialRouteName="Posts"
    >
        {/* <Stack.Screen
            name="Home"
            component={Home}
            options={{ headerShown: false }} // Esto oculta el encabezado
        /> */}
        <Stack.Screen
            name="Registro"
            component={RegisterForm}
            options={{ title: "Registro" }} // Personaliza el título del encabezado
        />
        <Stack.Screen
            name="Login"
            component={LoginForm}
            options={{ title: "Login" }} // Personaliza el título del encabezado
        />
        <Stack.Screen
            name="Posts"
            component={PostsListTest}
            options={{ title: "Posts" }} // Personaliza el título del encabezado
        />
        <Stack.Screen
            name="PostsUser"
            component={PostsListTest}
            options={{ title: "Posts" }} // Personaliza el título del encabezado
        />
        <Stack.Screen
            name="CreatePost"
            component={CreatePost}
            options={{ title: "Creación Post" }} // Personaliza el título del encabezado
        />
        {/* <Stack.Screen
            name="PedometerAPP"
            component={PedometerAPP}
            options={{ title: "Pedometer" }} // Personaliza el título del encabezado
        /> */}
        {/* <Stack.Screen
            name="Pokemons"
            component={Pokemons}
            options={{ title: "Pokemons" }}
        />
        <Stack.Screen
            name="Movies"
            component={Movies}
            options={{ title: "Movies" }}
        />
        <Stack.Screen
            name="Posts"
            component={Posts}
            options={{ title: "Posts" }}
        />
        <Stack.Screen
            name="Case1"
            component={Case1}
            options={{ title: "Case1" }}
        /> */}

    </Stack.Navigator>

  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center'
    },
    headerStylePortrait: {
      backgroundColor: "#2181CD",
      height: 100,
    },
    headerStyleLandscape: {
      backgroundColor: "#2181CD",
      height: 75,
    },
});

export default Stacks
