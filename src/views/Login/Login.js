import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableHighlight,
  Alert
} from "react-native";
import { TextInput } from "react-native-paper";

const Login = ({ navigation }) => {
  const [correo, setCorreo] = useState("");
  const [clave, setClave] = useState("");
  
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
    <View style={styles.container}>
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
        <View style={styles.loginBox}>
        <Text style={textStyles.ingresa}>Ya tienes cuenta?, ingresa:</Text>
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1
  },
  loginBox: {
    flex: 1,
    marginHorizontal: 15
  },
  botonContainer: {
    marginTop: 50,
    width: "100%",
    alignItems: "center",
  },
  boton: {
    backgroundColor: "#C52233",
    height: 60,
    width: "100%",
    justifyContent: "center",
    borderRadius: 50,
    marginTop: 25
  },
});

const textStyles = StyleSheet.create({
  intro: {
    color: "#797A7A",
    textAlign: "center",
    paddingTop: 40,
    paddingHorizontal: 18,
    fontSize: 16,
    lineHeight: 18,
    letterSpacing: 1.5
  },
  join: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
    textDecorationLine: "underline",
    color: "#C52233",
    fontSize: 18,
    marginTop: 40,
  },
  ingresa: {
    color: "#797A7A",
    marginTop: 70,
    fontSize: 16,
    textAlign: "left",
  },
  forgot: {
    textAlign: "center",
    color: "#C52233",
    fontSize: 18,
    fontWeight: "bold",
    textDecorationLine: "underline",
    marginTop: 90,
  },
});

const paperTheme = {
  input: {
    colors: {
      primary: "#C52233",
      text: "#797A7A",
      placeholder: "#797A7A",
      background: "rgba(250,250,250,0)",
    },
  },
};

export default Login;
