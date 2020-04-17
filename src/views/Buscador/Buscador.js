import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import Swipe from "../../components/Swipe";
import Header from "../../components/Header";

const Buscador = ({ navigation }) => {
  const [leido, setLeido] = useState(false);

  const Instrucciones = () => {
    const size = Dimensions.get("window");
    return (
      <View
        style={{
          height: size.height - 100,
          width: size.width,
          justifyContent: "center",
          alignItems: "center",
          paddingHorizontal: 10,
        }}
      >
        <Text style={[Styles.text, { marginBottom: 40}]}>
          Desliza hacia la Izquierda para dar Like y hacia la Derecha para Descartar
        </Text>
        <TouchableOpacity onPress={() => setLeido(true)}>
          <Text
            style={[Styles.text, {marginBottom: 80}]}
          >
            Continuar
          </Text>
        </TouchableOpacity>
      </View>
    );
  };
  
  return (
    <View>
      <Header navigation={navigation}/>
      {!leido ? (
        <Instrucciones />
      ) : (
        <>
          <Swipe />
        </>
      )}
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "#FBFBFC",
    flex: 1,
  },
  text: {
    textAlign: "center",
    fontSize: 24,
    fontWeight: "300",
    color: "#797A7A",
    textTransform: "uppercase",
    textShadowColor: "#DDDDDF",
    textShadowRadius: 2,
    textShadowOffset: {
      height: 2,
      width: 0
    }
  }
});

export default Buscador;
