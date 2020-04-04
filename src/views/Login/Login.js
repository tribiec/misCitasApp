import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableHighlight,
  Alert
} from "react-native";
import { TextInput } from "react-native-paper";
import BackgroundContainer from "../../components/BackgroundContainer";

const Login = ({ navigation }) => {
  const [correo, setCorreo] = React.useState("");
  const [clave, setClave] = React.useState("");
  
  const submitLogin = () => {
    if(correo == "" && clave == ""){
      Alert.alert(
        "Faltan Campos",
        "Todos los campos deben ser llenados",
        [
          { text: "OK", onPress: () => console.log("OK Pressed") }
        ],
        { cancelable: false }
      );
    }else{
      Alert.alert(
        "Cargando login...",
        "falta hacer el request al API (Motivos de Tiempo para proxima entrega)",
        [
          { text: "OK", onPress: () => console.log("OK Pressed") }
        ],
        { cancelable: false }
      )
    }
  }
  return (
    <View style={{ flex: 1 }}>
      <BackgroundContainer>
        <Text style={textStyles.intro}>
          Quieres pasarla bien con gente nueva?, Buscas una velada, una ocasión
          casual?
        </Text>
        <Text
          style={textStyles.join}
          onPress={() => navigation.navigate("Register")}
        >
          Registrate Ahora
        </Text>
        <Text style={textStyles.ingresa}>Ya tienes cuenta?, ingresa:</Text>
        <View style={styles.loginBox}>
          <TextInput
            underlineColor="#C52233"
            label="Correo Electronico"
            mode="flat"
            theme={paperTheme.input}
            style={{ marginTop: 20 }}
            value={correo}
            onChangeText={(_correo) => setCorreo(_correo)}
          />
          <TextInput
            underlineColor="#C52233"
            label="Contraseña"
            mode="flat"
            theme={paperTheme.input}
            style={{ marginTop: 20 }}
            value={clave}
            onChangeText={(_clave) => setClave(_clave)}
            secureTextEntry
          />
          <Text style={textStyles.forgot}>Olvidaste tu contraseña?</Text>
          <TouchableHighlight style={styles.botonContainer}>
            <TouchableHighlight style={styles.boton}>
              <Button
                title="Ingresar"
                color="white"
                accessibilityLabel="Ingresar al Sistema"
                onPress={submitLogin}
              />
            </TouchableHighlight>
          </TouchableHighlight>
        </View>
      </BackgroundContainer>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    backgroundColor: "red",
    flex: 2,
  },
  image: {
    flex: 1,
  },
  loginBox: {
    backgroundColor: "rgba(196, 196, 196, 0.2)",
    flex: 1,
  },
  botonContainer: {
    marginTop: 50,
    width: "100%",
    alignItems: "center",
  },
  boton: {
    backgroundColor: "#C52233",
    height: 60,
    width: "60%",
    justifyContent: "center",
    borderRadius: 50,
  },
});

const textStyles = StyleSheet.create({
  intro: {
    color: "white",
    textAlign: "center",
    paddingTop: 40,
    fontSize: 18,
    letterSpacing: 2,
  },
  join: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
    textDecorationLine: "underline",
    color: "#C52233",
    fontSize: 18,
    marginTop: 25,
  },
  ingresa: {
    color: "white",
    marginTop: 40,
    fontSize: 16,
    textAlign: "center",
  },
  forgot: {
    textAlign: "center",
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    textDecorationLine: "underline",
    marginTop: 90,
  },
});

const paperTheme = {
  input: {
    colors: {
      primary: "#C52233",
      text: "white",
      placeholder: "white",
      background: "rgba(250,250,250,0)",
    },
  },
};

export default Login;
