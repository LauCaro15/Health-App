import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Alert} from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Button , InputText } from '../utils/Library' ;

const LoginForm = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();

  const ip = "192.168.10.17";

  const handleLogin = async () => {
    console.log("Email", email);
    console.log("Password", password);
    try {
      const response = await fetch(
        `http://${ip}:3500/api/v1/admins/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email,
            password: password,
          }),
        }
      );

      const data = await response.json();
      const accessToken = data.access;
      await AsyncStorage.setItem("accessToken", accessToken);

      console.log(accessToken);

      const role = data.rol;
      await AsyncStorage.setItem("role", role);

      console.log(role);
      
      const userId = data.user_id;
      await AsyncStorage.setItem("userId", userId);

      console.log(userId);

      Alert.alert(
        "Inicio de sesión exitoso",
        "¡Bienvenido!"
      );
      navigation.navigate("PostsUser");
    } catch (error) {
      console.error("Error de inicio de sesión:", error);
      Alert.alert(
        "Error",
        "Nombre de usuario o contraseña incorrectos. Por favor, inténtalo de nuevo."
      );
    }
  };
  const goToRegister = () => {
    navigation.navigate("Registro");
  }
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Iniciar Sesión</Text>
        {/* <InputText
          label="Correo Electrónico"
          placeholder="example@test.com"
          iconName="mail"
          setTextFunction={setEmail}
        /> */}
        {/* <InputText
          label="Correo Electrónico"
          placeholder="********"
          setTextFunction={setPassword}
          isPassword={true}
        /> */}
        <TextInput
          style={styles.input}
          placeholder="Email"
          onChangeText={text => setEmail(text)}
          value={email}
        />
        <TextInput
          style={styles.input}
          placeholder="Contraseña"
          secureTextEntry={true}
          onChangeText={text => setPassword(text)}
          value={password}
        />
        <Button text="Iniciar Sesión" onPressAction={handleLogin} />
      </View>
      <View>
        <Text style={styles.text}>¿No tienes una cuenta?</Text>
        <Button text="Registrarse" onPressAction={goToRegister} />
      </View>


            {/* <Picker selectedValue = {selectedCategory} onValueChange = {(itemSelected) => setSelectedCategory(itemSelected)}>
          <Picker.Item label = 'Cédula de Cuidadania' value = 'Cédula de Cuidadania' />
          <Picker.Item label = 'Cédula Extranjera' value = 'Cédula Extranjera' />
          <Picker.Item label = 'Tarjeta de Identidad' value = 'Tarjeta de Identidad' />
          <Picker.Item label = 'Pasaporte' value = 'Pasaporte' />
          <Picker.Item label = 'Otro' value = 'Otro' />
        </Picker>     */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  text: {
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 10,

  },
  input: {
    width: 300,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
  },
});

export default LoginForm;
